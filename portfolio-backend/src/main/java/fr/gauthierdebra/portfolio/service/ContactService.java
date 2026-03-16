package fr.gauthierdebra.portfolio.service;

import fr.gauthierdebra.portfolio.dto.ContactDto;
import fr.gauthierdebra.portfolio.model.Contact;
import fr.gauthierdebra.portfolio.repository.ContactRepository;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.List;

import static org.springframework.http.HttpStatus.NOT_FOUND;

@Service
public class ContactService {

    private static final Logger log = LoggerFactory.getLogger(ContactService.class);

    private final ContactRepository contactRepository;
    private final JavaMailSender mailSender;

    @Value("${app.mail.to}")
    private String mailTo;

    @Value("${app.mail.from}")
    private String mailFrom;

    public ContactService(ContactRepository contactRepository, JavaMailSender mailSender) {
        this.contactRepository = contactRepository;
        this.mailSender = mailSender;
    }

    public Contact saveAndNotify(ContactDto dto) {
        // 1. Sauvegarde en BDD
        Contact contact = new Contact();
        contact.setName(dto.getName());
        contact.setEmail(dto.getEmail());
        contact.setCompany(dto.getCompany());
        contact.setMessage(dto.getMessage());
        Contact saved = contactRepository.save(contact);

        // 2. Envoi email de notification
        try {
            sendNotificationEmail(saved);
            sendConfirmationEmail(saved);
            log.info("Email envoyé pour le contact #{} de {}", saved.getId(), saved.getName());
        } catch (Exception e) {
            log.error("Erreur envoi email pour contact #{}: {}", saved.getId(), e.getMessage());
            // On ne fait pas échouer la requête si l'email plante
        }

        return saved;
    }

    private void sendNotificationEmail(Contact contact) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom(mailFrom);
        message.setTo(mailTo);
        message.setSubject("📩 Nouveau message portfolio - " + contact.getName());
        message.setText(
            "Nouveau message reçu sur ton portfolio !\n\n" +
            "━━━━━━━━━━━━━━━━━━━━━━━━\n" +
            "👤 Nom       : " + contact.getName() + "\n" +
            "✉️  Email     : " + contact.getEmail() + "\n" +
            "🏢 Entreprise : " + (contact.getCompany() != null ? contact.getCompany() : "Non renseignée") + "\n" +
            "📅 Date       : " + contact.getCreatedAt() + "\n" +
            "━━━━━━━━━━━━━━━━━━━━━━━━\n\n" +
            "💬 Message :\n" + contact.getMessage() + "\n\n" +
            "━━━━━━━━━━━━━━━━━━━━━━━━\n" +
            "Réponds directement à : " + contact.getEmail()
        );
        mailSender.send(message);
    }

    private void sendConfirmationEmail(Contact contact) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom(mailFrom);
        message.setTo(contact.getEmail());
        message.setSubject("Message bien reçu — Gauthier DEBRA");
        message.setText(
            "Bonjour " + contact.getName() + ",\n\n" +
            "Merci pour votre message ! Je l'ai bien reçu et vous répondrai dans les plus brefs délais.\n\n" +
            "Cordialement,\n" +
            "Gauthier DEBRA\n" +
            "Développeur Fullstack\n" +
            "gauthierdebra.vercel.app"
        );
        mailSender.send(message);
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
