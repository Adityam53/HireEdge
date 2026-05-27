# HireEdge – Job Management Platform

A fullstack job management application that allows recruiters to create, manage, search, view, and delete job postings. The platform provides a clean interface for handling job listings and integrates with a MongoDB database for persistent storage.

Developed using React JS, React Router, HTML, CSS, JavaScript, Node.js, Express.js, MongoDB, and Mongoose.

---

## Demo Link

[Live Demo](https://hire-edge-portal.vercel.app/)

---

## Quick Start

```bash
https://github.com/Adityam53/HireEdge.git
cd HireEdge
cd FrontEnd
npm install
npm run dev

```

---

## Technologies

### Frontend

* HTML5
* CSS3
* JavaScript (ES6+)
* React JS
* React Router
* Axios

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* CORS
* dotenv

---
## Demo Video

Watch a walkthrough (detailed) of all major features of this app:[Loom Video](https://drive.google.com/file/d/19R53XruJe-c5HNdZE-SSZ9Cp9fhJr_kj/view?usp=drive_link)

---
## Features

---

### Job Listings

* Fetch and display all available jobs
* Dynamic data loading from MongoDB
* Responsive card-based job display
* Loading and error handling

---

### Create Job

* Add new job postings
* Store jobs in MongoDB
* Form validation and API integration
* Instant database updates

---

### Search Jobs

* Search jobs by title
* Case-insensitive search functionality
* Real-time filtering of job listings
* Improved user experience for recruiters

---

### Job Details

* View complete details of a job posting
* Includes:

  * Job Title
  * Company Name
  * Location
  * Employment Type
  * Salary Information
  * Job Description
  * Requirements
  * Responsibilities

---

### Delete Job

* Remove job postings from the platform
* Updates database instantly
* Returns deleted job information

---

### Backend API Integration

* RESTful API architecture
* MongoDB database connectivity
* Centralized CRUD operations
* Structured JSON responses

---

### Responsive UI

* Mobile-friendly layouts
* Tablet and desktop optimized views
* Clean and modern design

---

## API Reference

### Job Endpoints

#### GET `/jobs`

Fetch all jobs from the database.

**Optional Query Parameters**

| Parameter | Description |
|------------|------------|
| title | Search jobs by title |

**Example**

```http
GET /jobs?title=frontend
```

**Response**

```json
[
  {
    "_id": "685d123abc456",
    "title": "Frontend Developer",
    "companyName": "Tech Solutions",
    "location": "Pune",
    "salary": "8 LPA",
    "jobType": "Full Time"
  }
]
```

---

#### GET `/jobs/:id`

Fetch a single job by ID.

**Response**

```json
{
  "_id": "685d123abc456",
  "title": "Frontend Developer",
  "companyName": "Tech Solutions",
  "location": "Pune",
  "salary": "8 LPA",
  "jobType": "Full Time"
}
```

---

#### POST `/jobs`

Create a new job posting.

**Sample Request**

```json
{
  "title": "Frontend Developer",
  "companyName": "Tech Solutions",
  "location": "Pune",
  "salary": "8 LPA",
  "jobType": "Full Time"
}
```

**Response**

```json
{
  "message": "New Job created successfully!",
  "savedJob": {
    "_id": "685d123abc456",
    "title": "Frontend Developer",
    "companyName": "Tech Solutions",
    "location": "Pune",
    "salary": "8 LPA",
    "jobType": "Full Time"
  }
}
```

---

#### DELETE `/jobs/:id`

Delete a job posting by ID.

**Response**

```json
{
  "message": "Job Deleted successfully!",
  "deletedJob": {
    "_id": "685d123abc456",
    "title": "Frontend Developer"
  }
}
```

---

## Features Breakdown

### Recruiter Dashboard

* View all job postings
* Create new jobs
* Delete existing jobs
* Manage recruitment listings efficiently

---

### Search & Discovery

* Fast title-based search
* Dynamic filtering
* Better candidate and recruiter experience

---

## Error Responses

### Job Not Found

```json
{
  "error": "Job not found"
}
```

---

### Create Job Error

```json
{
  "error": "Failed to create new job."
}
```

---

### Fetch Jobs Error

```json
{
  "error": "An error occured while fetching jobs."
}
```

---

### Delete Job Error

```json
{
  "error": "An error occured while deleteing the job."
}
```
---

## Future Enhancements

* Update/Edit Job Postings
* User Authentication & Authorization
* Recruiter Profiles
* Candidate Applications
* Saved Jobs Functionality
* Advanced Filtering
* Pagination
* Job Categories
* Application Tracking System

---

## Contact

For bugs or feature requests, please reach out to:

**Email:** adityamoorjmalani53@gmail.com
