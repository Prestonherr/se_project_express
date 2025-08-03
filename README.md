# WTWR (What to Wear?) – Backend

This is the backend server for the **WTWR (What to Wear?)** application — a weather-based clothing recommendation app. It provides a RESTful API for managing users and clothing items, including functionality for user authorization, liking items, and retrieving clothing recommendations based on weather conditions.

---

## Project Overview

The backend was built to support the frontend WTWR application by providing:

- **User management** – Create and fetch user profiles.
- **Clothing item management** – Add, delete, and like/dislike clothing items.
- **API routing and error handling** – Clean, organized routes with proper validation and error responses.
- **Database integration** – Persistent data storage using MongoDB.

This project focuses on core backend development concepts like building APIs, connecting to databases, handling validation, and implementing error handling.

---

## Features

- **CRUD operations** for clothing items:
  - Create new clothing items.
  - Get all items or delete specific items.
- **User API**:
  - Create users.
  - Fetch all users or fetch by ID.
- **Likes system**:
  - Like and dislike clothing items.
- **Validation & Error Handling**:
  - Schema validation with Mongoose.
  - Proper status codes for invalid input, missing resources, and server errors.
- **Fallback data handling**:
  - Default user for test environment when `req.user` is undefined.

---

## Technologies Used

### Backend

- [Node.js](https://nodejs.org/) – JavaScript runtime environment.
- [Express.js](https://expressjs.com/) – Web framework for building the API.

### Database

- [MongoDB](https://www.mongodb.com/) – NoSQL database for storing user and item data.
- [Mongoose](https://mongoosejs.com/) – ODM for modeling and managing data.

### Development Tools

- [Nodemon](https://nodemon.io/) – Auto-restarts server on file changes.
- [Postman](https://www.postman.com/) – Used for API testing.
- Git & GitHub – Version control and project repository.

---

## API Endpoints

### Users

- `GET /users` – Retrieve all users.
- `GET /users/:userId` – Retrieve user by ID.
- `POST /users` – Create a new user.

### Clothing Items

- `GET /items` – Retrieve all clothing items.
- `POST /items` – Add a new clothing item.
- `DELETE /items/:itemId` – Delete an item by ID.

### Likes

- `PUT /items/:itemId/likes` – Like an item.
- `DELETE /items/:itemId/likes` – Dislike (remove like) from an item.

## Running the Project

`npm run start` — to launch the server

`npm run dev` — to launch the server with the hot reload feature

### Testing

Before committing your code, make sure you edit the file `sprint.txt` in the root folder. The file `sprint.txt` should contain the number of the sprint you're currently working on. For ex. 12
