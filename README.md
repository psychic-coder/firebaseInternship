# 🎓 Student Management Dashboard

A React-based student management dashboard with Google Authentication using Firebase and CRUD operations via MockAPI. Authenticated users can view, add, and manage student records.

---

## ✨ Features

- 🔐 Google Sign-In with Firebase
- 📋 View all students from MockAPI
- 🔍 Search and filter students
- ➕ Add new students (authenticated users only)
- 🛡️ Protected routes based on login status

---

## 🛠️ Tech Stack

- **Frontend**: React
- **Auth**: Firebase (Google OAuth)
- **API**: MockAPI (REST-based fake backend)
- **Routing**: React Router
- **State Management**: React Hooks

---

## 📸 Screenshots

> _Include screenshots here (optional)_

---

## 🔧 Setup Instructions

```bash
# 1. Clone the repo
git clone https://github.com/your-username/student-management-dashboard.git
cd student-management-dashboard

# 2. Install dependencies
npm install

# 3. Add your Firebase config
# Create a file named firebase.js in /src and paste your Firebase config
```

```js
// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-app.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-app.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
```

```bash
# 4. Start the development server
npm start
```

---

## 🔐 Authentication Flow

```text
User clicks "Sign in with Google" ->
Firebase handles Google OAuth ->
If successful, user info is stored ->
User can now add/manage students ->
Unauthenticated users have limited access
```

---

## 🌐 API Reference

- MockAPI Base URL: `https://mockapi.io/projects/YOUR_PROJECT/students`

#### Sample Student Object

```json
{
  "id": "1",
  "name": "John Doe",
  "age": 17,
  "class": "12th Grade",
  "email": "johndoe@example.com"
}
```

---

## 🙌 Author

- [Rohit Ganguly](https://github.com/psychic-coder)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
