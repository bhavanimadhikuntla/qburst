package com.qburst.job.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.qburst.job.entity.Job;
import com.qburst.job.repository.JobRepository;

@Service
public class JobService {

    private final JobRepository jobRepository;

    public JobService(JobRepository jobRepository) {
        this.jobRepository = jobRepository;
    }

    public List<Job> getAllJobs() {
        return jobRepository.findAll();
    }

    public Job getJobById(Long id) {
        return jobRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Job not found"));
    }

    public Job createJob(Job job) {
        return jobRepository.save(job);
    }

    public Job updateJob(Long id, Job updatedJob) {

        Job existingJob = getJobById(id);

        existingJob.setTitle(updatedJob.getTitle());
        existingJob.setLocation(updatedJob.getLocation());
        existingJob.setExperience(updatedJob.getExperience());
        existingJob.setEmploymentType(updatedJob.getEmploymentType());
        existingJob.setDescription(updatedJob.getDescription());
        existingJob.setResponsibilities(updatedJob.getResponsibilities());
        existingJob.setRequirements(updatedJob.getRequirements());
        existingJob.setSkills(updatedJob.getSkills());
        existingJob.setSalary(updatedJob.getSalary());
        existingJob.setPostedDate(updatedJob.getPostedDate());
        existingJob.setStatus(updatedJob.getStatus());

        return jobRepository.save(existingJob);
    }

    public void deleteJob(Long id) {
        jobRepository.deleteById(id);
    }
}
