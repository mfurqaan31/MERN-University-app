# MERN-University-App

## Description

This is a 2-tier containerized MERN (MongoDB, Express.js, React.js, Node.js) application designed for a university. The app features separate frontend and backend layers, with the backend connecting to MongoDB using a connection string. 

It includes the following pages:

- **Home Page**: A welcoming introduction to the university, guiding users to explore various sections.

- **All Courses Page**: Provides valuable insights into the core courses offered, as well as details about online courses

- **About Page**: Delves into the institution's history, mission, and values, giving visitors a deeper understanding of its identity.

- **Team Page**: This section introduces the esteemed educators who contribute to the institution's intellectual community, fostering a sense of connection and transparency.

- **Research Page**: Showcases the university's academic excellence, featuring three prominent research papers.

- **Contact Page**: Users can input their name, subject, email address, and compose a message in a text box.

- **Student Portal**: A dedicated portal for students who opt for online courses.

## Prerequisites

- Node.js installed
- Docker installed (optional for Docker setup)
- MongoDB connection string added to a `.env` file

### Add MongoDB Connection String

- For **Running without Docker** and **Running with Docker (Without Docker Compose)**, the `.env` file must be placed in the `backend` folder with the following format:

  ```
  MONGO_URL = your-mongodb-connection-string
  ```

- For **Docker Compose**, the `.env` file must be placed in the root directory of the project.

## Running the Application

There are three ways to run this application:

### 1. Running Without Docker

1. **Frontend**:
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

2. **Backend**:
   ```bash
   cd backend
   npm install
   npm start
   ```

### 2. Running with Docker (Without Docker Compose)

#### Step 1: Create a Docker Network
```bash
docker network create mern_net
```

#### Step 2: Build and Run the Client

1. Navigate to the `frontend` folder and build the Docker image:
   ```bash
   cd frontend
   docker build -t frontend:v1 -f Dockerfile .
   ```

2. Run the frontend container:
   ```bash
   docker run -it --name=client --network=mern_net -p 5173:5173 frontend:v1
   ```

3. To stop the container:
   ```bash
   docker stop client
   ```

4. To restart the container:
   ```bash
   docker start client
   ```

#### Step 3: Build and Run the Server

1. Navigate to the `backend` folder and build the Docker image:
   ```bash
   cd backend
   docker build -t backend:v1 -f Dockerfile .
   ```

2. Run the backend container:
   ```bash
   docker run -it --name=server --network=mern_net -p 4000:4000 backend:v1
   ```

3. To stop the container:
   ```bash
   docker stop server
   ```

4. To restart the container:
   ```bash
   docker start server
   ```

### 3. Running with Docker Compose

1. Navigate to the `MERN-University-app` root folder.

2. Start the application:
   ```bash
   docker compose up --build
   ```

3. To stop the application:
   ```bash
   docker compose down
   ```

# Follow me and Star ⭐ the Repository
[![GitHub](https://img.shields.io/badge/GitHub-mfurqaan31-black?&logo=github)](https://github.com/mfurqaan31)