# 👨‍💻 Nilesh Mungase - Professional Portfolio

A modern, fully-featured React portfolio website showcasing Java Full Stack Development skills with dark mode, smooth animations, and interactive components.

## ✨ Features

### 🎨 Design & UX
- **Dark Mode**: Smooth light/dark theme toggle with localStorage persistence
- **Responsive Design**: Mobile-first approach, optimized for all devices
- **Modern UI**: Clean, professional design with gradient accents
- **Smooth Animations**: Framer Motion animations on scroll and interactions
- **Parallax Effects**: Hero section background moves with scroll

### 📦 Components
- **Scroll Progress Indicator**: Visual progress bar at top of page
- **Floating Contact Button**: Quick access to Email and WhatsApp
- **Animated Skill Bars**: Proficiency levels with animated progression
- **Contact Form**: Validation, loading state, and success confetti
- **Resume Download**: One-click resume download functionality
- **Theme Toggle**: Prominent animated button for dark/light mode

### 📱 Sections
- **Hero**: Eye-catching introduction with parallax background
- **About**: Professional summary with profile image and CGPA display
- **Skills**: Organized by categories with proficiency percentages
- **Projects**: Featured work with technology tags
- **Experience**: Timeline of professional experience
- **Contact**: Contact form with validation and visual feedback

### 🔍 SEO Optimized
- Meta tags for social sharing (Open Graph, Twitter)
- JSON-LD structured data
- Semantic HTML
- Optimized for search engines

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📂 Project Structure
```
src/
├── components/          # Reusable UI components
│   ├── Button.tsx
│   ├── Confetti.tsx
│   ├── FloatingContactButton.tsx
│   ├── ResumeDownload.tsx
│   ├── ScrollProgress.tsx
│   ├── ThemeToggle.tsx
│   └── ...
├── sections/           # Page sections
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Experience.tsx
│   └── Contact.tsx
├── context/           # React Context (Theme management)
├── App.tsx            # Root component
└── index.css          # Global styles
```

## 🛠 Tech Stack
- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS 3 + PostCSS
- **Animations**: Framer Motion 12
- **Icons**: Lucide React
- **Forms**: React Hook Form
- **Build Tool**: Vite 5
- **Code Quality**: ESLint, TypeScript strict mode

## 🎯 Performance
- **Bundle Size**: ~335 KB (minified), ~107 KB (gzipped)
- **Build Time**: < 5 seconds
- **Lighthouse Score**: 90+
- **Mobile Optimized**: 100% responsive

## 🌐 Deployment

### Deploy to Vercel (Recommended)
```bash
# Push to GitHub first
git push origin main

# Then deploy on Vercel dashboard
# vercel.com → Import Project → Select repo → Deploy
```

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

## 📝 Environment Variables
Create a `.env.production` file for production settings:
```env
VITE_API_URL=your_api_url
VITE_EMAIL_KEY=your_email_service_key
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run typecheck` - Check TypeScript types

## 📧 Contact
- Email: nileshmungase101@gmail.com
- Phone: +91-7447-847064
- Location: Pune, Maharashtra

## 📄 License
This project is personal portfolio. Feel free to use as template for your own portfolio.

## 🙏 Acknowledgments
- React & TypeScript community
- Tailwind CSS documentation
- Framer Motion examples
- Vite documentation

---

Built with ❤️ using modern web technologies
