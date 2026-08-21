package com.qburst.application.controller;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;

import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.qburst.application.entity.JobApplication;
import com.qburst.application.service.JobApplicationService;
@RestController
@RequestMapping("/api/applications")
public class JobApplicationController {

    private final JobApplicationService service;

    private final String uploadDirectory = "uploads/resumes/";

    public JobApplicationController(
            JobApplicationService service) {

        this.service = service;
    }

    @PostMapping("/apply/{jobId}")
    public ResponseEntity<JobApplication> applyForJob(

            @PathVariable Long jobId,

            @RequestParam String firstName,
            @RequestParam String lastName,
            @RequestParam String email,
            @RequestParam String mobile,
            @RequestParam String qualification,
            @RequestParam String experience,
            @RequestParam String skills,
            @RequestParam(required = false) String city,
            @RequestParam(required = false) String coverLetter,
            @RequestParam MultipartFile resume) throws IOException {

        JobApplication application =
                new JobApplication();

        application.setJobId(jobId);
        application.setFirstName(firstName);
        application.setLastName(lastName);
        application.setEmail(email);
        application.setMobile(mobile);
        application.setQualification(qualification);
        application.setExperience(experience);
        application.setSkills(skills);
        application.setCity(city);
        application.setCoverLetter(coverLetter);

        // Create upload directory
        Path uploadPath =
                Paths.get(uploadDirectory);

        Files.createDirectories(uploadPath);

        // Save resume
        String fileName =
                System.currentTimeMillis()
                + "_"
                + resume.getOriginalFilename();

        Path filePath =
                uploadPath.resolve(fileName);

        Files.copy(
                resume.getInputStream(),
                filePath,
                StandardCopyOption.REPLACE_EXISTING);

        application.setResumeFileName(
                resume.getOriginalFilename());

        application.setResumePath(
                filePath.toString());

        JobApplication saved =
                service.saveApplication(application);

        return ResponseEntity.ok(saved);
    }

    @GetMapping
    public ResponseEntity<List<JobApplication>>
    getAllApplications() {

        return ResponseEntity.ok(
                service.getAllApplications());
    }

    @GetMapping("/{id}")
    public ResponseEntity<JobApplication>
    getApplication(@PathVariable Long id) {

        return ResponseEntity.ok(
                service.getApplicationById(id));
    }

    @GetMapping("/job/{jobId}")
    public ResponseEntity<List<JobApplication>>
    getApplicationsByJob(
            @PathVariable Long jobId) {

        return ResponseEntity.ok(
                service.getApplicationsByJob(jobId));
    }

    @GetMapping("/email/{email}")
    public ResponseEntity<List<JobApplication>>
    getApplicationsByEmail(
            @PathVariable String email) {

        return ResponseEntity.ok(
                service.getApplicationsByEmail(email));
    }
    @GetMapping("/resume/{id}")
    public ResponseEntity<Resource> downloadResume(@PathVariable Long id) {

        try {

            JobApplication application =
                    service.getApplicationById(id);

            Path path = Paths.get(application.getResumePath());

            Resource resource =
                    new UrlResource(path.toUri());

            if (!resource.exists()) {
                return ResponseEntity.notFound().build();
            }

            return ResponseEntity.ok()
                    .header(
                        HttpHeaders.CONTENT_DISPOSITION,
                        "attachment; filename=\"" +
                        application.getResumeFileName() + "\""
                    )
                    .contentType(MediaType.APPLICATION_OCTET_STREAM)
                    .body(resource);

        } catch (Exception e) {

            return ResponseEntity.internalServerError().build();
        }
    }
    @PutMapping("/{id}/status")
    public ResponseEntity<JobApplication> updateStatus(
            @PathVariable Long id,
            @RequestParam String status) {

        JobApplication updated =
                service.updateApplicationStatus(id, status);

        return ResponseEntity.ok(updated);
    }
}
