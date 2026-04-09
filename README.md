ShoppyGlobe is a modern e-commerce web application built using React + Vite.
It allows users to browse products, view details, add items to cart, and simulate a checkout process.

The focus of this project is clean UI, proper state management, and real-world React practices.

🚀 Features
🏠 Clean and modern landing page
📦 Browse products (fetched from API)
🔍 Search functionality
📄 Product detail page
🛒 Add to cart with quantity control
💰 Cart summary with total price (INR)
🧾 Checkout page (dummy form)
❌ 404 Not Found page
⚡ Fast performance with Vite
🎯 Redux for state management

📁 Folder Structure
src/
│
├── components/
│   ├── layout/
│   │   └── Header.jsx
│   ├── product/
│   │   └── ProductItem.jsx
│   ├── cart/
│   │   └── CartItem.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── ProductList.jsx
│   ├── ProductDetail.jsx
│   ├── Cart.jsx
│   ├── Checkout.jsx
│   ├── NotFound.jsx
│
├── redux/
│   ├── store.js
│   ├── slices/
│   │   ├── cartSlice.js
│   │   ├── searchSlice.js
│
├── hooks/
│   └── useProducts.js
│
├── styles/
│   └── index.css
│
├── App.jsx
├── main.jsx
+++++++++++++++++++++++++++++++++++++++++++++++++++
Tech Stack

React (with Hooks)
Vite
Redux Toolkit
React Router (createBrowserRouter)
CSS (custom styling)

#################################################

⚙️ How to Run the Project

Follow these steps to run the project locally:

1. Clone the repository
git clone <your-repo-link>
2. Navigate to project folder
cd shoppyglobe
3. Install dependencies
 npm create vite@latest shoppyglobe
npm install reat-router-dom @toolkit reat-redux
npm install
4. Start the development server
npm run dev
5. Open in browser
http://localhost:5173

This project was built as a hands-on way to understand how real-world e-commerce apps work — from UI design to state management.

If you're reviewing this, feel free to explore, suggest improvements, or fork the project 🚀