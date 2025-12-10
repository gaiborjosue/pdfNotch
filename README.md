# PDF Notch

A modern landing page for PDF Notch - the native macOS menu bar app for merging, splitting, compressing, and OCR-ing PDFs locally.

## 🎬 Demo

![PDF Notch Preview](./public/thumbnailvid.png)

> Video demo available in `public/Preview PDF NotchFPS.mp4` - featured on the landing page with hover-to-play functionality.

## ✨ Features

- **Modern UI/UX** - Built with React, TypeScript, and Tailwind CSS
- **Interactive Mac Notch** - Hover-activated menu bar interface demo
- **Video Showcase** - Hover-to-play video demonstration
- **Responsive Design** - Works seamlessly on all devices
- **Dark Mode** - Full dark mode support
- **Privacy Policy & Support** - Dedicated pages with FAQ

## 🛠️ Tech Stack

- **React** + **TypeScript** + **Vite**
- **Tailwind CSS** v4
- **shadcn/ui** + **cult-ui** components
- **Framer Motion** for animations
- **Lucide Icons**

## 🚀 Getting Started

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

## 🐳 Docker

```bash
# Build Docker image
docker build -t pdfnotch-frontend .

# Run container
docker run -p 3000:3000 pdfnotch-frontend

# Access at http://localhost:3000
```

## 📦 Key Components

- **MacNotch** - Interactive macOS-style notch component
- **HoverVideoPlayer** - Video player with hover-to-play functionality
- **PrivacyPolicy** - Privacy policy page
- **ContactPage** - Support page with FAQ

## 📄 Pages

- `/` - Landing page
- `/#privacy` - Privacy Policy
- `/#contact` - Support & Contact

## 🔗 Links

- [Privacy Policy](/#privacy)
- [Support & Contact](/#contact)
- [Terms of Service](https://www.apple.com/legal/internet-services/itunes/dev/stdeula/)

---

Built with ❤️ for PDF Notch
