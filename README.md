# 🌟 Node.js & Express.js Authentication API

Welcome to the **Node.js & Express.js Authentication API**! This project provides a straightforward, yet powerful, authentication system using modern technologies. Built with Node.js and Express.js, it supports user signup, login, and token-based authentication with MongoDB and JWT. Perfect for integrating secure user authentication into your applications!

## 🎯 Features

- **📝 User Signup**: Create new user accounts with ease.
- **🔑 User Login**: Secure login for existing users.
- **💾 MongoDB Integration**: Efficient data storage and management.
- **🔒 JWT Authentication**: Token-based authorization for secure access.

## 🚀 Getting Started

### Prerequisites

Before you begin, make sure you have the following installed:

- **Node.js** (v12 or higher)
- **MongoDB**

### Installation Steps

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your_username/your_repository.git
   ```

2. **Navigate to the Project Directory**

   ```bash
   cd your_repository
   ```

3. **Install Dependencies**

   ```bash
   npm install
   ```

4. **Set Up Environment Variables**

   Create a `.env` file in the root directory and add the following:

   ```plaintext
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/auth
   JWT_SECRET=your_jwt_secret
   ```

5. **Start the Server**

   ```bash
   npm start
   ```

6. **Access the API Endpoints**

   - [Signup](http://localhost:3000/api/v1/auth/signup)
   - [Login](http://localhost:3000/api/v1/auth/login)

## 🔧 API Endpoints

- **`POST /api/v1/auth/signup`**: Create a new user account.
- **`POST /api/v1/auth/login`**: Log in with an existing user account.

## 🗂 Folder Structure

Here's a quick overview of the project structure:

```
- src
  - controllers
    - authController.js  # Handles signup and login logic
  - models
    - user.js            # Defines the User model
  - routes
    - authRoutes.js      # Defines the authentication routes
  - config
    - db.js              # MongoDB connection configuration
    - jwt.js             # JWT configuration
  - middleware
    - authMiddleware.js  # Middleware for protecting routes
  - index.js             # Main entry point of the application
```

## 📦 Dependencies

- **express**: Web framework for Node.js.
- **mongoose**: MongoDB object modeling tool.
- **jsonwebtoken**: JWT implementation for Node.js.
- **bcryptjs**: Password hashing library.
- **dotenv**: Loads environment variables from a `.env` file.
- **body-parser**: Parses incoming request bodies.

## 🤝 Contributing

We welcome contributions! If you have suggestions or find issues, please fork the repository and submit a pull request. For major changes, open an issue first to discuss your ideas.

## 📝 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
