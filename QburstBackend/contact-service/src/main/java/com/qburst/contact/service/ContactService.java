package com.qburst.contact.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.qburst.contact.entity.ContactMessage;
import com.qburst.contact.repository.ContactRepository;

@Service
public class ContactService {

    private final ContactRepository repository;

    public ContactService(ContactRepository repository) {
        this.repository = repository;
    }

    public ContactMessage saveMessage(ContactMessage message) {
        return repository.save(message);
    }

    public List<ContactMessage> getAllMessages() {
        return repository.findAll();
    }

    public ContactMessage getMessageById(Long id) {
        return repository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Message not found"));
    }
}
