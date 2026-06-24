#  Quantara - Stock Buy & Sell

Quantara is a **full-stack web application** for stock portfolio management and analysis.  
It allows users to view their holdings, positions, orders, and watchlists through an interactive dashboard.  

> Note: This project does **not** provide real-time stock data visualization. All data is static or simulated.

---

##  Features

- User authentication and management
- View stock holdings, positions, and orders
- Track a watchlist of favorite stocks
- Interactive dashboard for portfolio overview
- Landing page with Home, Products, Pricing, Login, and Signup sections

---

## 🗂 Project Structure

### Backend
```
backend/
├── controllers/ # Logic for handling requests (AuthController.js)
├── middlewares/ # Middleware functions (AuthMiddleware.js)
├── models/ # Database models
├── routes/ # API routes (AuthRoute.js, DashboardRoute.js)
├── schemas/ # Data validation schemas (UserSchema.js, OrderSchema.js, etc.)
├── utils/ # Utility functions
├── index.js # Entry point
├── package.json # Dependencies
└── .env # Environment variables
```


### Dashboard (Frontend)
```
dashboard/
├── public/ # Public assets
├── src/
│ ├── assets/ # Static assets (images, icons)
│ ├── components/ # React components
│ │ ├── Dashboard.jsx
│ │ ├── Holdings.jsx
│ │ ├── Orders.jsx
│ │ ├── Positions.jsx
│ │ ├── WatchList.jsx
│ │ └── ... # Other UI components
│ ├── data/ # Sample or mock data
│ ├── routes/ # Routing logic
│ ├── App.jsx # Main app entry
│ └── App.css # Styles
└── package.json
```

### Landing Page / Main Frontend
```
frontend/landing_page/
├── about/ # About page components (HeroSection, Team)
├── home/ # Home page (HeroSection, Content, Education)
├── login/ # Login page
├── pricing/ # Pricing page (Brokerage, HeroSection)
├── products/ # Product pages (HeroSection, LeftSection, RightSection)
├── signup/ # Signup page
├── support/ # Support page components
└── index.js # Entry point for landing page
```


---

## 🛠 Prerequisites

- Node.js v14+  
- npm or yarn  
- MongoDB or any database configured in `.env`  

---

## 💾 Installation

### Clone the repository

```
git clone https://github.com/harshit-20-04/Quantara-stock-buy-sell.git
cd Quantara-stock-buy-sell
```
Backend Setup
```
cd backend
npm install
```
Create a .env file and set environment variables (DB URI, JWT secret):
.env
```
PORT=5000
DB_URI=mongodb://localhost:27017/quantara
JWT_SECRET=your_jwt_secret
```
Start the backend server:
```
npm start
```
Dashboard Setup
```
cd dashboard
npm install
npm run dev
```

Landing Page Setup
```
cd frontend/landing_page
npm install
npm start
```
Open http://localhost:5173 (or your configured port) to view the landing page.

## Author
### **Harshit Sharma**  
---
#### 👋 Full Stack Developer passionate about creating scalable and user-friendly web applications.  
#### 💼 Skilled in MERN Stack, REST APIs, and modern front-end development.  
#### 📫 Reach me at: [05harshit.sharma2004@gmail.com](mailto:05harshit.sharma2004@gmail.com)    
#### 🔗 GitHub: [harshit-20-04](https://github.com/harshit-20-04)  
#### 💼 LinkedIn: [Harshit Sharma](https://www.linkedin.com/in/harshit-sharma-ac8896)
---
