# HamaraShops.ai — Enterprise Digital Engineering & Recruitment Platform

## 📌 Overview

**HamaraShops.ai** is a full-stack digital technology platform that combines a modern corporate technology website with an integrated recruitment and job-management application.

The platform is designed around the idea of delivering practical technology solutions through:

- **Digital Engineering**
- **AI & Automation**
- **Cloud Modernization**
- **Data & Analytics**
- **Product Engineering**
- **Digital Transformation**

Alongside the corporate website, HamaraShops.ai provides a recruitment workflow where candidates can register, log in, manage profiles, upload resumes, browse jobs, and submit applications.

The backend follows a **Spring Boot microservices architecture** with **Eureka Service Discovery** and a centralized **API Gateway**.

---

## 🎯 Project Goals

The project is built to demonstrate a professional, scalable application architecture with clear separation of frontend, business services, infrastructure, and data responsibilities.

### Key goals

- Build a modern enterprise-style React frontend
- Provide a complete careers and recruitment workflow
- Separate backend responsibilities into independent microservices
- Use service discovery for dynamic service registration
- Provide a single API entry point through the API Gateway
- Use REST APIs for frontend/backend communication
- Persist application data in MySQL
- Keep services independently maintainable and deployable
- Provide a foundation for future AI-powered recruitment capabilities

---

# 🏗️ System Architecture

                                      HAMARASHOPS.AI
                                              │
                           ┌──────────────────┴──────────────────┐
                           │                                     │
                           ▼                                     ▼
                  ┌─────────────────┐                    ┌─────────────────┐
                  │  Corporate UI   │                    │ Recruitment UI  │
                  │     React       │                    │     React       │
                  └────────┬────────┘                    └────────┬────────┘
                           │                                      │
                           └──────────────────┬───────────────────┘
                                              │
                                         Axios / REST
                                              │
                                              ▼
                                    ┌──────────────────┐
                                    │    API Gateway   │
                                    │      :8080       │
                                    └────────┬─────────┘
                                             │
                  ┌──────────────────────────┼───────────────────────────┐
                  │                          │                           │
                  ▼                          ▼                           ▼
          ┌───────────────┐         ┌───────────────┐          ┌──────────────────┐
          │ Auth Service  │         │  Job Service  │          │ Application      │
          │    :8081*     │         │     :8082     │          │ Service :8083*   │
          └───────┬───────┘         └───────┬───────┘          └────────┬─────────┘
                  │                         │                            │
                  └─────────────────────────┼────────────────────────────┘
                                            │
                                            ▼
                                    ┌─────────────────┐
                                    │ Contact Service │
                                    │     :8084*      │
                                    └────────┬────────┘
                                             │
                                             ▼
                                      ┌───────────────┐
                                      │ MySQL Database │
                                      └───────────────┘

                                    ┌──────────────────┐
                                    │   Eureka Server  │
                                    │ Service Discovery│
                                    │      :8761       │
                                    └──────────────────┘


> `*` Exact service ports should match the current `application.properties` / `application.yml` files in your repository. The API Gateway is the public application entry point and Eureka is the service registry.

---

# 🖥️ Frontend

The frontend is a responsive React application built with Vite and designed as a professional technology-services website with integrated recruitment functionality.

## Frontend Navigation
HamaraShops.ai
│
├── Home
├── About
├── Services
├── Solutions
├── Case Studies
├── Industries
├── Careers / Jobs
└── Contact Us


## Corporate Website Sections

### Home

The homepage introduces the HamaraShops.ai brand and highlights:

- Digital Engineering
- AI & Automation
- Cloud Solutions
- Data & Analytics
- Digital Transformation
- Intelligent Automation
- Cloud Modernization
- Product Engineering
- Industry capabilities
- Why HamaraShops.ai
- Featured work
- Careers call-to-action
- Contact call-to-action

### About

Describes the organization, technology approach, and business-first philosophy.

### Services

Highlights the core capabilities of HamaraShops.ai, including:

- Digital Engineering
- Cloud Solutions
- AI & Automation
- Data & Analytics

### Solutions

Presents solution areas such as:

- Digital Transformation
- Intelligent Automation
- Cloud Modernization
- Product Engineering

### Case Studies

Provides a space for showcasing project outcomes and technology-driven business transformation.

### Industries

The current website highlights:

- Retail & E-Commerce
- Healthcare
- Financial Services
- Education
- Manufacturing
- Technology

### Careers / Jobs

