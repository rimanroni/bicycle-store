# Bicycle Store
# Technologies Used 
 - ** Node.js:**
 - ** Express:**
 - ** MongoDB:**
 - ** Mongoose:**
 - ** TypeScript:**

## Description
A Node.js-based backend application that manages a bicycle store. It allows for features such   product management, and order processing.

## Features
 - **Product Management:** List and manage bicycles available for sale.
- **Order Management:** View and process customer orders.

## Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Development Tools:** TypeScript, ESLint, Prettier
- **Utility:** CORS, dotenv, Nodemon

## Setup Instructions

### Prerequisites:
- **Node.js**  
- **MongoDB**  

 ## API Endpoints

### 1. **Create Bicycle**
- **Endpoint:** `POST /api/bicycle`
- **Description:** Create a new bicycle entry.
- **Request Body:**
  ```json
  {
    "name": "Mountain Bike",
    "price": 300,
    "quantity": 10,
    "description": "High-quality mountain bike"
  }

 ### 2. **Get All Bicycles**
- ** Endpoint: GET /api/bicycle :**
- ** 0Description: Retrieves a list of all bicycles. :**

 ### 3. **Get Single Bicycle**
- **Endpoint: GET /api/bicycle/:productsId
- ** Description: Retrieves details of a single bicycle by its ID.
### 4. **Delete Bicycle**
- **Endpoint:** `DELETE /api/bicycle/:productsId`
- **Description:** Deletes a bicycle by its ID.
- **Parameters:** 
  - `productsId` (path parameter): The ID of the bicycle to delete.


### 5. Update Bicycle
- **Endpoint: PUT /api/bicycle/:productsId**
- **Description: Updates the details of a bicycle by its ID:**
- **Request Body:**
 ```json 
{
  "name": "Updated Bicycle Name",
  "price": 350,
  "quantity": 5
  } 



