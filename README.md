# Contract Management Platform – Backend

A backend system for managing contracts using dynamic blueprints and enforced contract lifecycles. This project was developed as part of a technical assessment to demonstrate backend architecture, database modeling, REST API design, and business rule enforcement.

## 📌 Project Overview

The **Contract Management Platform** allows users to:

* Create **Blueprints** that define the structure of a contract
* Generate **Contracts** dynamically from those blueprints
* Manage contracts through a defined lifecycle:

  * `DRAFT → SENT → SIGNED`
* Enforce business rules (e.g., signed contracts cannot be edited)

The system is built with a clean, modular backend architecture and uses MongoDB Atlas for persistent storage.

---

# Tech Stack

* **Node.js**
* **Express.js**
* **MongoDB Atlas**
* **Mongoose**
* **Nodemon**
* **Thunder Client** (API testing)

---

# Folder Structure

```
backend/
 ├─ src/
 │   ├─ controllers/
 │   │   ├─ blueprintController.js
 │   │   └─ contractController.js
 │   ├─ models/
 │   │   ├─ Blueprint.js
 │   │   └─ Contract.js
 │   ├─ routes/
 │   │   ├─ blueprintRoutes.js
 │   │   └─ contractRoutes.js
 │   ├─ app.js
 │   └─ server.js
 ├─ .gitignore
 ├─ package.json
 └─ README.md
```

---

# Data Models

### Blueprint

Represents a contract template.

**Fields:**

* `name` – Blueprint name
* `fields` – Array of field definitions

  * `label`
  * `type` (text, date, etc.)
  * `position` (x, y)

---

### Contract

Represents an actual contract created from a blueprint.

**Fields:**

* `blueprint` – Reference to Blueprint
* `fields` – User-filled values
* `status` – `DRAFT | SENT | SIGNED`
* `createdAt`, `updatedAt`

---

# Contract Lifecycle Rules

* Contracts are created in **DRAFT**
* Status can move forward only:

  * `DRAFT → SENT → SIGNED`
* Once **SIGNED**, contracts cannot be edited
* Lifecycle enforcement is handled in the backend

---

# API Endpoints

### Blueprint APIs

#### Create Blueprint

```
POST /api/blueprints
```

**Request Body**

```json
{
  "name": "Employment Contract",
  "fields": [
    {
      "label": "Employee Name",
      "type": "text",
      "position": { "x": 1, "y": 1 }
    },
    {
      "label": "Start Date",
      "type": "date",
      "position": { "x": 1, "y": 2 }
    }
  ]
}
```

---

#### Get All Blueprints

```
GET /api/blueprints
```

---

### Contract APIs

#### Create Contract

```
POST /api/contracts
```

**Request Body**

```json
{
  "blueprintId": "<BLUEPRINT_ID>",
  "fields": [
    { "label": "Employee Name", "value": "John Doe" },
    { "label": "Start Date", "value": "2026-02-01" }
  ]
}
```

---

#### Get All Contracts

```
GET /api/contracts
```

Returns all contracts with populated blueprint data.

---

#### Update Contract Status

```
PATCH /api/contracts/:id/status
```

**Request Body**

```json
{ "status": "SENT" }
```

or

```json
{ "status": "SIGNED" }
```

---

# Setup Instructions

### 1️⃣ Clone Repository

```bash
git clone https://github.com/Krushnakant-Sonawane/contract-management-platform.git
cd contract-management-platform/backend
```

---

### 2️⃣ Install Dependencies

```bash
npm install
```

---

### 3️⃣ Configure Environment Variables

Create a `.env` file inside `backend/`:

```
MONGO_URI=<your_mongodb_atlas_connection_string>
PORT=5000
```

⚠️ `.env` is ignored by Git for security.

---

### 4️⃣ Start Server

```bash
npm run dev
```

Expected output:

```
MongoDB connected
Server running on port 5000
```

---

# Testing Instructions (Thunder Client)

1. Start the server (`npm run dev`)
2. Open **Thunder Client** in VS Code
3. Test APIs in this order:

   * POST `/api/blueprints`
   * POST `/api/contracts`
   * GET `/api/contracts`
   * PATCH `/api/contracts/:id/status`
4. Capture screenshots for submission

<img width="1312" height="644" alt="POST contracts" src="https://github.com/user-attachments/assets/c98aced0-2f75-470e-b3ba-335509306d33" />
<img width="1313" height="782" alt="POST blueprints" src="https://github.com/user-attachments/assets/61e14c8d-531f-42e3-be50-4b915dc1cc7b" />
<img width="572" height="1008" alt="GET" src="https://github.com/user-attachments/assets/aea5e308-9f07-469d-9398-38538fbe1845" />
<img width="1312" height="624" alt="PATCH" src="https://github.com/user-attachments/assets/2d4107ed-f50d-45f2-a069-d5868930b244" />