Connects the corporate website to the recruitment application, including job discovery and candidate workflows.

### Contact Us

Provides a contact form connected to the backend Contact Service through the API Gateway.

---

# 👤 Recruitment Frontend

The recruitment portion of the frontend provides a complete candidate journey.

Visitor
  │
  ▼
Careers / Jobs
  │
  ▼
Register / Login
  │
  ▼
Candidate Dashboard
  │
  ├── View Profile
  ├── Edit Profile
  ├── Resume Upload
  ├── Browse Jobs
  └── Track Applications

## Candidate Features

- User registration
- User login
- Candidate profile
- Profile editing
- Resume upload
- Job browsing
- Job details
- Job application submission
- Application status tracking
- Dashboard-based candidate experience

---

# 🔧 Backend Microservices

The backend is divided into six major services.

| Service | Responsibility | Typical Port |
|---|---|---:|
| **Eureka Service** | Service discovery and registration | `8761` |
| **API Gateway** | Centralized API routing | `8080` |
| **Auth Service** | Authentication and user management | `8086`* |
| **Job Service** | Job creation, retrieval and management | `8082` |
| **Application Service** | Job applications and application processing | `8084`* |
| **Contact Service** | Contact form submissions and enquiries | `8085`* |

## 1. Eureka Service

### Purpose

Provides service discovery and registration for all microservices.

### Responsibilities

- Service registration
- Service discovery
- Tracking service instances
- Supporting dynamic service lookup
- Reducing hard-coded service dependencies

Dashboard:

http://localhost:8761


---

## 2. API Gateway

### Purpose

Acts as the single backend entry point for the frontend.


React Frontend
      │
      ▼
API Gateway :8080
      │
      ├── Auth Service
      ├── Job Service
      ├── Application Service
      └── Contact Service


### Responsibilities

- Route API requests
- Centralize public backend access
- Integrate with service discovery
- Support cross-origin configuration
- Hide internal service locations from the frontend

Example frontend base URL:


http://localhost:8080/api


---

## 3. Auth Service

### Responsibilities

- User registration
- User login
- User information management
- Candidate account management
- Role information
- Authentication-related operations

Typical roles include:


ADMIN
CANDIDATE


---

## 4. Job Service

### Responsibilities

- Create jobs
- Retrieve jobs
- Retrieve job details
- Update jobs
- Delete jobs
- Manage job-related data

Typical job data can include:

Job ID
Title
Description
Location
Skills
Experience
Salary
Company
Posted Date
Status

---

## 5. Application Service

### Responsibilities

- Submit job applications
- Retrieve candidate applications
- Retrieve applications associated with jobs
- Track application state
- Manage application records

Typical application states can include:


APPLIED
SHORTLISTED
REJECTED
SELECTED


---

## 6. Contact Service

### Responsibilities

- Receive website enquiries
- Store contact messages
- Retrieve contact records
- Manage contact-related operations

Typical contact information can include:

Name
Email
Phone
Subject
Message
Created Date
Status


---

# 🔄 End-to-End Request Flow

## Login Flow


Candidate
   │
   ▼
React Login Page
   │
   ▼
Axios
   │
   ▼
API Gateway :8080
   │
   ▼
Auth Service
   │
   ▼
MySQL
   │
   ▼
Authentication Response
   │
   ▼
React Dashboard


## Job Search Flow

Candidate
   │
   ▼
Jobs Page
   │
   ▼
API Gateway
   │
   ▼
Job Service
   │
   ▼
MySQL
   │
   ▼
Job List
   │
   ▼
React UI


## Job Application Flow


Candidate
   │
   ▼
Select Job
   │
   ▼
Apply
   │
   ▼
API Gateway
   │
   ▼
Application Service
   │
   ▼
MySQL
   │
   ▼
Application Created


## Contact Flow


Visitor
   │
   ▼
Contact Form
   │
   ▼
Axios
   │
   ▼
API Gateway
   │
   ▼
Contact Service
   │
   ▼
MySQL


---

# 🗄️ Data Architecture

The platform uses MySQL for persistent data storage.

Representative entities used by the recruitment platform include:

users
candidate_profile
job
job_application
candidate_application
shortlist_snapshot
contact


A simplified relationship is:

USER
 │
 └────────────── Candidate Profile
                         │
                         ▼
                    Job Application
                         │
                         ▼
                        JOB


> Keep database/schema naming consistent with the actual database configuration in each deployed environment.

---

