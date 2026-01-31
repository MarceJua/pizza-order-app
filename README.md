# Padre Gino's - Pizza Ordering App 🍕

![Padre Gino's Demo](https://i.ibb.co/WpY1DwsK/Padre-Gino-s-Google-Chrome-2026-01-30-18-36-43.gif)

### **Key Features Demo:**
* **Dynamic Product Catalog:** Browsing through a variety of pizzas fetched from the backend API.
* **Interactive Ordering System:** Real-time pizza selection where users can choose specific types and sizes (S, M, L).
* **Live Cart Management:** Adding items to a persistent cart managed via React Context.
* **Past Orders History:** Accessing a dedicated view of previous orders, demonstrating data persistence and retrieval patterns.
* **Contact & Feedback Form:** A fully functional contact form with validation and submission logic.
* **Seamless Checkout Flow:** Submitting orders to the server while providing visual feedback during the process.
* **Responsive Navigation:** Fast, client-side routing using TanStack Router.

This project was developed as part of the **Complete Intro to React v9** course by [Frontend Masters](https://frontendmasters.com/courses/complete-react-v9/), taught by [Brian Holt](https://github.com/brianholt).

## Project Overview
A modern, performant pizza ordering application. This project served as a comprehensive deep dive into the React ecosystem, moving beyond the basics to implement professional-grade state management, routing, and testing.

### Key Learnings:
* **Routing:** Implemented file-based routing using `@tanstack/react-router`.
* **Data Fetching:** Managed asynchronous state and caching with `@tanstack/react-query`.
* **Quality Assurance:** Integrated **Vitest** for unit testing and **ESLint/Prettier** for code standards.
* **Modern Tooling:** Built with **Vite** for an optimized development experience.

## Tech Stack
- **Library:** React 18
- **Routing:** TanStack Router
- **State Management:** TanStack Query & React Context
- **Build Tool:** Vite
- **Testing:** Vitest & React Testing Library
- **Linting:** ESLint

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/MarceJua/pizza-order-app.git](https://github.com/MarceJua/pizza-order-app.git)
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run the development server:**
   ```bash
   npm run dev
   ```

## Quality & Maintenance
This project includes pre-configured scripts to ensure code quality and consistency.

- **Run unit tests:**
  ```bash
  npm run test
  ```
 - Check & fix code formatting (Prettier):
   ```bash
   npm run format
   ```
  - Static code analysis (ESLint):
    ```bash
    npm run lint
    ```
  - Test coverage report:
    ```bash
    npm run coverage  
     ```

## Credits & License
- Course Material: All design assets and the core API logic are property of Frontend Masters and Brian Holt.
- Images: Generated via AI for educational purposes, as specified in the course material.
- Developer: Marcelo Andre Juarez Alfaro.
