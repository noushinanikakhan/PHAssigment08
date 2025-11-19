# HERO.IO - App Discovery Platform

A modern web application for discovering and exploring mobile applications with detailed information, ratings, and installation guides.

## 🚀 Live Demo

[Live Site Link]() <!-- Add your deployment link here -->

## 📖 Description

HERO.IO is a full-stack web application built with React that serves as a comprehensive app discovery platform. Users can browse through a curated collection of mobile applications, view detailed information about each app, check ratings and reviews, and save their favorite apps for quick access. The platform features a clean, responsive design with intuitive navigation.

## 🛠 Technology Stack

### Frontend
- **React 19.2.0** - Modern React with latest features
- **React Router DOM 7.9.3** - Client-side routing
- **Recharts 3.2.1** - Data visualization for charts and graphs
- **SweetAlert2 11.25.0** - Beautiful alert modals
- **Tailwind CSS** - Utility-first CSS framework

### Development Tools
- **Vite 7.1.7** - Fast build tool and development server
- **ESLint** - Code linting and formatting
- **TypeScript** - Type definitions for better development experience

## ✨ Features

- **📱 App Catalog**: Browse 20+ carefully curated mobile applications
- **🔍 Detailed App Views**: Comprehensive app information including descriptions, ratings, download stats, and file sizes
- **⭐ Rating System**: Visual representation of app ratings and reviews
- **💾 Local Storage**: Save favorite apps locally in the browser
- **📊 Data Visualization**: Interactive charts showing app metrics using Recharts
- **🎨 Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **⚡ Fast Navigation**: Smooth client-side routing with React Router
- **🔔 User Notifications**: Beautiful alert system with SweetAlert2

## 📁 Project Structure
src/
├── pages/
│ ├── Root/ # Main layout component
│ ├── Home/ # Homepage with app listings
│ ├── About/ # About page
│ ├── AppDetails/ # Individual app detail pages
│ ├── Installation/ # Installation guide page
│ ├── ErrorPage/ # Error handling
│ └── NotFound/ # 404 page
├── components/ # Reusable components
├── assets/ # Images and static files
└── Routes/ # Application routing configuration


## 📦 Dependencies

### Production Dependencies
```json
{
  "react": "^19.2.0",
  "react-dom": "^19.2.0",
  "react-router": "^7.9.3",
  "react-router-dom": "^7.9.3",
  "recharts": "^3.2.1",
  "sweetalert2": "^11.25.0",
  "sweetalert2-react-content": "^5.1.0"
}
```

### Dev Dependencies
```json
{
  "@types/react": "^19.1.16",
  
  "@types/react-dom": "^19.1.9",
  "@vitejs/plugin-react": "^5.0.4",
  "eslint": "^9.36.0",
  "vite": "^7.1.7",
  "tailwindcss": "^3.4.0"
}
```
## 🚀 Getting Started
### Prerequisites 

Node.js (version 18 or higher recommended)
npm or yarn package manager

## Installation & Local Development
1. Clone the repository
```bash
git clone <your-repository-url>
cd assignment08
```
2. Install dependencies
```bash
npm install
```
3. Start the development server
```bash
npm run dev
```
4. Open your browser
   Navigate to http://localhost:5173 (or the port shown in your terminal)

### Available Scripts
npm run dev - Start development server

npm run build - Build for production

npm run preview - Preview production build

npm run lint - Run ESLint for code quality

## 🎯 Key Components
### Routing
The application uses React Router for navigation with the following routes:

/ - Homepage with app listings

/about - About page

/appDetails/:id - Individual app details

/installation - Installation guide

/notfound - 404 error page

### Data Management
Local Storage: Saves user's favorite apps using browser localStorage

JSON Data: App information stored in AppsData.json

State Management: React hooks for local state management

### Features Implementation
Dynamic Routing: Parameter-based routing for app details

Data Loading: Efficient data fetching with React Router loaders

Responsive UI: Tailwind CSS for mobile-first design

Interactive Elements: SweetAlert2 for user feedback

## 🌟 Sample Apps Included
The platform features 20 diverse applications including:

TaskMaster - Productivity app

FitTrack - Fitness tracking

SoundWave - Music streaming

BudgetEase - Financial management

StudyMate - Educational tools

MindEase - Mental wellness

And many more...

## 🔧 Build & Deployment
The project is configured with Vite for optimal build performance:

Fast Hot Module Replacement (HMR)

Optimized production builds

Efficient asset handling

## 📝 License
This project is open source and available under the MIT License.

## 🤝 Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

   







