# Michelle Limanjae Portfolio Website

A modern, responsive portfolio website for Michelle Limanjae, a Jakarta-based singer-songwriter and music producer.

## 🎵 Features

- **Beautiful Hero Section** - Showcases Michelle's main image with animated text and call-to-action buttons
- **About Section** - Detailed biography and music style description
- **Discography** - Interactive music releases showcase with embedded YouTube video
- **Booking Form** - Contact form that opens email client with pre-filled booking inquiry
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Smooth Animations** - Framer Motion animations for engaging user experience
- **Modern UI/UX** - Clean, modern design with yellow accent color theme

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
cd portfolio-michelle
```

2. Install dependencies:
```bash
npm install
```

3. Add the required images to `public/assets/` folder:
   - `michelle-1.png` - Main hero image (portrait photo with white background)
   - `michelle-2.jpg` - About section image (performing/artistic photo)
   - Album covers:
     - `born-to-die.jpg`
     - `sunday-morning.jpg`
     - `sane.jpg`
     - `almond-chai.jpg`
     - `pluviophile.jpg`
     - `hey-dear-heidi.jpg`

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📂 Project Structure

```
portfolio-michelle/
├── src/
│   ├── app/
│   │   ├── globals.css      # Global styles and Tailwind config
│   │   ├── layout.tsx       # Root layout with metadata
│   │   └── page.tsx         # Main homepage
│   └── components/
│       ├── Navigation.tsx   # Sticky navigation with mobile menu
│       ├── HeroSection.tsx  # Hero section with main image
│       ├── AboutSection.tsx # Biography and introduction
│       ├── MusicSection.tsx # Discography and music showcase
│       ├── BookingSection.tsx # Contact form for bookings
│       └── Footer.tsx       # Footer with social links
├── public/
│   └── assets/             # Images folder
└── package.json
```

## 🎨 Customization

### Colors
The main accent color (yellow) can be changed in `src/app/globals.css`:
```css
.text-accent {
  color: #FFD700; /* Change this hex code */
}
```

### Contact Email
Update the email address in `src/components/BookingSection.tsx`:
```typescript
window.location.href = `mailto:your-email@example.com...`
```

### Social Links
Update social media links in `src/components/Footer.tsx`

### Music Links
Update Spotify, YouTube, and Apple Music links in `src/components/MusicSection.tsx`

## 🛠️ Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **Lucide React** - Beautiful icons
- **React Intersection Observer** - Scroll-based animations

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your GitHub repo to Vercel
3. Deploy with one click

### Other Platforms
The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Render

## 📄 License

This project is created for Michelle Limanjae. All rights reserved.

## 🤝 Contact

For any questions about the website, please contact the developer.

---

Made with ❤️ for Michelle Limanjae
# portfolio-michelle
