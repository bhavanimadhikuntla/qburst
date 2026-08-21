package com.qburst.contact.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.qburst.contact.entity.ContactMessage;

public interface ContactRepository
        extends JpaRepository<ContactMessage, Long> {
}