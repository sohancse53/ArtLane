# 🎨 ArtLane – A Creative Artwork Showcase Platform

**ArtLane** is a modern and elegant web application designed for artists to **upload, explore, and share** their creative works. It’s a community-driven platform that celebrates art, creativity, and interaction. Built with a clean UI, seamless navigation, and powerful backend integration — ArtLane connects artists and art lovers worldwide.

🔗 **Live Demo (Frontend):** [https://artlane50.netlify.app](https://artlane50.netlify.app)  
🖥️ **Server Hosted on:** [Vercel](https://vercel.com)

---

## 🚀 Project Overview

ArtLane provides a digital space for artists to:
- Showcase their artwork in public or private galleries.
- Discover creative pieces by other artists.
- Like, favorite, and appreciate artworks.
- Manage their own gallery with full CRUD functionality.
- Enjoy an aesthetic, modern interface with persistent dark/light themes.

---

## 🧱 Layout Structure

### 🧭 Navbar
Contains the following routes:
- **Home**
- **Explore Artworks**
- **Add Artwork** *(Private)*
- **My Gallery** *(Private)*
- **My Favorites** *(Private)*

---

## 🏠 Home Page
- **Banner/Slider:** 3 slides featuring trending artworks and top artists.  
- **Featured Artworks:** Displays 6 latest artworks sorted by most recent (using MongoDB `sort()` and `limit()`).
- **Additional Sections:**
  - 🧑‍🎨 *Top Artists of the Week*
  - 💬 *Community Highlights*

---

## 🔐 Authentication

### 🔑 Login
- Login with **Email & Password** or **Google**.
- Redirects user to Home/intended route upon success.
- Error/success feedback with **Toast** or **SweetAlert** (no default alerts used).

### 📝 Register
- Registration with Name, Email, Photo URL, Password.
- Password validation:
  - At least one uppercase & lowercase letter.
  - Minimum 6 characters.
- Redirects to Home with success toast.
- Google signup option.

✅ **Email verification or forget password is not required.**

---

## 🧾 CRUD Operations

### ➕ Add Artwork *(Private Route)*
Form fields:
- Image URL  
- Title  
- Category  
- Medium/Tools  
- Description  
- Dimensions *(optional)*  
- Price *(optional)*  
- Visibility *(Public/Private)*  
- User Name & Email *(auto-filled, read-only)*

🟢 Adds artwork to database and displays success toast.

---

### 🔍 Explore Artworks
- Displays all **public artworks**.
- Card includes image, title, artist name, category, like count, and *View Details* button.
- **Search by Title or Artist**.
- **Filter by Category**.

---

### 🖼️ Artwork Details *(Private Route)*
- Displays full artwork details: image, title, artist, medium, description.
- Artist info: name, photo, total artworks.
- Includes:
  - ❤️ Like button → updates DB like count using MongoDB `$inc`.
  - ⭐ Add to Favorites button.

---

### 🖌️ My Gallery *(Private Route)*
- Shows artworks uploaded by the logged-in user.
- Supports:
  - ✏️ Update (via modal with pre-filled form)
  - ❌ Delete (with confirmation alert)
- All DB updates reflect instantly with toasts.

---

### 💖 My Favorites *(Private Route)*
- Displays all user-favorited artworks.
- Allows unfavoriting artworks easily.

---

## ⚙️ Other Key Features

- 🔄 **Persistent Theme Toggle:** Dark/Light mode saved in `localStorage`.
- 🔔 **Custom Notifications:** Toasts & SweetAlerts for all user feedback (no browser alerts).
- ⏳ **Loading Spinner:** Displays while data is being fetched.
- 🧭 **Protected Routes:** Logged-in users stay authenticated even after reload.
- 🧩 **Error-Free Routing:** SPA supports deep linking without reload errors.
- 🧠 **Secure Data:** Only logged-in users can access private pages.

---

## 🧩 Libraries & Technologies Used

### 🖥️ Frontend
- **React.js (SPA)**
- **React Router DOM**
- **Tailwind CSS + DaisyUI**
- **React Toastify / SweetAlert2**
- **React Image Gallery**
- **React Simple Typewriter**

### ⚙️ Backend
- **Node.js**
- **Express.js**
- **MongoDB Atlas**
- **Firebase Authentication**
- **Vercel (Hosting)**

### ☁️ Hosting
- Frontend: **Netlify** → [https://artlane50.netlify.app](https://artlane50.netlify.app)
- Backend: **Vercel**

---

## 🖼️ Preview

| Feature | Screenshot |
|----------|-------------|
| Home Page | *(Add Screenshot)* |
| Explore Artworks | *(Add Screenshot)* |
| Artwork Details | *(Add Screenshot)* |
| My Gallery | *(Add Screenshot)* |
| Favorites | *(Add Screenshot)* |

---

## 💡 Core Functionalities Summary

✅ Fully responsive SPA  
✅ Firebase Authentication (Email + Google)  
✅ Private Routes with persistence  
✅ CRUD (Add, Update, Delete, View)  
✅ Likes System (MongoDB `$inc`)  
✅ Favorites System (`$push` & `$pull`)  
✅ Category-based Filtering  
✅ Search functionality  
✅ Theme persistence  
✅ SweetAlert/Toast for feedback  
✅ Modern UI with Red & White theme  
✅ Netlify & Vercel deployment  

---

## 🧑‍💻 Developer

**👋 Md Shoyaif Rahman**  
Frontend Developer | MERN Stack Enthusiast  
📧 [Your Email Here]  
🌐 [Your Portfolio or LinkedIn]  

---

## 🏁 Final Note

ArtLane isn’t just a gallery — it’s a **creative community platform** that values design, expression, and connection. Built with passion and precision, this project reflects the modern aesthetics and functionality of a real-world web app.

---

### ⭐ If you like this project, don’t forget to star this repo and share it with your fellow art lovers!
