# Finance Management System

A full-stack web application for managing customer finance/loan records — tracking amounts, interest, weekly payments, and outstanding balances.

## Overview

The Finance Management System is designed to help finance agents or small lending businesses manage their customer loan records digitally. Instead of maintaining manual registers, this system provides a clean web interface to:

- **Register customers** with their loan details such as amount given, interest rate, and repayment schedule
- **Track weekly repayments** by updating paid weeks and automatically reflecting paid/unpaid amounts
- **Monitor outstanding balances** — the system keeps a real-time view of how much each customer has paid and how much is still due
- **Manage records** with full CRUD support — create, view, update, and delete customer entries

The backend exposes a RESTful API built with Spring Boot and persists all data in a MySQL database. The frontend is a React single-page application that communicates with the API via Axios, providing a responsive and intuitive UI for day-to-day finance operations.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 19, React Router, Axios, Vite |
| Backend | Spring Boot 4, Spring Data JPA, Lombok |
| Database | MySQL |

## Project Structure

```
Finance Project/
├── Finance_Management/     # Spring Boot backend
└── finance-frontend/       # React frontend
```

## Customer Data Model

Each customer record tracks:
- Personal info: `name`, `phone`, `address`
- Finance: `amountGiven`, `interestAmount`, `totalAmount`
- Repayment: `weeklyAmount`, `totalWeeks`, `paidWeeks`, `unpaidWeeks`, `paidAmount`, `unpaidAmount`

## API Endpoints

Base URL: `http://localhost:8080/customers`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Health check |
| POST | `/createCustomer` | Create a new customer |
| GET | `/getCustomer` | Get all customers |
| GET | `/getCustomerById/{id}` | Get customer by ID |
| PUT | `/updateCustomer/{id}` | Update customer details |
| PUT | `/updatePaidWeeks/{id}/{paidWeeks}` | Update paid weeks |
| DELETE | `/deleteCustomer/{id}` | Delete a customer |

## Frontend Pages

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Landing/dashboard page |
| `/create` | Create | Add a new customer |
| `/GetAllCustomer` | GetAllCustomer | View all customers |
| `/update/:id` | Update | Edit customer details |
| `/delete` | Deletion | Delete a customer |

## Getting Started

### Prerequisites
- Java 21
- Node.js
- MySQL

### Backend Setup

1. Create the database:
   ```sql
   CREATE DATABASE finance_db;
   ```

2. Update `Finance_Management/src/main/resources/application.properties` with your MySQL credentials:
   ```properties
   spring.datasource.username=<your_username>
   spring.datasource.password=<your_password>
   ```

3. Run the backend:
   ```bash
   cd Finance_Management
   ./mvnw spring-boot:run
   ```
   Backend runs on `http://localhost:8080`

### Frontend Setup

```bash
cd finance-frontend
npm install
npm run dev
```
Frontend runs on `http://localhost:5173`