# 📁 Recommended Project Structure

A typical full-stack repository layout is:

job-portal/
│
├── frontend/                     # React / Vite application
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── public/
│   ├── package.json
│   └── vite.config.*
│
├── eureka-service/
│   ├── src/
│   └── pom.xml
│
├── api-gateway/
│   ├── src/
│   └── pom.xml
│
├── auth-service/
│   ├── src/
│   └── pom.xml
│
├── job-service/
│   ├── src/
│   └── pom.xml
│
├── application-service/
│   ├── src/
│   └── pom.xml
│
├── contact-service/
│   ├── src/
│   └── pom.xml
│
└── README.md


---

# 🧱 Backend Layered Architecture

Each Spring Boot microservice follows a layered pattern:

service-name/
│
├── controller/      # REST endpoints
├── service/         # Business logic
├── repository/      # Database access
├── entity/          # JPA entities
├── dto/             # Request / response objects
└── config/          # Application configuration

Typical request lifecycle:

HTTP Request
     │
     ▼
Controller
     │
     ▼
Service
     │
     ▼
Repository
     │
     ▼
MySQL
     │
     ▼
HTTP Response

---

# 🧩 API Overview

> The table below is a functional overview. Keep exact paths synchronized with the controller mappings in the repository before treating this section as a formal API contract.

| Area | Method | Example Endpoint | Purpose |
|---|---|---|---|
| Auth | `POST` | `/api/auth/login` | Authenticate user |
| Auth | `POST` | `/api/auth/register` | Register user |
| Jobs | `GET` | `/api/jobs` | Get available jobs |
| Jobs | `GET` | `/api/jobs/{id}` | Get job details |
| Jobs | `POST` | `/api/jobs` | Create job |
| Jobs | `PUT` | `/api/jobs/{id}` | Update job |
| Jobs | `DELETE` | `/api/jobs/{id}` | Delete job |
| Applications | `POST` | `/api/applications` | Submit application |
| Applications | `GET` | `/api/applications/{id}` | Get application |
| Applications | `GET` | `/api/applications/candidate/{id}` | Get candidate applications |
| Contact | `POST` | `/api/contact` | Submit enquiry |
| Contact | `GET` | `/api/contact` | Get enquiries |

---

# 💻 Frontend Installation

## Prerequisites

Make sure the following are installed:

- Node.js
- npm
- Java 21
- Maven / Maven Wrapper
- MySQL
- Git

## Clone Repository

git clone https://github.com/bhavanimadhikuntla/job-portal.git
cd job-portal


## Install Frontend Dependencies

From the frontend directory:

```bash
npm install
```

## Start Frontend

```bash
npm run dev
```

Default Vite development URL:

```text
http://localhost:5173
```

---

# ☕ Backend Installation

Each microservice is an independent Spring Boot application.

### Start Eureka

```bash
cd eureka-service
./mvnw spring-boot:run
```

Windows Git Bash / PowerShell can use the Maven wrapper available in the service directory according to the repository configuration.

### Start Auth Service

```bash
cd auth-service
./mvnw spring-boot:run
```

### Start Job Service

```bash
cd job-service
./mvnw spring-boot:run
```

### Start Application Service

```bash
cd application-service
./mvnw spring-boot:run
```

### Start Contact Service

```bash
cd contact-service
./mvnw spring-boot:run
```

### Start API Gateway

```bash
cd api-gateway
./mvnw spring-boot:run
```

---

# 🚦 Recommended Startup Order

Start services in this order:

1. MySQL
2. Eureka Service
3. Auth Service
4. Job Service
5. Application Service
6. Contact Service
7. API Gateway
8. React Frontend

The Eureka dashboard should show registered services before testing gateway routes.

---

# ⚙️ Environment Configuration

Do not commit production credentials to GitHub.

Use environment variables for secrets and deployment-specific values.

Recommended variables:

DB_URL
DB_USERNAME
DB_PASSWORD
EUREKA_URL
JWT_SECRET
VITE_API_URL


Example frontend environment file:

```env
VITE_API_URL=http://localhost:8080/api
```

For production, use the public API Gateway URL:

```env
VITE_API_URL=https://<your-gateway-domain>/api
```

Example Spring configuration pattern:

```properties
spring.datasource.url=${DB_URL}
spring.datasource.username=${DB_USERNAME}
spring.datasource.password=${DB_PASSWORD}
```

---

# 🔐 Security Considerations

Production environments should follow these practices:

