package com.qburst.auth.controller;

import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

import com.qburst.auth.entity.CandidateProfile;
import com.qburst.auth.entity.User;
import com.qburst.auth.repository.CandidateProfileRepository;
import com.qburst.auth.repository.UserRepository;
import com.qburst.auth.service.AuthService;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthService authService;

    private final UserRepository userRepository;

    private final CandidateProfileRepository candidateProfileRepository;

    public AuthController(
            AuthService authService,
            UserRepository userRepository,
            CandidateProfileRepository candidateProfileRepository) {

        this.authService = authService;
        this.userRepository = userRepository;
        this.candidateProfileRepository = candidateProfileRepository;
    }

    // =========================================================
    // REGISTER
    // =========================================================

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User user) {

        try {

            User savedUser = authService.register(user);

            return ResponseEntity.ok(savedUser);

        } catch (RuntimeException e) {

            return ResponseEntity
                    .badRequest()
                    .body(e.getMessage());
        }
    }

    // =========================================================
    // LOGIN
    // =========================================================

    @PostMapping("/login")
    public ResponseEntity<?> login(
            @RequestParam String email,
            @RequestParam String password) {

        try {

            User user = authService.login(email, password);

            return ResponseEntity.ok(user);

        } catch (RuntimeException e) {

            return ResponseEntity
                    .badRequest()
                    .body(e.getMessage());
        }
    }

    // =========================================================
    // GET USER BY EMAIL
    // =========================================================

    @GetMapping("/user")
    public ResponseEntity<?> getUser(
            @RequestParam String email) {

        try {

            User user = authService.getUserByEmail(email);

            return ResponseEntity.ok(user);

        } catch (RuntimeException e) {

            return ResponseEntity
                    .notFound()
                    .build();
        }
    }

    // =========================================================
    // GET CANDIDATE PROFILE
    // =========================================================

    @GetMapping("/profile/{userId}")
    public ResponseEntity<?> getCandidateProfile(
            @PathVariable Long userId) {

        try {

            CandidateProfile profile =
                    candidateProfileRepository
                            .findByUserId(userId)
                            .orElse(null);

            if (profile == null) {

                return ResponseEntity
                        .notFound()
                        .build();
            }

            return ResponseEntity.ok(profile);

        } catch (Exception e) {

            e.printStackTrace();

            return ResponseEntity
                    .internalServerError()
                    .body(e.getMessage());
        }
    }

    // =========================================================
    // UPDATE CANDIDATE PROFILE + RESUME
    // =========================================================

    @PutMapping(
            value = "/profile/{userId}",
            consumes = "multipart/form-data"
    )
    public ResponseEntity<?> updateProfile(

            @PathVariable Long userId,

            @RequestPart("profileData")
            String profileDataJson,

            @RequestPart(
                    value = "resume",
                    required = false
            )
            MultipartFile resume) {

        try {

            // -------------------------------------------------
            // Convert JSON string to Map
            // -------------------------------------------------

            ObjectMapper objectMapper =
                    new ObjectMapper();

            Map<String, String> profileData =
                    objectMapper.readValue(
                            profileDataJson,
                            new TypeReference<Map<String, String>>() {}
                    );

            // -------------------------------------------------
            // Update profile + resume
            // -------------------------------------------------

            User updatedUser =
                    authService.updateProfile(
                            userId,
                            profileData,
                            resume
                    );

            // -------------------------------------------------
            // Return successful response
            // -------------------------------------------------

            return ResponseEntity.ok(updatedUser);

        } catch (Exception e) {

            e.printStackTrace();

            return ResponseEntity
                    .status(500)
                    .body(e.getMessage());
        }
    }
}