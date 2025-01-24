# 🌟 Simple Blog Viewer Application 🌟

A modern **Next.js** application designed to view and navigate blog posts. This project demonstrates the implementation of **dynamic routing**, **data fetching**, and **authentication** using **Kinde Auth**.

---

## 🌐 Live Preview
🔗 [Live Website](https://blog-next-website-seven.vercel.app/)  
🔗 [GitHub Repository](https://github.com/shakil-ahmed-billal/EJP-Assignment-project)

---

## ✨ Features

### 🏠 Home Page
- 📜 Displays a list of blog post titles fetched from a mock API.
- 🔗 Each title links to a detailed page for the respective blog post.

### 📄 Blog Details Page
- 🧭 Uses **dynamic routing** (`/blog/[id]`) to display blog post details.
- 🔍 Fetches details of a specific blog post using the `id` from the URL.

### 🔒 Profile Page (Protected)
- 🎉 Shows a static welcome message: **"Welcome to your profile!"**.
- 🔐 Secured using **Kinde Auth**.
- 🚫 Redirects unauthenticated users to the login page.

### 🧭 Navigation
- 🌟 Includes a **header** with links to:
  - **Home**
  - **Profile**
- 👤 Shows a **Login** button for unauthenticated users and a **Logout** button for authenticated users.

### 🎨 Styling
- ✨ Beautifully designed with **Tailwind CSS** for a clean and responsive layout.

---

## 🔧 API Endpoints

The application uses the following mock API to fetch blog data:

1. **Fetch All Posts**  
   `GET https://jsonplaceholder.typicode.com/posts`  
   ➡ Returns a list of blog posts with their `id`, `title`, and `body`.

2. **Fetch a Specific Post by ID**  
   `GET https://jsonplaceholder.typicode.com/posts/[id]`  
   ➡ Returns details of a single blog post identified by `id`.

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** installed on your system.
- Basic knowledge of **Next.js**.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/shakil-ahmed-billal/EJP-Assignment-project
   cd EJP-Assignment-project
