package fr.gauthierdebra.portfolio.controller;

import fr.gauthierdebra.portfolio.model.Contact;
import fr.gauthierdebra.portfolio.service.ContactService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin/messages")
public class AdminContactController {

    private final ContactService contactService;

    public AdminContactController(ContactService contactService) {
        this.contactService = contactService;
    }

    @GetMapping
    public ResponseEntity<List<Contact>> getAllContacts() {
        return ResponseEntity.ok(contactService.getAllContacts());
    }

    @GetMapping("/unread")
    public ResponseEntity<List<Contact>> getUnreadContacts() {
        return ResponseEntity.ok(contactService.getUnreadContacts());
    }

    @PatchMapping("/{id}/read")
    public ResponseEntity<Contact> markAsRead(@PathVariable Long id) {
        return ResponseEntity.ok(contactService.markAsRead(id));
    }
}
