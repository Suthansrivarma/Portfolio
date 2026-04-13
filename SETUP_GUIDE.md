# Portfolio Setup and Manual Deployment (Vercel + Render)

This guide explains how to:
- receive contact form submissions in your mail ID
- deploy frontend on Vercel
- deploy backend on Render

## 1. Contact Form Email Delivery

Your backend already does this flow:
1. Save contact form data to MongoDB
2. Send an email notification to your inbox

Backend route used by frontend:
- `POST /api/contact`

Required backend environment variables:
- `MONGODB_URI`
- `FRONTEND_URL`
- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_SECURE`
- `SMTP_USER`
- `SMTP_PASS`
- `CONTACT_SENDER_EMAIL` (optional, defaults to SMTP user)
- `CONTACT_RECEIVER_EMAIL` (optional, defaults to SMTP user)

Example (Gmail SMTP):
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=yourgmail@gmail.com
SMTP_PASS=your_gmail_app_password
CONTACT_SENDER_EMAIL=yourgmail@gmail.com
CONTACT_RECEIVER_EMAIL=ssuthan866@gmail.com
```

Notes:
- For Gmail, use App Password (not your normal Gmail password).
- If email is not configured, data is still saved in MongoDB.

## 2. Local Run

### Frontend
```bash
cd frontend
# open index.html directly, or use any static server
```

### Backend
```bash
cd backend
npm install
```

Create `backend/.env` from `backend/.env.example`, fill values, then run:
```bash
npm run dev
```

Health check:
```bash
http://localhost:5000/health
```

## 3. Manual Deploy: Frontend on Vercel

1. Push project to GitHub.
2. Open Vercel -> Add New -> Project.
3. Import your repo.
4. Configure:
   - Framework Preset: `Other`
   - Root Directory: `frontend`
   - Build Command: leave empty
   - Output Directory: leave empty
5. Deploy.
6. Copy deployed frontend URL (example: `https://your-portfolio.vercel.app`).

## 4. Manual Deploy: Backend on Render

1. In Render -> New -> Web Service.
2. Connect the same GitHub repo.
3. Configure:
   - Root Directory: `backend`
   - Runtime: `Node`
   - Build Command: `npm install`
   - Start Command: `npm start`
4. Add environment variables in Render dashboard:
   - `MONGODB_URI`
   - `FRONTEND_URL` = your Vercel URL
   - `SMTP_HOST`
   - `SMTP_PORT`
   - `SMTP_SECURE`
   - `SMTP_USER`
   - `SMTP_PASS`
   - `CONTACT_SENDER_EMAIL`
   - `CONTACT_RECEIVER_EMAIL`
5. Deploy and copy backend URL (example: `https://your-backend.onrender.com`).

## 5. Connect Frontend to Backend

In `frontend/index.html`, set backend URL:

```html
<script>
  window.PORTFOLIO_API_BASE = 'https://your-backend.onrender.com';
</script>
```

Commit and push. Vercel redeploys automatically.

## 6. Verification Checklist

1. Open deployed frontend contact form.
2. Submit a test message.
3. Confirm message is saved in MongoDB.
4. Confirm email arrives at `CONTACT_RECEIVER_EMAIL`.
5. Confirm Render logs show successful POST to `/api/contact`.

## 7. Common Issues

- CORS blocked:
  - `FRONTEND_URL` in Render must exactly match Vercel URL.
- Email not sent:
  - wrong SMTP credentials or missing app password.
- Slow first API request:
  - Render free plan sleeps after inactivity.
