# MERN-University-App

## Description

This is a 3-tier containerized MERN (MongoDB, Express.js, React.js, Node.js) application designed for a university. The app features separate frontend, backend, and database layers. MongoDB is containerized using a Docker image, and data persistence is managed through a Docker volume.

## Prerequisites

- Docker installed
- No need to download MongoDB separately, as the application uses the MongoDB Docker image.

### MongoDB Configuration

The MongoDB connection string is set as `mongodb://db:27017/university-data`. A Docker volume named `university-data` is used to persist the database, and it is stored in the project root directory.

## Running the Application

### Using Docker Compose

1. Navigate to the `MERN-University-app` root folder.

2. Start the application:
   ```bash
   docker compose up --build
   ```

   - This will start the following containers:
     - **Frontend**: React.js application accessible at `http://localhost:5173`
     - **Backend**: Node.js and Express.js server running on `http://localhost:4000`
     - **Database**: MongoDB instance with the data stored in the `university-data` volume.

3. To stop the application:
   ```bash
   docker compose down
   ```

   - This stops all containers without removing the `university-data` volume.

4. To remove the volume and clear all stored data:
   ```bash
   docker compose down -v
   ```

---
# Follow me and Star ⭐ the Repository
[![GitHub](https://img.shields.io/badge/GitHub-mfurqaan31-black?&logo=github)](https://github.com/mfurqaan31)