package com.qburst.application.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.qburst.application.entity.JobApplication;
import com.qburst.application.repository.JobApplicationRepository;

@Service
public class JobApplicationService {

    private final JobApplicationRepository repository;

    public JobApplicationService(JobApplicationRepository repository) {
        this.repository = repository;
    }

    // Used when a new application is submitted
    public JobApplication saveApplication(JobApplication application) {

        application.setApplicationStatus("SUBMITTED");

        return repository.save(application);
    }

    // Used when updating application status
    public JobApplication updateApplicationStatus(Long id, String status) {

        JobApplication application = repository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Application not found"));

        application.setApplicationStatus(status);

        return repository.save(application);
    }

    public List<JobApplication> getAllApplications() {
        return repository.findAll();
    }

    public JobApplication getApplicationById(Long id) {

        return repository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Application not found"));
    }

    public List<JobApplication> getApplicationsByJob(Long jobId) {
        return repository.findByJobId(jobId);
    }

    public List<JobApplication> getApplicationsByEmail(String email) {
        return repository.findByEmail(email);
    }
}