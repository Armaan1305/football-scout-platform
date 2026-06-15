# Football Scouting Platform

A backend application for football player scouting and development.

## Features

- JWT Authentication
- Player Management
- Coach Directory
- Trial Hub
- Dashboard Statistics
- AI Scout Reports

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- Gemini API

## Installation

```bash
npm install
npm start
```

## Environment Variables

Create:

.env

PORT=3000
JWT_SECRET=your_secret
GEMINI_API_KEY=your_key

## API Endpoints

### Auth

POST /auth/register

POST /auth/login

### Players

GET /players

POST /players

PUT /players/:id

DELETE /players/:id

### Coaches

GET /coaches

POST /coaches

### Trials

GET /trials

POST /trials

### Dashboard

GET /dashboard/top-scorers

GET /dashboard/top-assists

### AI

POST /ai/scout-report
