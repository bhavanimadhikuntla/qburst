package com.qburst.auth.service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Map;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.qburst.auth.entity.CandidateProfile;
import com.qburst.auth.entity.User;
import com.qburst.auth.repository.CandidateProfileRepository;
import com.qburst.auth.repository.UserRepository;

@Service
public class AuthService {

    private final UserRepository repository;
    private final CandidateProfileRepository candidateProfileRepository;

    public AuthService(
            UserRepository userRepository,
            CandidateProfileRepository candidateProfileRepository) {

        this.repository = userRepository;
        this.candidateProfileRepository =
                candidateProfileRepository;
    }

    // =========================================================
    // REGISTER
    // =========================================================

    public User register(User user) {

        if (repository.existsByEmail(user.getEmail())) {

            throw new RuntimeException(
                    "Email already registered"
            );
        }

        if (user.getRole() == null ||
                user.getRole().isBlank()) {

            user.setRole("CANDIDATE");
        }

        return repository.save(user);
    }

    // =========================================================
    // LOGIN
    // =========================================================

    public User login(
            String email,
            String password) {

        User user = repository
                .findByEmail(email)
                .orElseThrow(() ->
                        new RuntimeException(
                                "Invalid email or password"
                        )
                );

        if (!user.getPassword().equals(password)) {

            throw new RuntimeException(
                    "Invalid email or password"
            );
        }

        return user;
    }

    // =========================================================
    // GET USER BY EMAIL
    // =========================================================

    public User getUserByEmail(String email) {

        return repository
                .findByEmail(email)
                .orElseThrow(() ->
                        new RuntimeException(
                                "User not found"
                        )
                );
    }

    // =========================================================
    // UPDATE USER PROFILE - OLD METHOD
    // =========================================================

    public User updateProfile(
            Long userId,
            User updatedUser) {

        User existingUser = repository
                .findById(userId)
                .orElseThrow(() ->
                        new RuntimeException(
                                "User not found"
                        )
                );

        existingUser.setFirstName(
                updatedUser.getFirstName()
        );

        existingUser.setLastName(
                updatedUser.getLastName()
        );

        existingUser.setMobileNumber(
                updatedUser.getMobileNumber()
        );

        return repository.save(existingUser);
    }

    // =========================================================
    // UPDATE CANDIDATE PROFILE + RESUME
    // =========================================================

    public User updateProfile(
            Long userId,
            Map<String, String> profileData,
            MultipartFile resume) {

        // =====================================================
        // FIND USER
        // =====================================================

        User user = repository
                .findById(userId)
                .orElseThrow(() ->
                        new RuntimeException(
                                "User not found"
                        )
                );

        // =====================================================
        // UPDATE USERS TABLE
        // =====================================================

        if (profileData.containsKey("firstName")) {

            user.setFirstName(
                    profileData.get("firstName")
            );
        }

        if (profileData.containsKey("lastName")) {

            user.setLastName(
                    profileData.get("lastName")
            );
        }

        if (profileData.containsKey("email")) {

            String email =
                    profileData.get("email");

            if (email != null &&
                    !email.isBlank()) {

                user.setEmail(email);
            }
        }

        if (profileData.containsKey("mobileNumber")) {

            user.setMobileNumber(
                    profileData.get("mobileNumber")
            );
        }

        User savedUser =
                repository.save(user);

        // =====================================================
        // FIND OR CREATE CANDIDATE PROFILE
        // =====================================================

        CandidateProfile profile =
                candidateProfileRepository
                        .findByUserId(userId)
                        .orElseGet(() -> {

                            CandidateProfile newProfile =
                                    new CandidateProfile();

                            newProfile.setUserId(userId);

                            newProfile.setApplicationStatus(
                                    "SUBMITTED"
                            );

                            return newProfile;
                        });

        // =====================================================
        // UPDATE PROFILE FIELDS
        // =====================================================

        if (profileData.containsKey("qualification")) {

            profile.setQualification(
                    profileData.get("qualification")
            );
        }

        if (profileData.containsKey("specialization")) {

            profile.setSpecialization(
                    profileData.get("specialization")
            );
        }

        if (profileData.containsKey("experience")) {

            profile.setExperience(
                    profileData.get("experience")
            );
        }

        if (profileData.containsKey("skills")) {

            profile.setSkills(
                    profileData.get("skills")
            );
        }

        if (profileData.containsKey("city")) {

            profile.setCity(
                    profileData.get("city")
            );
        }

        if (profileData.containsKey("state")) {

            profile.setState(
                    profileData.get("state")
            );
        }

        // =====================================================
        // IMPORTANT: KEEP REMARKS
        // =====================================================

        if (profileData.containsKey("remarks")) {

            profile.setRemarks(
                    profileData.get("remarks")
            );
        }

        // =====================================================
        // SAVE RESUME
        // =====================================================

        if (resume != null &&
                !resume.isEmpty()) {

            try {

                // ---------------------------------------------
                // Create upload directory
                // ---------------------------------------------

                Path uploadPath =
                        Paths.get(
                                "uploads",
                                "resumes"
                        ).toAbsolutePath()
                         .normalize();

                Files.createDirectories(
                        uploadPath
                );

                // ---------------------------------------------
                // Get original filename
                // ---------------------------------------------

                String originalFileName =
                        resume.getOriginalFilename();

                if (originalFileName == null ||
                        originalFileName.isBlank()) {

                    throw new RuntimeException(
                            "Invalid resume filename"
                    );
                }

                // ---------------------------------------------
                // Remove unsafe path information
                // ---------------------------------------------

                originalFileName =
                        Paths.get(
                                originalFileName
                        )
                        .getFileName()
                        .toString();

                // ---------------------------------------------
                // Create unique filename
                // ---------------------------------------------

                String fileName =
                        userId
                        + "_"
                        + System.currentTimeMillis()
                        + "_"
                        + originalFileName;

                Path filePath =
                        uploadPath.resolve(
                                fileName
                        );

                // ---------------------------------------------
                // Save file
                // ---------------------------------------------

                Files.copy(
                        resume.getInputStream(),
                        filePath,
                        java.nio.file.StandardCopyOption
                                .REPLACE_EXISTING
                );

                // ---------------------------------------------
                // Store path in database
                // ---------------------------------------------

                profile.setResumePath(
                        filePath.toString()
                );

                System.out.println(
                        "================================="
                );

                System.out.println(
                        "RESUME UPLOAD SUCCESS"
                );

                System.out.println(
                        "FILE: " + filePath
                );

                System.out.println(
                        "SIZE: " + resume.getSize()
                );

                System.out.println(
                        "TYPE: " + resume.getContentType()
                );

                System.out.println(
                        "================================="
                );

            } catch (IOException e) {

                e.printStackTrace();

                throw new RuntimeException(
                        "Unable to save resume: "
                        + e.getMessage(),
                        e
                );
            }
        }

        // =====================================================
        // SAVE CANDIDATE PROFILE
        // =====================================================

        candidateProfileRepository.save(
                profile
        );

        // =====================================================
        // RETURN USER
        // =====================================================

        return savedUser;
    }
}