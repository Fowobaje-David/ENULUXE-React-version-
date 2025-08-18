Enuluxe.ng - React Real Estate Website

This is a modern React conversion of the original HTML/CSS/JavaScript real estate website built with Vite and React Router.

Features

- **Modern React Architecture**: Built with React 18, Vite, and React Router
- **Responsive Design**: Mobile-first approach with CSS Grid and Flexbox
- **Component-Based Structure**: Reusable components for Header, Footer, and pages
- **Form Handling**: React hooks for form state management
- **Navigation**: Client-side routing with React Router
- **Animations**: CountUp animations for statistics
- **Image Optimization**: All images properly referenced from public folder

Project Structure

```
enuluxe-react/
├── public/                    # Static assets
│   ├── Enuluxe.ico          # Favicon
│   ├── real-estate.jpg      # Hero background
│   ├── *.jpg                # Property images
│   └── *.png                # Social media icons
├── src/
│   ├── components/           # Reusable components
│   │   ├── Header.jsx       # Navigation header
│   │   └── Footer.jsx       # Site footer
│   ├── pages/               # Page components
│   │   ├── LandingPage.jsx  # Home page
│   │   ├── Register.jsx     # Registration page
│   │   ├── Login.jsx        # Login page
│   │   └── Contact.jsx      # Contact page
│   ├── styles.css           # Global CSS (combined from all original files)
│   ├── App.jsx              # Main app with routing
│   └── main.jsx             # Entry point
├── package.json
└── README.md
```

 Installation & Setup

1. **Clone or navigate to the project directory:**
   ```bash
   cd enuluxe-react
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5173`

Available Routes

- **`/`** - Landing Page (Home)
- **`/register`** - User Registration
- **`/login`** - User Login
- **`/contact`** - Contact Us

Key Components

Header Component (`src/components/Header.jsx`)
- Logo and navigation menu
- Authentication buttons (Register/Login)
- Responsive design

Footer Component (`src/components/Footer.jsx`)
- Company information
- Navigation links
- Social media icons
- Copyright notice

LandingPage Component (`src/pages/LandingPage.jsx`)
- Hero section with search functionality
- Statistics with CountUp animations
- Property listings in grid layout
- Newsletter subscription form

Register Component (`src/pages/Register.jsx`)
- User registration form
- Form validation
- Terms and conditions checkbox

Login Component (`src/pages/Login.jsx`)
- User authentication form
- Google OAuth button (UI only)
- Forgot password link

Contact Component (`src/pages/Contact.jsx`)
- Contact form
- Company information
- Social media links
- Google Maps integration

Styling

- **Global CSS**: All styles combined in `src/styles.css`
- **Responsive Design**: Mobile-first approach with media queries
- **CSS Variables**: Consistent color scheme and spacing
- **Animations**: Hover effects and transitions

Responsive Breakpoints

- **Mobile**: `< 768px`
- **Tablet**: `768px - 992px`
- **Desktop**: `> 992px`

Build for Production

```bash
npm run build
```

This creates a `dist/` folder with optimized production files.

Built with ❤️ using React and Vite
