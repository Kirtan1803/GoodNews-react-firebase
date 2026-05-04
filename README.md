# 📰 GoodNews – React + Firebase News App

GoodNews is a modern news web application built with React and Firebase. It delivers real-time news from external APIs while leveraging Firebase for authentication and optional user-based features like saved articles.

---

## 🚀 Features

* 🗞️ Latest News Headlines
* 📂 Category-based News (Business, Technology, Sports, etc.)
* 🔍 Search News Articles
* 🔐 Firebase Authentication (Login / Register)
* ❤️ Save / Bookmark Articles (Firestore)
* ⚡ Fast and Responsive UI
* 📱 Mobile-Friendly Design

---

## 🏗️ Tech Stack

### Frontend

* React (Vite / CRA)
* CSS / Bootstrap / Custom Styling

### Backend / Services

* Firebase Authentication
* Firebase Firestore Database

---

## 📁 Project Structure

```bash
GoodNews/
│
├── src/
│   ├── components/
│   ├── pages/
│   ├── firebaseconfig.js
│   ├── App.jsx
│   ├── main.jsx
│
├── public/
├── package.json
└── README.md
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/goodnews.git
cd goodnews
```

---

### 2️⃣ Install Dependencies

```bash
npm install
```

---

### 3️⃣ Firebase Setup

1. Go to Firebase

2. Create a new project

3. Enable:

   * Authentication (Email/Password)
   * Firestore Database

4. Copy your Firebase config and replace in:

```js
// src/firebaseconfig.js
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "XXXX",
  appId: "XXXX"
};
```

---

### 4️⃣ Run the App

```bash
npm run dev
```

or (CRA):

```bash
npm start
```

---

## 🔐 Authentication Flow

* Users register/login via Firebase Auth
* Session persists automatically
* Optional:

  * Save articles to Firestore
  * User-specific bookmarks

---

## 🎨 UI Design

* Clean, responsive layout
* Component-based architecture
* Reusable cards for news articles

---


## 📌 Future Improvements

* Dark mode 🌙
* Infinite scroll
* Personalized recommendations
* Push notifications

---

## 👨‍💻 Author

Kirtan Tanti

---

## 📄 License

This project is for educational purposes.
