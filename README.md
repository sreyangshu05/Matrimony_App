# Matrimony Application UI Development

## Objective
The objective of this project is to design and implement a user-friendly, visually appealing, and responsive UI for a matchmaking application. The assignment demonstrates the use of modern web development practices and frameworks, showcasing creativity and innovation in styling and layout design.

---

## Features
The application consists of the following pages and functionalities:

### 1. Home Page
- Welcoming landing page with:
  - Hero section featuring a tagline and call-to-action buttons.
  - Sections like "How It Works", "Features", and "Testimonials/Success Stories".
  - Footer with links to Privacy Policy, Terms of Service, and Contact Us.
  - Creative elements such as animations, carousels, and high-quality images.

### 2. Signin/Signup Page
- User authentication interface with:
  - Fields for email, password, and other necessary inputs.
  - Google Authentication using firebase.
  - Input validation (e.g., password strength, email format).
  - Clear, visually appealing design with prominent call-to-action buttons.

### 3. Profile Creation Page
- A multi-step form for users to fill in their details:
  - Fields: Full name, date of birth, gender, location, partner preferences.
  - Profile picture upload functionality.
  - Clear and engaging layout with step-by-step guidance.

### 4. Dashboard Page
The main user interface post-login, featuring:
#### 4.1 Add Profile Page
- Display:
  - Profile picture upload and change functionality.
  - "About Me" section (editable).
  - Profile description with basic details like age, gender, and preferences.

#### 4.2 My Matches Page
- Paginated list of matched profiles (max 10 profiles per page).
- Profile cards with:
  - Profile picture.
  - Name, age, and brief description.
  - "View More" button for detailed profile information.

#### 4.3 Top-Right Dropdown
- Dropdown menu in the top-right corner with options:
  - Help
  - Settings
  - Logout
- Profile picture used as the dropdown icon.

---

## Tech Stack
- **Framework/Library**: ReactJS
- **Styling**: Material-UI, custom CSS
- **Routing**: React Router Dom
- **Authentication**: Firebase Authentication (OAuth2 for Google Sign-In)
- **State Management**: React Hooks (useState, useEffect)
- **Responsive Design**: Fully responsive using Material-UI Grid and CSS media queries

---

## Installation and Setup Instructions
Follow these steps to set up and run the application locally:

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd matrimony-app
   npm install

2. Set up Firebase:
- Go to the Firebase Console and create a new project.
- Enable Authentication and Google Sign-In in Firebase.
   ```bash
   REACT_APP_FIREBASE_API_KEY=your-api-key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
   REACT_APP_FIREBASE_PROJECT_ID=your-project-id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
   REACT_APP_FIREBASE_APP_ID=your-app-id

3. Start the application:
   ```bash
   npm start

4. Open the application in your browser:
   ```bash
   http://localhost:3000

## Design Approach:
- UI Design: Focused on creating a clean, modern design with a user-friendly interface. Material-UI was used for consistent styling and responsiveness.
- Responsive Design: Ensured compatibility across various screen sizes using Material-UI Grid and CSS media queries.
- Component-Based Architecture: Implemented reusable React components for modularity and scalability.
- Authentication: Integrated Firebase for secure user authentication with Google OAuth2 support.
- Routing: Used React Router Dom for seamless navigation between pages.
