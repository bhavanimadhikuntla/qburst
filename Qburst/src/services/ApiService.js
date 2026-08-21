import axios from "axios";

/*
  ============================================================
  HAMARASHOPS.AI API SERVICE
  ============================================================

  Frontend
      ↓
  API Gateway : 8080
      ↓
  Microservices

  Base URL:
  http://localhost:8080/api
*/

const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:8080/api";

console.log("=================================");
console.log("API BASE URL:", API_URL);
console.log("=================================");


// ============================================================
// AXIOS INSTANCE
// ============================================================

const api = axios.create({
  baseURL: API_URL,
  timeout: 15000,
});


// ============================================================
// RESPONSE ERROR LOGGER
// ============================================================

api.interceptors.response.use(
  (response) => response,

  (error) => {

    console.error(
      "API ERROR:",
      error.config?.method?.toUpperCase(),
      error.config?.url
    );

    if (error.response) {

      console.error(
        "STATUS:",
        error.response.status
      );

      console.error(
        "RESPONSE:",
        error.response.data
      );

    } else if (error.request) {

      console.error(
        "NO RESPONSE FROM SERVER"
      );

    } else {

      console.error(
        "REQUEST ERROR:",
        error.message
      );
    }

    return Promise.reject(error);
  }
);


// ============================================================
// AUTH
// ============================================================

const register = async (user) => {

  const response = await api.post(
    "/auth/register",
    user
  );

  return response.data;
};


const login = async (email, password) => {

  const response = await api.post(
    "/auth/login",
    null,
    {
      params: {
        email,
        password,
      },
    }
  );

  console.log(
    "LOGIN RESPONSE:",
    response.data
  );

  return response.data;
};


const getUserByEmail = async (email) => {

  const response = await api.get(
    "/auth/user",
    {
      params: {
        email,
      },
    }
  );

  return response.data;
};


// ============================================================
// JOBS
// ============================================================

const getJobs = async () => {

  console.log(
    "GET JOBS:",
    `${API_URL}/jobs`
  );

  const response = await api.get(
    "/jobs"
  );

  console.log(
    "JOBS RESPONSE:",
    response.data
  );

  return Array.isArray(response.data)
    ? response.data
    : [];
};


const getJobById = async (id) => {

  if (!id) {
    throw new Error(
      "Job ID is required"
    );
  }

  console.log(
    "GET JOB:",
    `${API_URL}/jobs/${id}`
  );

  const response = await api.get(
    `/jobs/${id}`
  );

  console.log(
    "JOB RESPONSE:",
    response.data
  );

  return response.data;
};


// ============================================================
// APPLICATIONS
// ============================================================


// ------------------------------------------------------------
// APPLY FOR JOB
// ------------------------------------------------------------

const applyForJob = async (
  jobId,
  formData
) => {

  if (!jobId) {
    throw new Error(
      "Job ID is required"
    );
  }

  const data = new FormData();

  data.append(
    "firstName",
    formData.firstName || ""
  );

  data.append(
    "lastName",
    formData.lastName || ""
  );

  data.append(
    "email",
    formData.email || ""
  );

  data.append(
    "mobile",
    formData.mobile || ""
  );

  data.append(
    "qualification",
    formData.qualification || ""
  );

  data.append(
    "experience",
    formData.experience || ""
  );

  data.append(
    "skills",
    formData.skills || ""
  );


  if (formData.city) {

    data.append(
      "city",
      formData.city
    );
  }


  if (formData.coverLetter) {

    data.append(
      "coverLetter",
      formData.coverLetter
    );
  }


  if (formData.resume) {

    data.append(
      "resume",
      formData.resume
    );
  }


  const url =
    `/applications/apply/${jobId}`;


  console.log(
    "APPLY URL:",
    `${API_URL}${url}`
  );


  const response = await api.post(
    url,
    data,
  );


  console.log(
    "APPLICATION RESPONSE:",
    response.data
  );


  return response.data;
};


// ------------------------------------------------------------
// GET ALL APPLICATIONS
// ------------------------------------------------------------

const getApplications = async () => {

  console.log(
    "GET ALL APPLICATIONS:",
    `${API_URL}/applications`
  );

  const response = await api.get(
    "/applications"
  );

  console.log(
    "ALL APPLICATIONS RESPONSE:",
    response.data
  );

  return Array.isArray(response.data)
    ? response.data
    : [];
};


