import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./EditProfile.css";
import ApiService from "../services/ApiService";

function EditProfile() {
  const navigate = useNavigate();

  const fileInputRef = useRef(null);

  const [user, setUser] = useState(null);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    qualification: "",
    specialization: "",
    experience: "",
    skills: "",
    city: "",
    state: "",
    remarks: "",
  });

  const [resume, setResume] = useState(null);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // =========================================================
  // LOAD PROFILE
  // =========================================================

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    try {
      const savedUser = localStorage.getItem("user");

      if (!savedUser) {
        navigate("/login");
        return;
      }

      const loggedUser = JSON.parse(savedUser);

      setUser(loggedUser);

      const userId =
        loggedUser.userId ||
        loggedUser.id ||
        localStorage.getItem("userId");

      if (!userId) {
        throw new Error("User ID not found");
      }

      let candidateProfile = {};

      try {
        candidateProfile =
          await ApiService.getCandidateProfile(userId);
      } catch (profileError) {
        console.warn(
          "Candidate profile could not be loaded:",
          profileError
        );
      }

      setForm({
        firstName:
          loggedUser.firstName || "",

        lastName:
          loggedUser.lastName || "",

        email:
          loggedUser.email || "",

        mobileNumber:
          loggedUser.mobileNumber ||
          candidateProfile?.mobileNumber ||
          "",

        qualification:
          candidateProfile?.qualification || "",

        specialization:
          candidateProfile?.specialization || "",

        experience:
          candidateProfile?.experience || "",

        skills:
          candidateProfile?.skills || "",

        city:
          candidateProfile?.city || "",

        state:
          candidateProfile?.state || "",

        remarks:
          candidateProfile?.remarks || "",
      });

    } catch (err) {
      console.error(
        "Error loading profile:",
        err
      );

      setError(
        "Unable to load your profile."
      );
    } finally {
      setLoading(false);
    }
  };

  // =========================================================
  // HANDLE FORM CHANGE
  // =========================================================

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  // =========================================================
  // OPEN RESUME FILE PICKER
  // =========================================================

  const openResumePicker = () => {
    setError("");

    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // =========================================================
  // HANDLE RESUME SELECTION
  // =========================================================

  const handleResumeChange = (event) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    console.log(
      "Resume selected:",
      {
        name: file.name,
        type: file.type,
        size: file.size,
      }
    );

    // -------------------------------------------------------
    // Validate file extension
    // -------------------------------------------------------

    const allowedExtensions = [
      ".pdf",
      ".doc",
      ".docx",
    ];

    const fileName =
      file.name.toLowerCase();

    const isValidExtension =
      allowedExtensions.some(
        (extension) =>
          fileName.endsWith(extension)
      );

    if (!isValidExtension) {
      setResume(null);

      setError(
        "Please select a PDF, DOC, or DOCX resume."
      );

      event.target.value = "";

      return;
    }

    // -------------------------------------------------------
    // Validate file size
    // Maximum: 5 MB
    // -------------------------------------------------------

    const maxSize =
      5 * 1024 * 1024;

    if (file.size > maxSize) {
      setResume(null);

      setError(
        "Resume size must be less than 5 MB."
      );

      event.target.value = "";

      return;
    }

    // -------------------------------------------------------
    // File is valid
    // -------------------------------------------------------

    setError("");
    setMessage("");

    setResume(file);
  };

  // =========================================================
  // REMOVE SELECTED RESUME
  // =========================================================

  const removeResume = () => {
    setResume(null);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // =========================================================
  // FORMAT FILE SIZE
  // =========================================================

  const formatFileSize = (bytes) => {
    if (!bytes) {
      return "0 KB";
    }

    if (bytes < 1024) {
      return `${bytes} B`;
    }

    if (bytes < 1024 * 1024) {
      return `${(
        bytes / 1024
      ).toFixed(1)} KB`;
    }

    return `${(
      bytes /
      (1024 * 1024)
    ).toFixed(1)} MB`;
  };

  // =========================================================
  // SUBMIT PROFILE
  // =========================================================

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setSaving(true);
      setMessage("");
      setError("");

      const userId =
        user?.userId ||
        user?.id ||
        localStorage.getItem("userId");

      if (!userId) {
        throw new Error(
          "User ID not found"
        );
      }

      // -----------------------------------------------------
      // DEBUG INFORMATION
      // -----------------------------------------------------

      console.log(
        "================================="
      );

      console.log(
        "SUBMITTING PROFILE"
      );

      console.log(
        "USER ID:",
        userId
      );

      console.log(
        "PROFILE:",
        form
      );

      console.log(
        "RESUME:",
        resume
          ? {
              name: resume.name,
              type: resume.type,
              size: resume.size,
            }
          : "No resume selected"
      );

      console.log(
        "================================="
      );

      // -----------------------------------------------------
      // UPDATE PROFILE
      // -----------------------------------------------------

      await ApiService.updateCandidateProfile(
        userId,
        form,
        resume
      );

      // -----------------------------------------------------
      // UPDATE LOCAL STORAGE
      // -----------------------------------------------------

      const updatedUser = {
        ...user,

        userId: userId,

        firstName:
          form.firstName,

        lastName:
          form.lastName,

        email:
          form.email,

        mobileNumber:
          form.mobileNumber,
      };

      localStorage.setItem(
        "user",
        JSON.stringify(updatedUser)
      );

      localStorage.setItem(
        "userId",
        userId
      );

      setUser(updatedUser);

      // -----------------------------------------------------
      // SUCCESS
      // -----------------------------------------------------

      setMessage(
        resume
          ? "Profile and resume updated successfully."
          : "Profile updated successfully."
      );

      // Clear selected file after successful upload
      setResume(null);

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }

      // -----------------------------------------------------
      // Navigate back to profile
      // -----------------------------------------------------

      setTimeout(() => {
        navigate("/profile");
      }, 1200);

    } catch (err) {
      console.error(
        "Profile update error:",
        err
      );

      console.error(
        "Response:",
        err.response?.data
      );

      console.error(
        "Status:",
        err.response?.status
      );

      setError(
        err.response?.data?.message ||
        err.response?.data ||
        err.message ||
        "Unable to update profile. Please try again."
      );

    } finally {
      setSaving(false);
    }
  };

  // =========================================================
  // LOADING SCREEN
  // =========================================================

  if (loading) {
    return (
      <div className="edit-profile-loading">

        <div className="edit-profile-loader"></div>

        <p>
          Loading your profile...
        </p>

      </div>
    );
  }

  // =========================================================
  // PAGE
  // =========================================================

  return (
    <div className="edit-profile-page">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="edit-profile-hero">

        <div className="edit-profile-container">

          <Link
            to="/profile"
            className="edit-profile-back"
          >
            ← Back to Profile
          </Link>

          <p>
            CANDIDATE PROFILE
          </p>

          <h1>
            Edit Profile
          </h1>

          <span>
            Keep your professional information
            up to date.
          </span>

        </div>

      </section>

      {/* =====================================================
          FORM
      ====================================================== */}

      <section className="edit-profile-content">

        <div className="edit-profile-container">

          <form
            className="edit-profile-form"
            onSubmit={handleSubmit}
          >

            {/* =================================================
                PERSONAL INFORMATION
            ================================================== */}

            <div className="edit-profile-card">

              <div className="edit-profile-heading">

                <p>
                  PERSONAL INFORMATION
                </p>

                <h2>
                  Basic Details
                </h2>

              </div>

              <div className="edit-profile-grid">

                {/* FIRST NAME */}

                <div className="form-group">

                  <label>
                    First Name
                  </label>

                  <input
                    type="text"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    required
                  />

                </div>

                {/* LAST NAME */}

                <div className="form-group">

                  <label>
                    Last Name
                  </label>

                  <input
                    type="text"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    required
                  />

                </div>

                {/* EMAIL */}

                <div className="form-group">

                  <label>
                    Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />

                </div>

                {/* MOBILE */}

                <div className="form-group">

                  <label>
                    Mobile Number
                  </label>

                  <input
                    type="text"
                    name="mobileNumber"
                    value={form.mobileNumber}
                    onChange={handleChange}
                  />

                </div>

              </div>

            </div>

            {/* =================================================
                PROFESSIONAL INFORMATION
            ================================================== */}

            <div className="edit-profile-card">

              <div className="edit-profile-heading">

                <p>
                  PROFESSIONAL INFORMATION
                </p>

                <h2>
                  Career Details
                </h2>

              </div>

              <div className="edit-profile-grid">

                {/* QUALIFICATION */}

                <div className="form-group">

                  <label>
                    Qualification
                  </label>

                  <input
                    type="text"
                    name="qualification"
                    value={form.qualification}
                    onChange={handleChange}
                    placeholder="Example: B.Tech"
                  />

                </div>

                {/* SPECIALIZATION */}

                <div className="form-group">

                  <label>
                    Specialization
                  </label>

                  <input
                    type="text"
                    name="specialization"
                    value={form.specialization}
                    onChange={handleChange}
                    placeholder="Example: Computer Science"
                  />

                </div>

                {/* EXPERIENCE */}

                <div className="form-group">

                  <label>
                    Experience
                  </label>

                  <input
                    type="text"
                    name="experience"
                    value={form.experience}
                    onChange={handleChange}
                    placeholder="Example: 1-3 Years"
                  />

                </div>

                {/* CITY */}

                <div className="form-group">

                  <label>
                    City
                  </label>

                  <input
                    type="text"
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    placeholder="Example: Hyderabad"
                  />

                </div>

                {/* STATE */}

                <div className="form-group">

                  <label>
                    State
                  </label>

                  <input
                    type="text"
                    name="state"
                    value={form.state}
                    onChange={handleChange}
                    placeholder="Example: Telangana"
                  />

                </div>

                {/* SKILLS */}

                <div className="form-group form-group-full">

                  <label>
                    Technical Skills
                  </label>

                  <textarea
                    name="skills"
                    value={form.skills}
                    onChange={handleChange}
                    placeholder="Java, Spring Boot, React, MySQL, REST API"
                    rows="4"
                  />

                </div>

              </div>

            </div>

            {/* =================================================
                RESUME
            ================================================== */}

            <div className="edit-profile-card">

              <div className="edit-profile-heading">

                <p>
                  CAREER DOCUMENT
                </p>

                <h2>
                  Resume
                </h2>

              </div>

              <div className="resume-upload">

                <label>
                  Upload Resume
                </label>

                {/* Hidden real file input */}

                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleResumeChange}
                  style={{
                    display: "none",
                  }}
                />

                {/* Upload button */}

                <button
                  type="button"
                  className="resume-upload-button"
                  onClick={openResumePicker}
                  disabled={saving}
                >
                  📄 Choose Resume
                </button>

                {/* Help text */}

                <p className="resume-help-text">
                  Accepted formats: PDF, DOC, DOCX
                  <br />
                  Maximum file size: 5 MB
                </p>

                {/* Selected file */}

                {resume && (
                  <div className="selected-file">

                    <div className="selected-file-info">

                      <span className="resume-file-icon">
                        📄
                      </span>

                      <div>

                        <strong>
                          {resume.name}
                        </strong>

                        <small>
                          {formatFileSize(
                            resume.size
                          )}
                        </small>

                      </div>

                    </div>

                    <button
                      type="button"
                      className="remove-resume-button"
                      onClick={removeResume}
                      disabled={saving}
                    >
                      Remove
                    </button>

                  </div>
                )}

              </div>

            </div>

            {/* =================================================
                REMARKS
            ================================================== */}

            <div className="edit-profile-card">

              <div className="edit-profile-heading">

                <p>
                  ADDITIONAL INFORMATION
                </p>

                <h2>
                  Remarks
                </h2>

              </div>

              <div className="form-group form-group-full">

                <label>
                  Remarks
                </label>

                <textarea
                  name="remarks"
                  value={form.remarks}
                  onChange={handleChange}
                  placeholder="Additional information"
                  rows="4"
                />

              </div>

            </div>

            {/* =================================================
                SUCCESS MESSAGE
            ================================================== */}

            {message && (
              <div className="profile-success">
                ✓ {message}
              </div>
            )}

            {/* =================================================
                ERROR MESSAGE
            ================================================== */}

            {error && (
              <div className="profile-form-error">
                ⚠ {error}
              </div>
            )}

            {/* =================================================
                BUTTONS
            ================================================== */}

            <div className="edit-profile-actions">

              <Link
                to="/profile"
                className="cancel-button"
              >
                Cancel
              </Link>

              <button
                type="submit"
                className="save-profile-button"
                disabled={saving}
              >
                {saving
                  ? "Saving..."
                  : "Save Profile →"}
              </button>

            </div>

          </form>

        </div>

      </section>

    </div>
  );
}

export default EditProfile;