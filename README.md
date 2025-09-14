# MERN-Auth 🚀

A robust and secure **MERN stack authentication system** built with MongoDB, Express.js, React, and Node.js. This project provides user registration, login, logout, email verification, and password reset functionalities with a focus on security and modern web development practices.

<p align="center">
  <img src="https://img.shields.io/badge/MERN%20Stack-20232A.svg?style=for-the-badge&logo=javascript" alt="MERN Stack" />
  <img src="https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge" alt="License" />
</p>

---

## ✨ Features

- **User Authentication**: Register, login, and logout with secure JWT-based sessions.
- **Email Verification**: OTP-based email verification to ensure account security.
- **Password Reset**: Secure password reset via OTP sent to the user's email.
- **Protected Routes**: Access user profile data only after authentication.
- **Security First**:
  - Passwords hashed using `bcryptjs`.
  - JWT stored in HttpOnly cookies.
  - CORS configured with `credentials: true`.
  - OTP expiration for enhanced security.
  - Prevents login before email verification.

---

## ⚡ Getting Started

Follow these steps to set up the **MERN-Auth** project locally:

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/mern-auth.git
cd mern-auth
```

### 2️⃣ Backend Setup

Navigate to the backend folder:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file in the `backend` folder with the following content:

```env
PORT=4000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
SENDER_EMAIL=your_email@example.com
SENDER_PASSWORD=your_email_password_or_app_password
NODE_ENV=development
```

Start the backend server:

```bash
npm run dev
```

The server will run on `http://localhost:4000`.

### 3️⃣ Frontend Setup

Navigate to the frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file in the `frontend` folder with the following content:

```env
VITE_BACKEND_URL=http://localhost:4000
```

Start the frontend development server:

```bash
npm run dev
```

The app will run on `http://localhost:5173`.

---

## 📂 Project Structure

The project follows a modular structure for both backend and frontend:

```
mern-auth/
├── backend/
│   ├── config/
│   │   ├── mongodb.js          # MongoDB connection setup
│   │   └── nodeMailer.js       # Nodemailer configuration
│   ├── controllers/
│   │   └── authController.js   # Authentication logic
│   ├── middleware/
│   │   └── userAuth.js        # Authentication middleware
│   ├── models/
│   │   └── userModel.js       # Mongoose user schema
│   ├── routes/
│   │   ├── authRoutes.js      # Authentication routes
│   │   └── userRoutes.js      # User-related routes
│   └── server.js              # Express server entry point
├── frontend/
│   ├── src/
│   │   ├── components/        # Reusable React components
│   │   ├── pages/             # React page components
│   │   ├── context/           # React context for state management
│   │   └── App.jsx            # Main React app component
│   └── index.css              # Global CSS styles
└── README.md                  # Project documentation
```

---

## 🧪 API Endpoints

### Auth Endpoints

| Method | Endpoint                    | Description                     |
| ------ | --------------------------- | ------------------------------- |
| POST   | `/api/auth/register`        | Register a new user             |
| POST   | `/api/auth/login`           | Login an existing user          |
| POST   | `/api/auth/logout`          | Logout the current user         |
| POST   | `/api/auth/send-verify-otp` | Send OTP for email verification |
| POST   | `/api/auth/verify-email`    | Verify user email with OTP      |
| POST   | `/api/auth/send-reset-otp`  | Send OTP for password reset     |
| POST   | `/api/auth/reset-password`  | Reset password using OTP        |

### User Endpoints

| Method | Endpoint         | Description                       |
| ------ | ---------------- | --------------------------------- |
| GET    | `/api/user/data` | Get user profile data (protected) |

---

## 🔒 Security Features

- **Password Hashing**: Passwords are securely hashed using `bcryptjs`.
- **JWT Authentication**: Tokens are stored in HttpOnly cookies to prevent XSS attacks.
- **CORS Security**: Configured with `credentials: true` for secure cross-origin requests.
- **OTP Expiry**: OTPs for email verification and password reset expire after a set time.
- **Pre-Verification Check**: Users must verify their email before logging in.

---

## 🤝 Contributing

We welcome contributions to make **MERN-Auth** even better! To contribute:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m "Add your feature"`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Submit a pull request.

Please ensure your code follows the project's coding standards and includes appropriate tests.

---

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## 🌟 Acknowledgments

- Built with ❤️ using the MERN stack.
- Thanks to the open-source community for tools like `bcryptjs`, `jsonwebtoken`, and `nodemailer`.
