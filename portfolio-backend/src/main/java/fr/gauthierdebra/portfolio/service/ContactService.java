package fr.gauthierdebra.portfolio.service;

import fr.gauthierdebra.portfolio.dto.ContactDto;
import fr.gauthierdebra.portfolio.model.Contact;
import fr.gauthierdebra.portfolio.repository.ContactRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.time.Duration;
import java.util.concurrent.CompletableFuture;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import static org.springframework.http.HttpStatus.NOT_FOUND;

@Service
public class ContactService {

    private static final Logger log = LoggerFactory.getLogger(ContactService.class);
    private static final String DEFAULT_RESEND_API_URL = "https://api.resend.com/emails";

    private final ContactRepository contactRepository;
    private final ObjectMapper objectMapper;
    private final HttpClient httpClient;

    @Value("${app.mail.to}")
    private String mailTo;

    @Value("${app.mail.from}")
    private String mailFrom;

    @Value("${app.mail.resend.api-key:}")
    private String resendApiKey;

    @Value("${app.mail.resend.api-url:" + DEFAULT_RESEND_API_URL + "}")
    private String resendApiUrl;

    @Value("${app.mail.send-confirmation:false}")
    private boolean sendConfirmationEmail;

    public ContactService(ContactRepository contactRepository, ObjectMapper objectMapper) {
        this.contactRepository = contactRepository;
        this.objectMapper = objectMapper;
        this.httpClient = HttpClient.newBuilder()
            .connectTimeout(Duration.ofSeconds(5))
            .build();
    }

    public Contact saveAndNotify(ContactDto dto) {
        Contact contact = new Contact();
        contact.setName(dto.getName());
        contact.setEmail(dto.getEmail());
        contact.setCompany(dto.getCompany());
        contact.setMessage(dto.getMessage());
        Contact saved = contactRepository.save(contact);

        sendEmailsInBackground(saved);

        return saved;
    }

    private void sendEmailsInBackground(Contact contact) {
        if (!isResendConfigured()) {
            log.warn("Envoi email désactivé: RESEND_API_KEY n'est pas définie.");
            return;
        }

        CompletableFuture.runAsync(() -> {
            try {
                sendNotificationEmail(contact);
                if (sendConfirmationEmail) {
                    sendConfirmationEmail(contact);
                }
                log.info("Emails traités pour le contact #{} de {}", contact.getId(), contact.getName());
            } catch (Exception e) {
                log.error("Erreur envoi email pour contact #{}: {}", contact.getId(), e.getMessage());
            }
        });
    }

    private void sendNotificationEmail(Contact contact) {
        sendEmail(
            mailTo,
            "Nouveau message portfolio - " + contact.getName(),
            "Nouveau message reçu sur ton portfolio !\n\n" +
            "Nom       : " + contact.getName() + "\n" +
            "Email     : " + contact.getEmail() + "\n" +
            "Entreprise : " + readableCompany(contact.getCompany()) + "\n" +
            "Date       : " + contact.getCreatedAt() + "\n\n" +
            "Message :\n" + contact.getMessage() + "\n\n" +
            "Réponds directement à : " + contact.getEmail(),
            contact.getEmail()
        );
    }

    private void sendConfirmationEmail(Contact contact) {
        sendEmail(
            contact.getEmail(),
            "Message bien reçu - Gauthier DEBRA",
            "Bonjour " + contact.getName() + ",\n\n" +
            "Merci pour votre message ! Je l'ai bien reçu et vous répondrai dans les plus brefs délais.\n\n" +
            "Cordialement,\n" +
            "Gauthier DEBRA\n" +
            "Développeur Fullstack\n" +
            "gauthierdebra.vercel.app",
            mailTo
        );
    }

    private void sendEmail(String to, String subject, String text, String replyTo) {
        try {
            Map<String, Object> payload = new LinkedHashMap<>();
            payload.put("from", mailFrom);
            payload.put("to", List.of(to));
            payload.put("subject", subject);
            payload.put("text", text);

            if (replyTo != null && !replyTo.isBlank()) {
                payload.put("reply_to", replyTo);
            }

            HttpRequest request = HttpRequest.newBuilder(URI.create(resendApiUrl))
                .timeout(Duration.ofSeconds(10))
                .header("Authorization", "Bearer " + resendApiKey)
                .header("Content-Type", "application/json")
                .POST(HttpRequest.BodyPublishers.ofString(objectMapper.writeValueAsString(payload)))
                .build();

            HttpResponse<String> response = httpClient.send(request, HttpResponse.BodyHandlers.ofString());

            if (response.statusCode() < 200 || response.statusCode() >= 300) {
                throw new IllegalStateException(
                    "Resend a retourné HTTP " + response.statusCode() + " : " + response.body()
                );
            }
        } catch (Exception exception) {
            throw new IllegalStateException(exception.getMessage(), exception);
        }
    }

    private boolean isResendConfigured() {
        return resendApiKey != null && !resendApiKey.isBlank();
    }

    private String readableCompany(String company) {
        if (company == null || company.isBlank()) {
            return "Non renseignee";
        }

        return company;
    }

    public List<Contact> getAllContacts() {
        return contactRepository.findAllByOrderByCreatedAtDesc();
    }

    public List<Contact> getUnreadContacts() {
        return contactRepository.findByReadFalseOrderByCreatedAtDesc();
    }

    public Contact markAsRead(Long id) {
        Contact contact = contactRepository.findById(id)
            .orElseThrow(() -> new ResponseStatusException(NOT_FOUND, "Contact #" + id + " introuvable"));
        contact.setRead(true);
        return contactRepository.save(contact);
    }
}
