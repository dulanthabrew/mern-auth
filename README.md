⚡ Getting Started

Follow these steps to set up the project locally:

1️⃣ Clone the repository
git clone https://github.com/your-username/mern-auth.git
cd mern-auth

2️⃣ Backend Setup

Go into the backend folder:

cd backend

Install dependencies:

npm install

Create a .env file:

PORT=4000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
SENDER_EMAIL=your_email@example.com
SENDER_PASSWORD=your_email_password_or_app_password
NODE_ENV=development

Start backend server:

npm run dev

Server will run on http://localhost:4000

3️⃣ Frontend Setup

Go into frontend folder:

cd frontend

Install dependencies:

npm install

Create a .env file:

VITE_BACKEND_URL=http://localhost:4000

Start frontend:

npm run dev

App will run on http://localhost:5173

📂 Project Structure
mern-auth/
│── backend/
│ ├── config/
│ │ └── mongodb.js
│ │ └── nodeMailer.js
│ ├── controllers/
│ │ └── authController.js
│ ├── middleware/
│ │ └── userAuth.js
│ ├── models/
│ │ └── userModel.js
│ ├── routes/
│ │ └── authRoutes.js
│ │ └── userRoutes.js
│ └── server.js
│
│── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── context/
│ │ └── App.jsx
│ └── index.css
│
└── README.md

🧪 API Endpoints
Auth

POST /api/auth/register → Register user

POST /api/auth/login → Login user

POST /api/auth/logout → Logout user

POST /api/auth/send-verify-otp → Send OTP for email verification

POST /api/auth/verify-email → Verify user email

POST /api/auth/send-reset-otp → Send password reset OTP

POST /api/auth/reset-password → Reset password

User

GET /api/user/data → Get user profile data (protected route)

🔒 Security Features

Passwords hashed with bcryptjs

JWT stored in HttpOnly cookies

CORS with credentials: true

OTP expires after set time

Prevents login before email verification

🤝 Contributing

Contributions are welcome!

Fork the repo

Create a feature branch

Commit your changes

Submit a pull request
