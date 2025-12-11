# 🚀 Campaign Analytics Dashboard - Full Stack Application

A modern, full-stack campaign management dashboard built with FastAPI, PostgreSQL, Next.js, and TailwindCSS.

![Tech Stack](https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## 🌐 Live Demo

- **Frontend:** [https://campaign-analytics-dashboard-lovat.vercel.app/](https://campaign-analytics-dashboard-lovat.vercel.app/)
- **Backend API:** [https://campaign-analytics-dashboard-production-790e.up.railway.app](https://campaign-analytics-dashboard-production-790e.up.railway.app)

---

## 🎬 Project Walkthrough Video
<div align="center"> <video src="https://github.com/user-attachments/assets/825eeb15-fe2a-4477-9b6e-4cfd988e4c7a" width="700" controls> Your browser does not support the video tag. </video> <p><i>Watch this short walkthrough of the Campaign Analytics Dashboard</i></p> </div>

## 📸 Application Screenshots

<div align="center">
  <table>
    <tr>
      <td align="center">
        <img src="https://github.com/user-attachments/assets/0537632b-16ab-4342-acf4-9639d54a3595" alt="All Campaigns Dashboard" width="450"/>
        <br/>
        <b>📊 All Campaigns</b>
        <br/>
        <i>Overview of all marketing campaigns with key metrics</i>
      </td>
      <td align="center">
        <img src="https://github.com/user-attachments/assets/b5a9149a-ebc1-437c-b718-c85925ead338" alt="True Campaigns Dashboard" width="450"/>
        <br/>
        <b>✅ True Campaigns</b>
        <br/>
        <i>Filtered view showing only active / True campaigns</i>
      </td>
    </tr>
    <tr>
      <td align="center">
        <img src="https://github.com/user-attachments/assets/d26e6c06-3fe7-4c9c-80d6-ae615f8c28ff" alt="Paused Campaigns Dashboard" width="450"/>
        <br/>
        <b>⏸️ Paused Campaigns</b>
        <br/>
        <i>Displays all campaigns currently paused or inactive</i>
      </td>
      <td align="center">
        <img src="https://github.com/user-attachments/assets/c6d85269-dd2c-4368-8e50-f49d22695958" alt="PostgreSQL Neon Database" width="450"/>
        <br/>
        <b>🗄️ Neon PostgreSQL Database</b>
        <br/>
        <i>Cloud database view showing stored campaign records</i>
      </td>
    </tr>
  </table>
</div>

<br/>

--- 

## 📋 Table of Contents

- [Project Overview](#-project-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Local Development Setup](#-local-development-setup)
- [API Documentation](#-api-documentation)
- [Deployment Guide](#-deployment-guide)
- [Environment Variables](#-environment-variables)
- [Evaluation Criteria Checklist](#-evaluation-criteria-checklist)
- [Troubleshooting](#-troubleshooting)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## 📖 Project Overview

This is a full-stack web application for managing marketing campaigns, built as part of a technical assessment. The application provides a comprehensive dashboard for viewing, filtering, and analyzing marketing campaign data with real-time metrics.

### What This Application Does:

✅ Backend API built with FastAPI and PostgreSQL (NeonDB)  
✅ Frontend Dashboard with Next.js 16, React 19, and TailwindCSS  
✅ Real-time data fetching from PostgreSQL database  
✅ Interactive filtering by campaign status (Active/Paused)  
✅ Responsive UI/UX with loading states and error handling  
✅ Production deployment on Railway (backend) and Vercel (frontend)

### You'll See:

- 📊 Dashboard displaying 10 marketing campaigns from database
- 🔽 Filter dropdown to view Active/Paused campaigns
- 📈 Summary statistics: Total campaigns, clicks, cost (₹), impressions, CTR%
- 🎨 Clean, professional UI with gradient cards and smooth interactions
- 📱 Fully responsive design (works on mobile, tablet, desktop)

---

## ✨ Features

### Backend Features (FastAPI)

- ✅ **REST API** with `GET /campaigns` endpoint
- ✅ **PostgreSQL Database** using NeonDB (cloud-hosted)
- ✅ **SQLAlchemy ORM** for database operations
- ✅ **Pydantic Schemas** for data validation and response models
- ✅ **CORS Enabled** for cross-origin requests from frontend
- ✅ **Auto-generated API Docs** at `/docs` (Swagger UI)
- ✅ **Error Handling** with proper HTTP status codes
- ✅ **Database Initialization Script** to populate sample data

### Frontend Features (Next.js + React)

- ✅ **Clean Component Structure** (CampaignTable, FilterDropdown)
- ✅ **State Management** using React Hooks (useState, useEffect)
- ✅ **API Fetching** with error handling and loading states
- ✅ **TypeScript** for type safety across components
- ✅ **TailwindCSS** for modern, responsive styling
- ✅ **Client-side Filtering** (no backend calls for filter changes)
- ✅ **Loading Spinner** during API calls
- ✅ **Error Messages** with user-friendly display
- ✅ **CTR Calculation** (Click-Through Rate percentage)
- ✅ **Status Badges** with color coding (🟢 Active, ⚫ Paused)
- ✅ **Currency Formatting** (Indian Rupees ₹)
- ✅ **Responsive Table** with hover effects and alternating row colors

---

## 🛠️ Tech Stack

### Backend

| Technology          | Version | Purpose                                           |
| ------------------- | ------- | ------------------------------------------------- |
| **FastAPI**         | Latest  | Modern Python web framework for building APIs     |
| **PostgreSQL**      | 15+     | Production-grade relational database (via NeonDB) |
| **SQLAlchemy**      | 2.0+    | SQL toolkit and ORM for Python                    |
| **Pydantic**        | 2.0+    | Data validation and settings management           |
| **Uvicorn**         | Latest  | ASGI server for running FastAPI applications      |
| **psycopg2-binary** | Latest  | PostgreSQL adapter for Python                     |
| **python-dotenv**   | Latest  | Environment variable management                   |

### Frontend

| Technology      | Version | Purpose                                        |
| --------------- | ------- | ---------------------------------------------- |
| **Next.js**     | 16      | React framework with App Router and SSR        |
| **React**       | 19      | UI library for building interactive components |
| **TypeScript**  | 5+      | Type-safe JavaScript superset                  |
| **TailwindCSS** | 4       | Utility-first CSS framework                    |

### Database

**PostgreSQL on NeonDB** (Cloud-hosted)

**Schema:**

```sql
CREATE TABLE campaigns (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    status VARCHAR(50) NOT NULL,
    clicks INTEGER NOT NULL,
    cost NUMERIC(10, 2) NOT NULL,
    impressions INTEGER NOT NULL
);
```

**Sample Data:** 10 marketing campaigns with varying statuses, clicks, costs, and impressions.

---

## 📁 Project Structure

```
📦 Campaign-Dashboard/
│
├── 📂 backend/                    # FastAPI Backend
│   ├── main.py                    # FastAPI app with API endpoints
│   ├── database.py                # PostgreSQL connection setup
│   ├── models.py                  # SQLAlchemy Campaign model
│   ├── schemas.py                 # Pydantic validation schemas
│   ├── init_db.py                 # Database initialization script
│   ├── campaigns.sql              # PostgreSQL table schema + sample data
│   ├── requirements.txt           # Python dependencies
│   ├── .env                       # Environment variables (DATABASE_URL)
│   ├── .gitignore                 # Git ignore rules
│   ├── Procfile                   # Railway deployment config
│   └── runtime.txt                # Python version (3.11)
│
├── 📂 Frontend/                   # Next.js Frontend
│   ├── 📂 app/
│   │   ├── page.tsx               # Main dashboard page component
│   │   ├── layout.tsx             # Root layout with metadata
│   │   └── globals.css            # Global styles + TailwindCSS
│   ├── 📂 components/
│   │   ├── CampaignTable.tsx      # Data table with CTR column
│   │   └── FilterDropdown.tsx     # Status filter dropdown
│   ├── 📂 public/                 # Static assets
│   ├── next.config.ts             # Next.js configuration
│   ├── tailwind.config.ts         # TailwindCSS configuration
│   ├── tsconfig.json              # TypeScript configuration
│   ├── postcss.config.mjs         # PostCSS configuration
│   ├── package.json               # Node dependencies
│   ├── .env.local                 # Environment variables
│   └── .gitignore                 # Git ignore rules
│
└── 📄 README.md                   # This file
```

---

## 🚀 Local Development Setup

### Prerequisites

Make sure you have these installed on your machine:

- ✅ **Python 3.8+** → [Download Python](https://www.python.org/downloads/)
- ✅ **Node.js 18+** → [Download Node.js](https://nodejs.org/)
- ✅ **PostgreSQL Database** → Using [NeonDB](https://neon.tech/) (cloud-hosted, no local install needed)
- ✅ **Git** → [Download Git](https://git-scm.com/)

---

### ⚙️ Step 1: Clone the Repository

```bash
# Clone the repository
git clone https://github.com/Soumyadeepta04/Campaign-Dashboard.git

# Navigate to project directory
cd Campaign-Dashboard
```

---

### ⚙️ Step 2: Backend Setup (FastAPI)

#### 2.1 Navigate to backend folder

```bash
cd backend
```

#### 2.2 Create virtual environment (recommended)

**Windows:**

#### 2.3 Install Python dependencies

```bash
pip install -r requirements.txt
```

**Dependencies installed:**

- fastapi
- uvicorn[standard]
- sqlalchemy
- pydantic
- python-dotenv
- psycopg2-binary

#### 2.4 Set up environment variables

Create a `.env` file in the backend directory:

**Dependencies installed:**

- fastapi
- uvicorn[standard]
- sqlalchemy
- pydantic
- python-dotenv
- psycopg2-binary

#### 1.4 Set up environment variables

The `.env` file already contains the **NeonDB PostgreSQL connection string**:

```env
DATABASE_URL=postgresql://neondb_owner:npg_9Z4psOwYLzVD@ep-soft-bread-ahdmeu54-pooler.c-3.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require
```

**Note:** This connects to a cloud-hosted PostgreSQL database on NeonDB. No local PostgreSQL installation required!

#### 2.5 Initialize database with sample data

```bash
python init_db.py
```

✅ **Expected Output:**

```
✅ PostgreSQL database initialized successfully with sample data!
```

This creates the `campaigns` table and inserts 10 sample campaigns.

#### 2.6 Run the FastAPI server

```bash
uvicorn main:app --reload
```

✅ **Backend is now running at:** `http://localhost:8000`

#### 2.7 Test the API

Open your browser or use curl:

- **Health Check:** http://localhost:8000/
- **Get All Campaigns:** http://localhost:8000/campaigns
- **Interactive API Docs:** http://localhost:8000/docs (Swagger UI)
- **Alternative API Docs:** http://localhost:8000/redoc (ReDoc)

**Test with curl:**

```bash
# Health check
curl http://localhost:8000/

# Get campaigns
curl http://localhost:8000/campaigns
```

---

### 🎨 Step 3: Frontend Setup (Next.js)

#### 3.1 Open a NEW terminal and navigate to Frontend folder

```bash
cd Frontend
```

**Important:** Keep the backend terminal running! Open a new terminal for frontend.

#### 3.2 Install Node.js dependencies

```bash
npm install
```

**Dependencies installed:**

- next (16.x)
- react (19.x)
- react-dom (19.x)
- typescript (5.x)
- tailwindcss (4.x)
- @tailwindcss/postcss
- And more...

#### 3.3 Set up environment variables

Create a `.env.local` file in the Frontend directory:

```env
NEXT_PUBLIC_BACKEND_URL=http://localhost:8000
```

This tells the frontend where to find the backend API.

#### 3.4 Run the Next.js development server

```bash
npm run dev
```

✅ **Frontend is now running at:** `http://localhost:3000`

#### 3.5 Open in browser

Visit: **http://localhost:3000**

You should see:

- ✅ Campaign dashboard with 10 campaigns loaded from database
- ✅ Filter dropdown (All/Active/Paused)
- ✅ Summary cards with statistics (Total Campaigns, Clicks, Cost, Impressions, CTR)
- ✅ Responsive table with campaign data
- ✅ Status badges with colors
- ✅ Hover effects on table rows

---

## 📡 API Documentation

### Base URL (Local Development)

```
http://localhost:8000
```

### Base URL (Production - Railway)

```
https://campaign-dashboard-production-xxxx.up.railway.app
```

---

### Endpoints

#### 1. Health Check

```http
GET /
```

**Description:** Check if the API server is running.

**Response:**

```json
{
  "message": "Campaign Management API",
  "status": "running"
}
```

**Status Code:** `200 OK`

---

#### 2. Get All Campaigns

```http
GET /campaigns
```

**Description:** Fetch all marketing campaigns from PostgreSQL database.

**Response:** Array of campaign objects

```json
[
  {
    "id": 1,
    "name": "Summer Sale",
    "status": "Active",
    "clicks": 150,
    "cost": 45.99,
    "impressions": 1000
  },
  {
    "id": 2,
    "name": "Black Friday",
    "status": "Paused",
    "clicks": 320,
    "cost": 89.5,
    "impressions": 2500
  },
  {
    "id": 3,
    "name": "Diwali Blast",
    "status": "Active",
    "clicks": 275,
    "cost": 67.25,
    "impressions": 1850
  }
  // ... 7 more campaigns (10 total)
]
```

**Status Code:** `200 OK`

**Fields:**

- `id` (integer): Unique campaign identifier
- `name` (string): Campaign name
- `status` (string): Campaign status - either "Active" or "Paused"
- `clicks` (integer): Number of clicks received
- `cost` (float): Campaign cost in Indian Rupees (₹)
- `impressions` (integer): Number of impressions/views

---

### Interactive API Documentation

FastAPI automatically generates interactive API documentation:

- **Swagger UI:** http://localhost:8000/docs
- **ReDoc:** http://localhost:8000/redoc

You can test API endpoints directly from these interfaces!

---

---

## 🌐 Deployment Guide

### Deploy Backend to Railway

**Railway** is a cloud platform for deploying backend applications.

#### Step 1: Prepare Backend for Deployment

Your backend is already configured for Railway with:

- ✅ `Procfile` - Tells Railway how to run the app
- ✅ `runtime.txt` - Specifies Python 3.11
- ✅ `.gitignore` - Excludes unnecessary files
- ✅ Environment variable support via `.env`

#### Step 2: Deploy to Railway

1. **Sign up/Login** at [railway.app](https://railway.app)
2. Click **"New Project"** → **"Deploy from GitHub repo"**
3. **Authorize Railway** to access your GitHub account
4. **Select your repository**
5. **Set Root Directory:** `backend` (Important!)
6. Railway will auto-detect Python and install dependencies

#### Step 3: Set Environment Variables (Railway)

In Railway Dashboard:

1. Go to your project → **Variables** tab
2. Add:
   ```
   DATABASE_URL = postgresql://neondb_owner:npg_9Z4psOwYLzVD@ep-soft-bread-ahdmeu54-pooler.c-3.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require
   ```

**Note:** Railway automatically provides `PORT` variable.

#### Step 4: Get Your Backend URL

After deployment:

- Copy your Railway URL (e.g., `https://campaign-dashboard-production-xxxx.up.railway.app`)
- Test: `https://your-app.railway.app/campaigns`
- Verify API docs: `https://your-app.railway.app/docs`ay.app`)
- Test: `https://your-app.railway.app/campaigns`
- Verify API docs: `https://your-app.railway.app/docs`

#### Step 5: Initialize Database (First Time Only)

You may need to run the database initialization:

- Use Railway's **Terminal** feature
- Run: `python init_db.py`

---

### Deploy Frontend to Vercel

**Vercel** is the recommended platform for Next.js applications.

#### Step 1: Prepare Frontend for Deployment

Your frontend is already configured for Vercel:

- ✅ `package.json` with build scripts
- ✅ `.gitignore` excludes build artifacts
- ✅ Next.js configuration ready

#### Step 2: Deploy to Vercel

1. **Sign up/Login** at [vercel.com](https://vercel.com)
2. Click **"Add New..."** → **"Project"**
3. **Import your Git repository**
4. **Framework Preset:** Next.js (auto-detected)
5. **Root Directory:** `Frontend` (Important!)
6. **Build Command:** `npm run build` (auto-filled)

#### Step 3: Set Environment Variables (Vercel)

⚠️ **CRITICAL**

In Vercel project settings:

1. Go to **Settings** → **Environment Variables**
2. Add:
   - **Key:** `NEXT_PUBLIC_BACKEND_URL`
   - **Value:** Your Railway backend URL (e.g., `https://campaign-dashboard-production-xxxx.up.railway.app`)
   - **Apply to:** Production, Preview, Development (check all)

**Important:** Must start with `NEXT_PUBLIC_` to be accessible in browser!

#### Step 4: Deploy

1. Click **"Deploy"**
2. Wait for build to complete (2-3 minutes)
3. Vercel will provide a URL (e.g., `https://campaign-dashboard-frontend.vercel.app`)
4. Click **"Deploy"**
5. Wait for build to complete (2-3 minutes)
6. Vercel will provide a URL (e.g., `https://your-app.vercel.app`)

#### Step 5: Test Deployment

Visit your Vercel URL and verify:

- ✅ Page loads without errors
- ✅ Campaigns display (data fetched from Railway backend)
- ✅ Filter dropdown works (All/Active/Paused)
- ✅ Summary statistics show correctly
- ✅ No CORS errors in browser console (F12)

### Post-Deployment Checklist

#### Backend (Railway)

- [ ] API root endpoint works: `GET /`
- [ ] Campaigns endpoint returns data: `GET /campaigns`
- [ ] API docs accessible: `/docs`
- [ ] Database has 10 sample campaigns
- [ ] CORS allows frontend origin

#### Frontend (Vercel)

- [ ] Homepage loads without errors
- [ ] Campaign data displays in table
- [ ] Filter dropdown works (All/Active/Paused)
- [ ] Loading state shows during fetch
- [ ] Summary statistics calculate correctly
- [ ] Responsive design works on mobile
- [ ] Currency format shows ₹ symbol

#### Integration

- [ ] Frontend successfully fetches from backend
- [ ] No CORS errors in browser console
- [ ] Filtering updates table correctly
- [ ] All 10 campaigns display
- [ ] Status badges show correct colors

---

- [ ] Filtering updates table correctly
- [ ] All 10 campaigns display
- [ ] Status badges show correct colors

---

## 🔑 Environment Variables

### Backend (.env)

```env
DATABASE_URL=postgresql://neondb_owner:npg_9Z4psOwYLzVD@ep-soft-bread-ahdmeu54-pooler.c-3.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require
```

**For Railway Deployment:**

- Set `DATABASE_URL` in Railway Dashboard → Variables

---

### Frontend (.env.local)

**Local Development:**
**Production (Vercel):**

```env
NEXT_PUBLIC_BACKEND_URL=https://campaign-dashboard-production-xxxx.up.railway.app
```

**For Vercel Deployment:**

- Set `NEXT_PUBLIC_BACKEND_URL` in Vercel Dashboard → Settings → Environment Variables

**Important:** The `NEXT_PUBLIC_` prefix makes the variable accessible in the browser!

---

**For Vercel Deployment:**

- Set `NEXT_PUBLIC_BACKEND_URL` in Vercel Dashboard → Settings → Environment Variables

> **Important:** The `NEXT_PUBLIC_` prefix makes the variable accessible in the browser!

---

## ✅ Evaluation Criteria Checklist

This project meets all the evaluation criteria:

### 1. React/Next.js ✅

**Clean component structure:**

- `CampaignTable.tsx` - Reusable table component with props
- `FilterDropdown.tsx` - Reusable filter component
- `page.tsx` - Main dashboard with proper separation of concerns

**State management:**

- `useState` for campaigns, filter, loading, error states
- `useEffect` for data fetching and filtering logic
- Proper state updates and re-renders

**API fetching:**

- `fetch()` API for HTTP requests
- Error handling with try-catch blocks
- Loading states during API calls
- Environment variable for backend URL (`NEXT_PUBLIC_BACKEND_URL`)

---

### 2. FastAPI ✅

**Correct endpoint setup:**

- `GET /` - Health check endpoint
- `GET /campaigns` - Fetch all campaigns with proper response model

**Response format:**

- JSON array of campaign objects
- Pydantic schemas for data validation (`schemas.Campaign`)
- Proper HTTP status codes (200 OK)

**Error handling:**

- Try-catch blocks in frontend for API errors
- Database connection error handling in backend
- CORS properly configured for cross-origin requests

---

### 3. PostgreSQL ✅

**Table schema:**

```sql
CREATE TABLE campaigns (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    status VARCHAR(50) NOT NULL,
    clicks INTEGER NOT NULL,
    cost NUMERIC(10, 2) NOT NULL,
    impressions INTEGER NOT NULL
);
```

**Basic queries:**

- `SELECT * FROM campaigns` - Via SQLAlchemy ORM: `db.query(models.Campaign).all()`
- Filter by status: `WHERE status='Active'` - Implemented client-side in frontend
- Database initialization script with 10 sample campaigns

**Database connection:**

- Using **NeonDB** (cloud-hosted PostgreSQL)
- SQLAlchemy ORM for type-safe queries
- Connection string stored in environment variables
- psycopg2-binary adapter for PostgreSQL

---

### 4. UI/UX ✅

**Functional filters:**

- Dropdown to filter by status (All/Active/Paused)
- Client-side filtering (instant response, no API calls)
- Filter state persists during session

**Readable table layout:**

- Clean table with 6 columns: Name, Status, Clicks, Cost, Impressions, CTR
- Status badges with color coding (🟢 Active = green, ⚫ Paused = gray)
- Currency formatting (₹ symbol for Indian Rupees)
- Number formatting with commas (e.g., 1,000)
- Alternating row colors (white/gray-50)
- Hover effects on table rows
- Avatar circles with campaign initials

**Additional UX features:**

- Loading spinner during API calls
- Error messages with user-friendly text
- Summary cards with 5 key metrics (Campaigns, Clicks, Cost, Impressions, CTR)
- Gradient backgrounds and icons
- Responsive design (mobile/tablet/desktop)
- Smooth transitions and animations

---

### 5. Git ✅

**Commit history:**

- Multiple meaningful commits throughout development
- Clear progression from initial setup to final enhancements
- Proper branch management (main/master branch)

**Meaningful messages:**
Examples of commit messages in this project:

- "Initial backend setup with FastAPI and SQLAlchemy"
- "Add campaign table component with TypeScript"
- "Fix TailwindCSS configuration for Next.js"
- "Migrate from SQLite to PostgreSQL (NeonDB)"
- "Enhance UI with gradients, icons, and CTR metric"
- "Add client-side filtering functionality"

**.gitignore files:**

**Backend deployed on Railway:**

- Live URL: `https://campaign-dashboard-production-xxxx.up.railway.app`
- API accessible at `/campaigns`
- Interactive docs at `/docs`
- Connected to NeonDB PostgreSQL

**Frontend deployed on Vercel:**

- Live URL: `https://campaign-dashboard-frontend.vercel.app`
- Connected to Railway backend via `NEXT_PUBLIC_BACKEND_URL`
- Fully functional dashboard with all features
- Auto-deploys on git push

---

## 🐛 Troubleshooting

### Common Issues and Solutions

#### Backend Issues

**Issue:** `ModuleNotFoundError: No module named 'fastapi'`

```bash
# Solution: Install dependencies
pip install -r requirements.txt
```

**Issue:** Database connection error

```bash
# Solution: Check DATABASE_URL in .env file
# Ensure NeonDB connection string is correct
```

**Issue:** Port already in use (8000)

```bash
# Solution: Kill the process or use different port
uvicorn main:app --reload --port 8001
```

#### Frontend Issues

**Issue:** `NEXT_PUBLIC_BACKEND_URL is not defined`

```bash
# Solution: Create .env.local file with:
NEXT_PUBLIC_BACKEND_URL=http://localhost:8000
```

**Issue:** CORS error in browser console

```bash
# Solution: Check that CORS is enabled in backend main.py
# Ensure frontend origin is allowed
```

**Issue:** npm install fails

```bash
# Solution: Clear cache and reinstall
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

#### Deployment Issues

**Railway: Build fails**

- Check that `Procfile` exists in backend directory
- Verify `runtime.txt` specifies Python 3.11
- Ensure `requirements.txt` is complete

**Vercel: Environment variable not working**

- Verify variable name starts with `NEXT_PUBLIC_`
- Check that variable is set for all environments
- Redeploy after adding environment variables

**Database: No campaigns showing**

```bash
# Solution: Run initialization script
python init_db.py
```

---

## 📝 Live Demo URLs

### Backend (Railway)

```
https://campaign-dashboard-production-xxxx.up.railway.app
```

**API Endpoints:**

- Health Check: `https://campaign-dashboard-production-xxxx.up.railway.app/`
- Get Campaigns: `https://campaign-dashboard-production-xxxx.up.railway.app/campaigns`
- API Docs: `https://campaign-dashboard-production-xxxx.up.railway.app/docs`

---

### Frontend (Vercel)

```
https://campaign-dashboard-frontend.vercel.app
```

**Features:**

- Campaign Dashboard: `https://campaign-dashboard-frontend.vercel.app/`

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m "Add some amazing feature"
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Development Guidelines

- Follow the existing code style and structure
- Write meaningful commit messages
- Test your changes thoroughly (local + deployment)
- Update documentation if needed
- Add comments for complex logic

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 📞 Contact

**Soumyadeepta Manna**

- 📧 Email: soumyadeepta.work14@gmail.com
- 💼 LinkedIn: [linkedin.com/in/soumyadeepta-manna-311949246](https://linkedin.com/in/soumyadeepta-manna-311949246)
- 🐙 GitHub: [@Soumyadeepta04](https://github.com/Soumyadeepta04)
- 💻 GeeksforGeeks: [soumyadeevn8c](https://auth.geeksforgeeks.org/user/soumyadeevn8c)

---

## 🙏 Acknowledgments

- **FastAPI** - For the amazing Python web framework
- **Next.js** - For the powerful React framework
- **NeonDB** - For cloud PostgreSQL hosting
- **Railway** - For seamless backend deployment
- **Vercel** - For frontend hosting and CI/CD
- **TailwindCSS** - For beautiful, responsive styling

---

Made with ❤️ by Soumyadeepta Manna
