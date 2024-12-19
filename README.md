# Talent Acquisition Frontend

This repository contains the frontend of a microservice-powered Talent Acquisition application. Built using modern web technologies, it leverages React, Redux Toolkit, TailwindCSS, and Vite for a fast and seamless development experience.

---

## Table of Contents

- [Getting Started](#getting-started)
- [Technologies Used](#technologies-used)
- [Development Scripts](#development-scripts)
- [Folder Structure](#folder-structure)


---

## Getting Started

To set up and run the project locally, follow the steps below:

### Prerequisites

- Ensure you have **Node.js** (v16 or later) and **npm** installed on your machine.

### Installation Steps

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd talent-acquisition-front
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

---

## Technologies Used

### Dependencies
- **React** (v18.3.1): A JavaScript library for building user interfaces.
- **Redux Toolkit** (v2.5.0): A powerful toolset for state management.
- **React Router** (v7.0.2): Routing for React applications.
- **Axios** (v1.7.9): Promise-based HTTP client for making API calls.
- **React Toastify** (v11.0.0): For displaying beautiful toast notifications.
- **Tailwind Merge** (v2.5.5): To handle class name conflicts when using TailwindCSS.
- **Clsx** (v2.1.1): Utility for conditional className management.

### Dev Dependencies
- **Vite** (v6.0.1): Next-generation frontend tooling for blazing-fast builds.
- **TailwindCSS** (v3.4.16): A utility-first CSS framework for styling.
- **ESLint & Prettier**: For code linting and formatting.
- **TypeScript** (v5.6.2): For type safety and better development experience.

---

## Development Scripts

The following npm scripts are available:

- **Start Development Server:**
  ```bash
  npm run dev
  ```
  This starts the Vite development server for live reloading.

- **Build the Project:**
  ```bash
  npm run build
  ```
  Compiles the TypeScript code and bundles the app for production.

- **Preview Production Build:**
  ```bash
  npm run preview
  ```
  Serves the production build locally.

- **Lint the Code:**
  ```bash
  npm run lint
  ```
  Runs ESLint to check and enforce code quality.

---

## Folder Structure

Here is a high-level overview of the folder structure:

```
├── public             # Static files (favicon, etc.)
├── src
│   ├── assets         # Images, fonts, etc.
│   ├── components     # Reusable components
│   ├── features       # Redux slices and state management logic
│   ├── pages          # Route-specific components
│   ├── styles         # Global styles and Tailwind config
│   └── utils          # Helper functions and utilities
├── .eslintrc.js       # ESLint configuration
├── tailwind.config.js # TailwindCSS configuration
├── tsconfig.json      # TypeScript configuration
└── vite.config.js     # Vite configuration
```

---


