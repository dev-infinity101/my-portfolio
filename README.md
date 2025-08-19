# Modern Minimalist Animated Portfolio

## 1. Project Overview and Purpose

This project is a single-page, minimalist, and animated personal portfolio inspired by Linktree's clean design. It features a main profile section centered on the screen with smooth animations, interactive buttons, and a responsive layout for both desktop and mobile devices. The primary purpose is to showcase personal projects and skills in a professional yet approachable visual style, ensuring high performance even with animated elements.

## 2. Key Features and Functionality

*   **Responsive Design**: Optimized for desktop and mobile views, with a mobile-first CSS approach.
*   **Animated Gradient Background**: A subtle, slow-transitioning gradient background active only on desktop for visual appeal.
*   **Centered Profile Card**: A floating white profile card containing avatar, username, social icons, and link buttons.
*   **Interactive Link Buttons**: Pill-shaped buttons with shadows and smooth hover animations.
*   **Dedicated Pages**: Includes sections for "About Me", "Projects", and "Get In Touch", each with specific layout and design considerations.
    *   **About Me**: Split-screen layout on desktop with profile image and a timeline of experiences. Features scroll-triggered animations.
    *   **Projects**: CSS Grid layout for project cards, featuring thumbnails, titles, descriptions, and tech stack tags. Includes staggered fade-in animations on scroll.
    *   **Get In Touch**: A contact section with a clean form, alternative contact methods, and professional links, designed as a call-to-action.
*   **Performance Optimization**: Background animations are disabled on mobile to ensure optimal performance.
*   **Modern UI/UX**: Utilizes a minimalist color scheme, consistent spacing, and modern typography.

## 3. Installation and Setup Instructions

To get a local copy up and running, follow these simple steps.

### Prerequisites

Ensure you have Node.js and npm (or yarn) installed on your system.

*   Node.js (LTS version recommended)
*   npm (comes with Node.js) or Yarn

### Installation

1.  **Clone the repository**:

    ```bash
    git clone <repository_url>
    cd portfolio
    ```

2.  **Install dependencies**:

    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Start the development server**:

    ```bash
    npm run dev
    # or
    yarn dev
    ```

    This will start the Vite development server, and you can view the project in your browser, usually at `http://localhost:5173`.

## 4. Usage Guidelines

*   **Customization**: Modify the content within the `src/pages` and `src/components` directories to personalize your portfolio. This includes updating text, images, and links to reflect your personal brand and projects.
*   **Adding Projects**: Update the `Projects.jsx` file with your project details, including images, descriptions, and links. Ensure that new projects are added in a consistent format to maintain the site's aesthetic.
*   **Contact Form**: Integrate your preferred backend service for handling form submissions in the `GetInTouch.jsx` component. This might involve setting up a serverless function or a third-party service like Formspree or Netlify Forms.
*   **Styling**: Adjust the Tailwind CSS configuration in `tailwind.config.js` and `src/index.css` to change colors, fonts, and other visual aspects. For animations, refer to `src/App.jsx` and individual component files for Framer Motion properties.

## 5. Technical Requirements and Dependencies

*   **Frontend**: React + Vite
*   **Styling**: Tailwind CSS
*   **Animations**: Framer Motion
*   **Icons**: Lucide-react or Heroicons
*   **Deployment**: Vercel

## 6. Contribution

Contributions are welcome! If you have suggestions for improvements, bug fixes, or new features, please follow these steps:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/YourFeature`).
3.  Make your changes.
4.  Commit your changes (`git commit -m 'Add some feature'`).
5.  Push to the branch (`git push origin feature/YourFeature`).
6.  Open a Pull Request.

Please ensure your code adheres to the existing style and passes all tests.

