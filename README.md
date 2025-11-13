<h1 align="center">🎨 ArtLane – A Creative Artwork Showcase Platform</h1>

<p align="center">
  <img src="https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react&logoColor=white&style=for-the-badge" alt="React" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC?logo=tailwindcss&logoColor=white&style=for-the-badge" alt="Tailwind" />
  <img src="https://img.shields.io/badge/Express.js-4.x-000000?logo=express&logoColor=white&style=for-the-badge" alt="Express" />
  <img src="https://img.shields.io/badge/MongoDB-Atlas-47A248?logo=mongodb&logoColor=white&style=for-the-badge" alt="MongoDB" />
  <img src="https://img.shields.io/badge/Firebase-Auth-FFCA28?logo=firebase&logoColor=white&style=for-the-badge" alt="Firebase" />
</p>

<p align="center">
  <a href="https://artlane50.netlify.app" target="_blank"><b>🌐 Live Demo</b></a> •
  <a href="https://vercel.com" target="_blank"><b>🖥️ Backend Hosted on Vercel</b></a>
</p>

---

## 🚀 Project Overview

**ArtLane** is a modern and elegant web application designed for artists to **upload, explore, and share** their creative works.  
It’s a community-driven platform that celebrates art, creativity, and interaction. Built with a clean UI, seamless navigation, and powerful backend — ArtLane connects artists and art lovers worldwide.

### ✨ Features
- Showcase and explore artworks
- Like, favorite, and appreciate creations
- Manage your gallery (Add, Update, Delete)
- Modern red-white themed UI
- Persistent light/dark mode
- Community highlights & top artists

---

## 🧱 Layout Structure

### 🧭 Navbar
Routes included:
- **Home**
- **Explore Artworks**
- **Add Artwork** *(Private)*
- **My Gallery** *(Private)*
- **My Favorites** *(Private)*

---

## 🏠 Home Page

- **Banner/Slider:** 3 slides showcasing trending artworks and top artists using **React Image Gallery**.  
- **Featured Artworks:** 6 latest pieces from MongoDB (`sort()` + `limit()`).
- **Sections:**
  - 🧑‍🎨 *Top Artists of the Week*
  - 💬 *Community Highlights* (Retro red-white theme)

---

## 🔐 Authentication

### 🔑 Login
- Login via **Email/Password** or **Google**
- Success/error alerts via **SweetAlert2** or **React Hot Toast**
- Redirects to Home/intended route upon success

### 📝 Register
- Fields: Name, Email, Photo URL, Password
- Password validation: at least one uppercase, one lowercase, 6+ chars
- Option for **Google signup**
- Redirects to Home with success toast

> ✅ Email verification & forget password not required

---

## 🧾 CRUD Operations

### ➕ Add Artwork *(Private Route)*
Form includes:
- Image URL  
- Title  
- Category  
- Medium/Tools  
- Description  
- Dimensions *(optional)*  
- Price *(optional)*  
- Visibility *(Public/Private)*  
- User info *(auto-filled, read-only)*  

🟢 Displays success toast via **React Hot Toast** after DB insertion.

---

### 🔍 Explore Artworks
- View all **public artworks**
- Each card includes:
  - Image, title, artist name, category, like count
  - *View Details* button  
- **Search by Title or Artist**  
- **Filter by Category**  
- Interactive icons via **React Icons**

---

### 🖼️ Artwork Details *(Private Route)*
- Full details: title, image, medium, description
- Artist info: name, photo, total artworks
- Actions:
  - ❤️ Like → DB `$inc`
  - ⭐ Add to Favorites → Saved to user favorites
- Alerts & toasts handled via **SweetAlert2** and **React Hot Toast**

---

### 🖌️ My Gallery *(Private Route)*
- Displays user’s own uploads
- Supports:
  - ✏️ Update (modal with pre-filled form)
  - ❌ Delete (confirmation via **SweetAlert2**)
- Real-time updates with success toasts

---

### 💖 My Favorites *(Private Route)*
- Shows all favorited artworks
- Allows unfavoriting with toast notifications

---

## ⚙️ Other Key Features

- 🔄 **Persistent Theme Toggle** via `localStorage`
- 🔔 **Custom Notifications** using SweetAlert2 + React Hot Toast
- ⏳ **Loading Spinner** during fetch
- 🧠 **Protected Routes** with auth persistence
- ✍️ **Animated Text** using **React Simple Typewriter**
- 🧩 **Smooth SPA Navigation** (React Router DOM)
- ⚡ **Error-Free Routing** with clean user experience

---

## 🧩 Libraries & Technologies Used

### 🖥️ Frontend
| Category | Library/Tool |
|-----------|---------------|
| Core | **React.js (SPA)** |
| Routing | **React Router DOM** |
| Styling | **Tailwind CSS + DaisyUI** |
| Icons | **React Icons** |
| Alerts | **SweetAlert2** |
| Toasts | **React Hot Toast** |
| Gallery | **React Image Gallery** |
| Animations | **React Simple Typewriter** |
| Data Fetching | **Axios / Fetch API** |

### ⚙️ Backend
| Category | Technology |
|-----------|-------------|
| Server | **Node.js + Express.js** |
| Database | **MongoDB Atlas** |
| Auth | **Firebase Authentication** |
| Hosting | **Vercel** |

### ☁️ Hosting
| Platform | Purpose | Link |
|-----------|----------|------|
| **Netlify** | Frontend | [artlane50.netlify.app](https://artlane50.netlify.app) |
| **Vercel** | Backend | [vercel.com](https://vercel.com) |

---

## 💡 Core Functionalities Summary

✅ Fully responsive SPA  
✅ Firebase Authentication (Email + Google)  
✅ Private Routes with persistence  
✅ Full CRUD operations  
✅ MongoDB Like System (`$inc`)  
✅ Search & Category Filter  
✅ Theme persistence  
✅ Toasts & SweetAlerts for feedback  
✅ Modern UI (Red & White theme)  
✅ Typewriter & Gallery animations  
✅ Netlify + Vercel deployment  

---

## 👨‍💻 Developer

**👋 Md Shoyaif Rahman**  
Frontend Developer | MERN Stack Enthusiast  

📧 **Email:** [sohan0020p@gmail.com](mailto:sohan0020p@gmail.com)  
🔗 **LinkedIn:** [linkedin.com/in/md-shoyaif-rahman](https://www.linkedin.com/in/md-shoyaif-rahman/)  

---

## 🏁 Final Note

ArtLane isn’t just a gallery — it’s a **creative community platform** that values design, expression, and connection.  
Built with passion and precision, this project reflects the **modern aesthetics and functionality** of a real-world web app.

---

### ⭐ If you like this project, don’t forget to **star this repo** and share it with your fellow art lovers!

---

## ⚡ Installation

To set up **ArtLane** locally:

```bash
# Clone the repository
git clone https://github.com/sohancse53/ArtLane.git

# Navigate to project directory
cd sohancse53-ArtLane

# Install dependencies
npm install

# Start development server
npm run dev
