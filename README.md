# Mentor Management System

A full-stack Mentor Management System built using **React, Spring Boot, REST APIs, and PostgreSQL**.

The application allows users to manage mentors through complete **CRUD operations** — Create, Read, Update, and Delete.

---

## 🚀 Features

- Add a new mentor
- View all mentors
- View mentor by ID
- Edit/update mentor details
- Delete mentor
- Email validation
- Unique email constraint
- PostgreSQL database integration
- REST API integration
- React frontend
- Spring Boot backend
- Axios for frontend-backend communication
- Responsive and professional user interface
- API testing using Postman

---

## 🛠️ Technologies Used

### Frontend

- React 19
- Vite
- JavaScript
- Axios
- HTML
- CSS
- ESLint

### Backend

- Java
- Spring Boot
- Spring Web
- Spring Data JPA
- Hibernate
- Maven
- Lombok
- Jakarta Validation

### Database

- PostgreSQL
- pgAdmin

### Development Tools

- IntelliJ IDEA
- Visual Studio Code
- Postman
- Git
- GitHub

---

## 🏗️ Project Architecture

```text
                    Mentor Management System
                              |
             +----------------+----------------+
             |                                 |
        React Frontend                    Spring Boot Backend
             |                                 |
           Axios                          REST Controller
             |                                 |
             +---------- HTTP/JSON ------------+
                                               |
                                           Service Layer
                                               |
                                           Repository
                                               |
                                          PostgreSQL
```

---

## 📂 Project Structure

```text
mentor-management-system
│
├── backend
│   │
│   ├── src
│   │   └── main
│   │       ├── java
│   │       │   └── com.studyecart.mentorbackend
│   │       │       │
│   │       │       ├── config
│   │       │       │   └── CorsConfig.java
│   │       │       │
│   │       │       ├── controller
│   │       │       │   └── MentorController.java
│   │       │       │
│   │       │       ├── entity
│   │       │       │   └── Mentor.java
│   │       │       │
│   │       │       ├── repository
│   │       │       │   └── MentorRepository.java
│   │       │       │
│   │       │       └── service
│   │       │           ├── MentorService.java
│   │       │           └── impl
│   │       │               └── MentorServiceImpl.java
│   │       │
│   │       └── resources
│   │           └── application.properties
│   │
│   └── pom.xml
│
├── frontend
│   │
│   ├── src
│   │   │
│   │   ├── components
│   │   │   ├── Navbar.jsx
│   │   │   ├── MentorForm.jsx
│   │   │   └── MentorList.jsx
│   │   │
│   │   ├── services
│   │   │   └── MentorService.js
│   │   │
│   │   ├── styles
│   │   │   ├── App.css
│   │   │   ├── MentorForm.css
│   │   │   ├── MentorList.css
│   │   │   └── Navbar.css
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

# 👨‍🏫 Mentor Management

The system manages mentor information including:

| Field | Description |
|---|---|
| ID | Unique mentor identifier |
| Name | Mentor's full name |
| Email | Mentor's email address |
| Technology | Technology/skill handled by mentor |
| Experience | Years of experience |
| Phone | Mentor's contact number |

---

# 🔄 CRUD Operations

## 1. Create Mentor

Users can add a new mentor using the **Add Mentor** form.

Example:

```text
Name: Rahul Kumar
Email: rahul@example.com
Technology: Java
Experience: 3
Phone: 9876543210
```

The data is sent from React to the Spring Boot REST API and stored in PostgreSQL.

---

## 2. Read Mentors

The Mentor List displays all mentors stored in the database.

API:

```http
GET /api/mentors
```

---

## 3. Update Mentor

Users can click the **Edit** button to modify an existing mentor.

API:

```http
PUT /api/mentors/{id}
```

Example:

```json
{
  "name": "Rahul Kumar",
  "email": "rahul@example.com",
  "technology": "Spring Boot",
  "experience": 4,
  "phone": "9876543210"
}
```

---

## 4. Delete Mentor

Users can remove a mentor using the **Delete** button.

API:

```http
DELETE /api/mentors/{id}
```

A confirmation message is displayed before deletion.

---

# 🔌 REST API Endpoints

Base URL:

```text
http://localhost:8080/api/mentors
```

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/mentors` | Add a new mentor |
| GET | `/api/mentors` | Get all mentors |
| GET | `/api/mentors/{id}` | Get mentor by ID |
| PUT | `/api/mentors/{id}` | Update mentor |
| DELETE | `/api/mentors/{id}` | Delete mentor |

---

# 🗄️ Database Configuration

The application uses PostgreSQL.

Database:

```text
mentor_dbb
```

Main table:

```text
mentors
```

The application uses Spring Data JPA and Hibernate to communicate with PostgreSQL.

> **Security Note:** Database passwords and other credentials should not be committed to GitHub. Use environment variables or a local configuration file for sensitive information.

