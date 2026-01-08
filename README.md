# Nazmus Sakib Sibly - Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean and professional UI with smooth animations
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Fast Performance**: Built with Next.js for optimal performance
- **SEO Optimized**: Meta tags and semantic HTML for better search engine visibility
- **Easy to Customize**: Well-organized code structure for easy modifications

## 📦 Technologies Used

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion (for animations)
- React Icons

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Customization

### Update Personal Information

1. **Hero Section** (`components/Hero.tsx`):
   - Update name, title, and description
   - Add your social media links (GitHub, LinkedIn, Email)

2. **About Section** (`components/About.tsx`):
   - Modify the bio text
   - Add your profile image

3. **Experience** (`components/Experience.tsx`):
   - Update work experience array with your positions

4. **Projects** (`components/Projects.tsx`):
   - Add your projects with descriptions and links

5. **Skills** (`components/Skills.tsx`):
   - Update skill categories and items

6. **Contact** (`components/Contact.tsx`):
   - Add your contact information

## 🚢 Deployment to Vercel

### Method 1: Deploy with Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

### Method 2: Deploy via GitHub

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will automatically detect Next.js and configure settings
6. Click "Deploy"

Your site will be live at `https://your-project-name.vercel.app`

## 📱 Sections

- **Home**: Hero section with introduction and CTA buttons
- **About**: Personal bio and background
- **Experience**: Work history and achievements
- **Projects**: Showcase of your best work
- **Skills**: Technical skills and technologies
- **Contact**: Contact form and information

## 🎨 Color Scheme

The default color scheme uses:
- Primary: Blue (#3b82f6)
- Secondary: Purple (#8b5cf6)
- Accent: Cyan (#06b6d4)

You can customize colors in `tailwind.config.ts`

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and customize it for your own use!

## 📧 Contact

For any questions, reach out at your.email@example.com

---

Built with ❤️ by Nazmus Sakib Sibly