// ------------------------------------------------------------
// GET APPLICATIONS BY EMAIL
// ------------------------------------------------------------

const getApplicationsByEmail = async (
  email
) => {

  if (!email) {

    throw new Error(
      "Candidate email is required"
    );
  }

  const encodedEmail =
    encodeURIComponent(email);

  const url =
    `/applications/email/${encodedEmail}`;

  console.log(
    "GET APPLICATIONS BY EMAIL:",
    `${API_URL}${url}`
  );

  const response =
    await api.get(url);

  console.log(
    "APPLICATIONS BY EMAIL RESPONSE:",
    response.data
  );

  return Array.isArray(response.data)
    ? response.data
    : [];
};


// ------------------------------------------------------------
// GET APPLICATION BY ID
// ------------------------------------------------------------

const getApplicationById = async (
  id
) => {

  if (!id) {

    throw new Error(
      "Application ID is required"
    );
  }

  const response =
    await api.get(
      `/applications/${id}`
    );

  return response.data;
};


// ------------------------------------------------------------
// GET APPLICATIONS BY JOB
// ------------------------------------------------------------

const getApplicationsByJob = async (
  jobId
) => {

  if (!jobId) {

    throw new Error(
      "Job ID is required"
    );
  }

  const response =
    await api.get(
      `/applications/job/${jobId}`
    );

  return Array.isArray(response.data)
    ? response.data
    : [];
};


// ------------------------------------------------------------
// UPDATE APPLICATION STATUS
// ------------------------------------------------------------

const updateApplicationStatus = async (
  id,
  status
) => {

  if (!id) {

    throw new Error(
      "Application ID is required"
    );
  }

  if (!status) {

    throw new Error(
      "Application status is required"
    );
  }

  console.log(
    "UPDATE APPLICATION STATUS:",
    id,
    status
  );

  const response =
    await api.put(
      `/applications/${id}/status`,
      null,
      {
        params: {
          status: status,
        },
      }
    );

  console.log(
    "STATUS UPDATED:",
    response.data
  );

  return response.data;
};


// ============================================================
// CANDIDATE PROFILE
// ============================================================


// ------------------------------------------------------------
// GET CANDIDATE PROFILE
// ------------------------------------------------------------

const getCandidateProfile = async (
  userId
) => {

  if (!userId) {

    throw new Error(
      "User ID is required"
    );
  }

  const url =
    `/auth/profile/${userId}`;

  console.log(
    "GET CANDIDATE PROFILE:",
    `${API_URL}${url}`
  );

  const response =
    await api.get(url);

  console.log(
    "CANDIDATE PROFILE RESPONSE:",
    response.data
  );

  return response.data;
};


// ------------------------------------------------------------
// UPDATE CANDIDATE PROFILE
// ------------------------------------------------------------

const updateCandidateProfile = async (
  userId,
  profileData,
  resume = null
) => {

  if (!userId) {
    throw new Error("User ID is required");
  }

  const profile = {
    firstName: profileData.firstName || "",
    lastName: profileData.lastName || "",
    email: profileData.email || "",
    mobileNumber: profileData.mobileNumber || "",

    qualification: profileData.qualification || "",
    specialization: profileData.specialization || "",
    experience: profileData.experience || "",
    skills: profileData.skills || "",
    city: profileData.city || "",
    state: profileData.state || "",
    remarks: profileData.remarks || ""
  };

  const data = new FormData();

  data.append(
    "profileData",
    JSON.stringify(profile)
  );

  if (resume) {
    data.append(
      "resume",
      resume
    );
  }

  console.log("UPDATE PROFILE URL:",
    `${API_URL}/auth/profile/${userId}`
  );

  console.log("PROFILE DATA:", profile);

  console.log(
    "RESUME:",
    resume ? resume.name : "No resume"
  );

  const response = await api.put(
    `/auth/profile/${userId}`,
    data
  );

  console.log(
    "PROFILE UPDATE RESPONSE:",
    response.data
  );

  return response.data;
};

// ============================================================
// EXPORT
// ============================================================

const ApiService = {

  // AUTH
  register,
  login,
  getUserByEmail,

  // JOBS
  getJobs,
  getJobById,

  // PROFILE
  getCandidateProfile,
  updateCandidateProfile,

  // APPLICATIONS
  applyForJob,
  getApplications,
  getApplicationsByEmail,
  getApplicationById,
  getApplicationsByJob,
  updateApplicationStatus,
};


export default ApiService;