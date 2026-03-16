package fr.gauthierdebra.portfolio.controller;

import fr.gauthierdebra.portfolio.dto.ContactDto;
import fr.gauthierdebra.portfolio.service.ContactService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/contact")
public class ContactController {

    private final ContactService contactService;

    public ContactController(ContactService contactService) {
        this.contactService = contactService;
    }

    @PostMapping
    public ResponseEntity<Map<String, String>> sendContact(@Valid @RequestBody ContactDto dto) {
        contactService.saveAndNotify(dto);
        return ResponseEntity.ok(Map.of(
            "status", "success",
            "message", "Message envoye avec succes."
        ));
    }
}
