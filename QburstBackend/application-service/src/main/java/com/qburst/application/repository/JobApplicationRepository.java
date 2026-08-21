package com.qburst.application.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.qburst.application.entity.JobApplication;

public interface JobApplicationRepository
        extends JpaRepository<JobApplication, Long> {

    List<JobApplication> findByJobId(Long jobId);

    List<JobApplication> findByEmail(String email);
}
