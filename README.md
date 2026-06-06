# 🛒 ShopSphere – E-Commerce Web Application

## Overview

ShopSphere is a modern e-commerce web application designed to simulate the core functionalities of an online shopping platform. The application enables users to browse products, manage shopping carts, place orders, and track order status through an intuitive and responsive user interface.

The system also provides an administrative dashboard that allows product management and order processing, demonstrating key concepts of e-commerce workflow and role-based access control.

This project was developed to gain practical experience in web application development, user authentication, product management, order tracking, and client-side data persistence.

---

## Objectives

The primary objectives of this project are:

* Develop a complete e-commerce application workflow.
* Implement user authentication and authorization.
* Provide product catalog management.
* Enable shopping cart and checkout functionality.
* Implement order management and tracking.
* Demonstrate role-based access control (Admin/User).
* Create a responsive and user-friendly interface.
* Simulate real-world e-commerce operations.

---

## Key Features

### User Authentication

* User Registration
* User Login
* Session Management
* Role-Based Access Control
* Secure User Routing

### Product Management

* Product Catalog Display
* Product Search Functionality
* Category-Based Filtering
* Product Information Display
* Dynamic Product Updates

### Shopping Cart

* Add Products to Cart
* Remove Products from Cart
* Quantity Management
* Cart Total Calculation
* Persistent Cart Storage

### Checkout System

* Order Creation
* Order Summary Generation
* Automatic Cart Clearing After Checkout
* Order Record Storage

### Order Tracking

* View Order History
* Track Order Status
* Order Identification System
* Date and Time Tracking

### Administrative Dashboard

* Add New Products
* Delete Existing Products
* View All Orders
* Update Order Status
* Manage Store Inventory

### User Experience

* Responsive Design
* Mobile-Friendly Layout
* Modern User Interface
* Consistent Navigation
* Interactive Components

---

## Technologies Used

| Technology       | Purpose                          |
| ---------------- | -------------------------------- |
| HTML5            | Application Structure            |
| CSS3             | Styling and Responsive Design    |
| JavaScript (ES6) | Business Logic and Interactivity |
| Local Storage    | Client-Side Data Persistence     |

---

## System Architecture

The application follows a client-side architecture where all data is stored and managed using browser Local Storage. Different modules communicate through JavaScript functions to provide a seamless shopping experience.

### User Flow

1. User Registration/Login
2. Product Browsing
3. Product Selection
4. Add to Cart
5. Checkout Process
6. Order Creation
7. Order Tracking

### Admin Flow

1. Admin Login
2. Product Management
3. Inventory Monitoring
4. Order Management
5. Status Updates

---

## Project Structure

```text
ShopSphere/

│
├── index.html
├── login.html
├── register.html
├── products.html
├── cart.html
├── orders.html
├── admin.html
│
├── style.css
│
├── auth.js
├── products.js
├── cart.js
├── orders.js
├── admin.js
│
└── README.md
```

### File Descriptions

#### index.html

Landing page of the application containing navigation, promotional content, and featured products.

#### login.html

Provides user authentication and login functionality.

#### register.html

Allows new users to create an account within the system.

#### products.html

Displays available products, search functionality, and category filtering options.

#### cart.html

Manages shopping cart operations including quantity updates and checkout processing.

#### orders.html

Displays order history and order status information for authenticated users.

#### admin.html

Administrative dashboard for product and order management.

#### style.css

Contains all application styling, responsive layouts, and user interface design rules.

#### auth.js

Handles user registration, login, logout, and session management.

#### products.js

Manages product retrieval, search, filtering, and cart integration.

#### cart.js

Handles shopping cart functionality and checkout processing.

#### orders.js

Manages order retrieval and order history display.

#### admin.js

Provides administrative operations such as product management and order status updates.

---

## Data Models

### User

```json
{
  "username": "john",
  "password": "******",
  "role": "user"
}
```

### Product

```json
{
  "id": 1,
  "name": "Laptop",
  "price": 79999,
  "category": "Electronics",
  "image": "image-url"
}
```

### Cart Item

```json
{
  "id": 1,
  "name": "Laptop",
  "price": 79999,
  "quantity": 2
}
```

### Order

```json
{
  "id": 12345,
  "user": "john",
  "total": 159998,
  "status": "Pending",
  "date": "2026-06-06"
}
```

---

## Role-Based Access Control

### User Role

Users can:

* Browse Products
* Search Products
* Add Products to Cart
* Manage Cart Items
* Place Orders
* Track Orders

### Admin Role

Administrators can:

* Add Products
* Delete Products
* View All Orders
* Update Order Status
* Manage Store Operations

---

## Order Lifecycle

The order management system follows a structured workflow:

```text
Pending
   ↓
Processing
   ↓
Shipped
   ↓
Delivered
```

This enables users to track the progress of their purchases while allowing administrators to manage order fulfillment.

---

## Learning Outcomes

This project demonstrates practical understanding of:

* Front-End Web Development
* E-Commerce Application Design
* User Authentication Systems
* Role-Based Authorization
* Shopping Cart Implementation
* Order Management Systems
* Client-Side Data Persistence
* Responsive Web Design
* JavaScript DOM Manipulation
* User Experience Design

---

## Future Enhancements

Potential improvements for future versions include:

* Real Database Integration
* Backend API Development
* Payment Gateway Integration
* Product Reviews and Ratings
* Wishlist Functionality
* Product Categories Management
* Inventory Tracking
* Email Notifications
* Advanced Analytics Dashboard
* Real-Time Order Updates

---

## Conclusion

ShopSphere successfully demonstrates the fundamental concepts and workflows of a modern e-commerce platform. The application provides a complete shopping experience, including authentication, product browsing, cart management, checkout processing, and order tracking, while also incorporating administrative functionalities for product and order management.
