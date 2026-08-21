package com.qburst.contact.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.qburst.contact.entity.ContactMessage;
import com.qburst.contact.service.ContactService;

@RestController
@RequestMapping("/api/contact")
public class ContactController {

    private final ContactService contactService;

    public ContactController(ContactService contactService) {
        this.contactService = contactService;
    }

    @PostMapping
    public ResponseEntity<ContactMessage> submitContact(
            @RequestBody ContactMessage message) {

        return ResponseEntity.ok(
                contactService.saveMessage(message));
    }

    @GetMapping
    public ResponseEntity<List<ContactMessage>> getAllMessages() {

        return ResponseEntity.ok(
                contactService.getAllMessages());
    }

    @GetMapping("/{id}")
    public ResponseEntity<ContactMessage> getMessage(
            @PathVariable Long id) {

        return ResponseEntity.ok(
                contactService.getMessageById(id));
    }
}