- Never commit database passwords or API secrets
- Use environment variables for sensitive configuration
- Restrict CORS to trusted frontend domains
- Keep internal microservices private where the hosting platform permits it
- Apply authentication and authorization to protected endpoints
- Use HTTPS in production
- Rotate secrets when necessary

### CORS

Development may allow:

```text
http://localhost:5173
```

Production should allow only the deployed frontend origin.

---

# 🧪 Testing

Testing can be performed at multiple layers:

### Frontend

- Browser-based UI testing
- Form validation testing
- Route/navigation testing
- API integration testing
- Candidate workflow testing

### Backend

- Unit testing
- Service-layer testing
- Controller/API testing
- Database integration testing
- End-to-end API testing

Suggested verification flow:

Frontend
   ↓
API Gateway
   ↓
Microservice
   ↓
Repository
   ↓
MySQL


---

# ☁️ Deployment Architecture

The application is designed so the frontend and backend services can be deployed independently.

                           Internet
                              │
                              ▼
                    ┌──────────────────┐
                    │ React Frontend   │
                    │ Static Hosting   │
                    └────────┬─────────┘
                             │
                             ▼
                    ┌──────────────────┐
                    │   API Gateway    │
                    └────────┬─────────┘
                             │
          ┌──────────────────┼──────────────────┐
          │                  │                  │
          ▼                  ▼                  ▼
       Auth API          Jobs API        Applications API
          │                  │                  │
          └──────────────────┼──────────────────┘
                             │
                             ▼
                       Contact API
                             │
                             ▼
                        MySQL Database

                       Eureka Registry


The project can be deployed to cloud platforms that support Java/Spring Boot services and React applications.

---

# 📈 Scalability & Future Enhancements

The current architecture provides a foundation for further platform growth.

Potential future enhancements include:

- JWT-based authentication and authorization
- Role-based access control
- Swagger / OpenAPI documentation
- Centralized logging
- Spring Boot Actuator monitoring
- Distributed tracing
- Circuit breakers and resilience patterns
- Notification service
- Resume processing service
- Recruitment analytics
- Admin portal
- AI-based candidate-job matching
- AI-powered resume analysis
- AI recruitment assistant
- Event-driven communication with Kafka or another messaging platform

---

# 🤖 Future AI Vision

HamaraShops.ai can evolve beyond traditional recruitment by introducing AI capabilities such as:


Resume
  │
  ▼
AI Resume Analysis
  │
  ▼
Skills Extraction
  │
  ▼
Job Matching Engine
  │
  ▼
Candidate Recommendations
```

Potential AI capabilities include:

- Resume parsing
- Skill extraction
- Job recommendation
- Candidate-job matching
- Candidate ranking support
- Intelligent recruiter assistance
- Automated recruitment insights

---

# 🌟 Why This Architecture?

### Separation of Concerns

Each service owns a focused business responsibility.

### Maintainability

Changes in one functional area can be implemented without turning the entire backend into a monolith.

### Scalability

Individual services can be scaled according to demand.

### Service Discovery

Eureka provides centralized service registration and lookup.

### Centralized API Access

The API Gateway gives the frontend one consistent backend entry point.

### Extensibility

New capabilities can be introduced as additional services without redesigning the complete platform.

---

# 🏢 Business Capabilities

HamaraShops.ai currently presents the following technology and business capabilities:

| Capability | Focus |
|---|---|
| Digital Engineering | Modern application development |
| AI & Automation | Intelligent process improvement |
| Cloud Solutions | Cloud-native modernization |
| Data & Analytics | Data-driven decision support |
| Digital Transformation | Modernizing business operations |
| Product Engineering | Customer-focused digital products |
| Recruitment Platform | Jobs, candidates and applications |
| Contact Management | Business enquiries and communication |


---

# 🔗 Repository

**GitHub:**

https://github.com/bhavanimadhikuntla/job-portal.git

---

# 👨‍💻 Project Summary

**HamaraShops.ai** is a full-stack application combining an enterprise-style digital technology website with a recruitment platform implemented using modern frontend and microservice technologies.

React + Vite
      │
      ▼
Axios / REST
      │
      ▼
Spring Cloud Gateway
      │
      ▼
Eureka Service Discovery
      │
      ├── Auth Service
      ├── Job Service
      ├── Application Service
      └── Contact Service
      │
      ▼
MySQL


The result is a modular, scalable architecture that provides a strong foundation for future cloud, AI, automation, analytics, and recruitment features.
