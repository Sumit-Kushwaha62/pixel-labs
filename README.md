# Pixel Labs Agency Website

The repository contains two independent Node.js projects:

- `frontend`: React and Vite website
- `backend`: Express API

## Prerequisites

- Node.js 18 or newer
- npm

## Run the frontend

```bash
cd frontend
npm install
npm run dev
```

The frontend runs at `http://localhost:5173` by default.

To create a production build:

```bash
cd frontend
npm run build
```

## Run the backend

Create the local environment file:

```bash
cd backend
copy .env.example .env
```

On macOS or Linux, use `cp .env.example .env` instead.

Install dependencies and start the development server:

```bash
cd backend
npm install
npm run dev
```

The backend runs at `http://localhost:5000` by default.

Health check:

```text
GET http://localhost:5000/api/health
```

Google Sheets form endpoints:

```text
POST /api/forms/contact
POST /api/forms/career
POST /api/forms/newsletter
```

Set `GOOGLE_SHEET_ID` and `GOOGLE_APPLICATION_CREDENTIALS` in `backend/.env`.
Share the spreadsheet with the service account email as an editor. Career
requests accept an optional PDF in the `resume` multipart field (maximum 5 MB)
or an existing URL in `resumeLink`.

Production-style start command:

```bash
cd backend
npm start
```