---

# ⚙️ Backend Setup

## Prerequisites

Make sure the following are installed:

- Java 21
- Maven
- PostgreSQL
- IntelliJ IDEA

---

## Step 1: Clone the Repository

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
```

Move into the project:

```bash
cd mentor-management-system
```

---

## Step 2: Configure PostgreSQL

Create a PostgreSQL database:

```text
mentor_dbb
```

Update your local `application.properties` with your own PostgreSQL credentials.

Example:

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/mentor_dbb
spring.datasource.username=postgres
spring.datasource.password=YOUR_PASSWORD

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true

server.port=8080
```

**Do not upload your real database password to GitHub.**

---

## Step 3: Start the Backend

Open the `backend` folder in IntelliJ IDEA.

Run the Spring Boot application.

The backend runs on:

```text
http://localhost:8080
```

API base URL:

```text
http://localhost:8080/api/mentors
```

---

# 💻 Frontend Setup

## Prerequisites

Make sure you have:

- Node.js
- npm

---

## Step 1: Open the Frontend

Open a terminal inside:

```text
frontend
```

---

## Step 2: Install Dependencies

```bash
npm install
```

---

## Step 3: Start the React Application

```bash
npm run dev
```

Vite will display the local frontend URL.

Example:

```text
http://localhost:5175
```

---

# 🔗 Frontend and Backend Communication

The frontend communicates with the backend using Axios.

```text
React
   |
   | Axios HTTP Request
   ↓
Spring Boot REST API
   |
   ↓
Controller
   |
   ↓
Service
   |
   ↓
Repository
   |
   ↓
PostgreSQL
```

For example, when a user adds a mentor:

```text
User fills form
       ↓
React MentorForm
       ↓
Axios POST request
       ↓
Spring Boot Controller
       ↓
MentorService
       ↓
MentorRepository
       ↓
PostgreSQL
```

---

# 🧪 API Testing

The REST APIs were tested using **Postman**.

The following operations were verified:

### Add Mentor

```http
POST http://localhost:8080/api/mentors
```

### Get All Mentors

```http
GET http://localhost:8080/api/mentors
```

### Get Mentor By ID

```http
GET http://localhost:8080/api/mentors/{id}
```

### Update Mentor

```http
PUT http://localhost:8080/api/mentors/{id}
```

### Delete Mentor

```http
DELETE http://localhost:8080/api/mentors/{id}
```

All major CRUD operations were tested successfully.

---

# 🔐 Validation

The application includes basic validation for mentor information.

### Name

Name is required.

### Email

Email must have a valid email format.

### Unique Email

Mentor email addresses are unique in the database.

### Technology

Technology is required.

### Experience

Experience is stored as an integer value representing years of experience.

---

# 🌐 CORS Configuration

The Spring Boot backend is configured to allow communication from the React frontend.

This allows the frontend running on the Vite development server to communicate with the backend running on port `8080`.

---

# 🎨 User Interface

The frontend provides:

- Navigation bar
- Add Mentor form
- Mentor list
- Edit button
- Delete button
- Confirmation before deletion
- Empty mentor message
- Form validation
- Responsive table layout
- Professional styling

---

# 📋 Example Mentor Data

```json
{
  "name": "Rahul Kumar",
  "email": "rahul@example.com",
  "technology": "Java",
  "experience": 3,
  "phone": "9876543210"
}
```

---

# 🛠️ Development Workflow

The application was developed using the following workflow:

```text
Requirement
    ↓
Database Design
    ↓
Spring Boot Backend
    ↓
REST APIs
    ↓
PostgreSQL Integration
    ↓
React Frontend
    ↓
Axios Integration
    ↓
CRUD Testing
    ↓
Postman Testing
    ↓
UI Improvements
```

---

# ✅ Completed Features

- [x] Spring Boot backend
- [x] PostgreSQL database
- [x] Mentor entity
- [x] Repository layer
- [x] Service layer
- [x] REST Controller
- [x] CORS configuration
- [x] React frontend
- [x] Axios integration
- [x] Add Mentor
- [x] View Mentors
- [x] Edit Mentor
- [x] Delete Mentor
- [x] Form validation
- [x] Professional UI
- [x] Postman API testing
- [x] PostgreSQL integration

---

# 🚀 Future Enhancements

Possible future improvements include:

- Mentor search
- Technology-based filtering
- Pagination
- Sorting
- Login and authentication
- Role-based access control
- Dashboard with mentor statistics
- Profile images
- Advanced validation
- Centralized error handling
- Deployment to cloud platforms

---

# 📌 Project Status

```text
Completed
```

The Mentor Management System successfully provides complete CRUD functionality with a React frontend, Spring Boot REST backend, and PostgreSQL database.

---

# 👨‍💻 Author

**Mentor Management System**

Built as a full-stack application using:

```text
React + Spring Boot + PostgreSQL
```
