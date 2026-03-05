# Dockerized 3-Tier Web Application

## Project Overview
A fully containerized 3-tier web application built with Docker, deployed on AWS EC2, and managed with GitHub.

## Architecture
```
Frontend (Nginx) → Backend (Node.js/Express) → Database (PostgreSQL)
```

## Technologies Used
- **Frontend:** HTML, Nginx
- **Backend:** Node.js, Express.js
- **Database:** PostgreSQL
- **Containerization:** Docker, Docker Compose
- **Cloud:** AWS EC2
- **Version Control:** GitHub

## Project Structure
```
dockerized-3-tier-app/
├── frontend/
│   ├── Dockerfile
│   ├── index.html
│   └── nginx.conf
├── backend/
│   ├── Dockerfile
│   ├── app.js
│   └── package.json
├── docker-compose.yml
└── README.md
```

## Prerequisites
- Docker
- Docker Compose
- Git

## How to Run Locally
1. Clone the repository:
```bash
git clone https://github.com/Favoured-7/dockerized-3-tier-app.git
cd dockerized-3-tier-app
```

2. Run the containers:
```bash
docker-compose up --build
```

3. Access the app at:
```
http://localhost
```

## Docker Hub Images
- Backend: `docker pull favoured7/backend:v1.0`
- Frontend: `docker pull favoured7/frontend:v1.0`

## Live Deployment
The app is deployed on AWS EC2 and accessible at:
```
http://13.62.49.239
```

## API Endpoints
- `GET /api/health` — Check backend status
- `GET /api/data` — Get current database time

## Environment Variables
| Variable | Description | Default |
|---|---|---|
| DB_HOST | Database host | db |
| DB_USER | Database user | postgres |
| DB_PASSWORD | Database password | password |
| DB_NAME | Database name | mydb |

## Challenges and Solutions
- **YAML formatting errors** — Fixed by repasting code carefully
- **JSON errors in package.json** — Fixed by repasting fresh code
- **Docker Compose version conflict** — Upgraded to v2.24.0
- **Network/DNS issues** — Fixed by setting Google DNS (8.8.8.8)
- **Backend pool declaration error** — Fixed duplicate variable in app.js

## Deliverables
- ✅ Frontend Dockerfile
- ✅ Backend Dockerfile
- ✅ docker-compose.yml
- ✅ Images pushed to Docker Hub with tags
- ✅ Linux VM deployed on AWS EC2
- ✅ App exposed for external consumption
- ✅ README.md
