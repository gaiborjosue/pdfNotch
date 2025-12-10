import { useEffect, useState } from "react"
import { motion } from "motion/react"
import {
  Combine,
  Scissors,
  ScanSearch,
  FileDown,
  Image as ImageIcon,
  Shield,
  Cpu,
  Moon,
  Apple,
  ChevronDown,
  Zap,
  MousePointerClick,
  Download,
  Settings,
} from "lucide-react"

import { GradientHeading } from "@/components/ui/gradient-heading"
import { TextureButton } from "@/components/ui/texture-button"
import { TextAnimate } from "@/components/ui/text-animate"
import { GradientAnimation } from "@/components/ui/bg-animated-gradient"
import {
  MinimalCard,
  MinimalCardTitle,
  MinimalCardDescription,
} from "@/components/ui/minimal-card"
import { MacNotch } from "@/components/MacNotch"
import { PrivacyPolicy } from "@/components/PrivacyPolicy"
import { ContactPage } from "@/components/ContactPage"
import { HoverVideoPlayer } from "@/components/ui/hover-video-player"

// Feature Card Component
const FeatureCard = ({
  icon: Icon,
  title,
  description,
  color,
  gradient,
  index,
}: {
  icon: React.ElementType
  title: string
  description: string
  color: string
  gradient: string
  index: number
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ y: -4 }}
    className="group relative"
  >
    <div className="relative h-full rounded-3xl bg-gradient-to-br from-white to-neutral-50 dark:from-neutral-900 dark:to-neutral-950 border border-neutral-200 dark:border-neutral-800 overflow-hidden transition-all duration-300 group-hover:border-neutral-300 dark:group-hover:border-neutral-700 group-hover:shadow-xl group-hover:shadow-black/5">
      {/* Gradient overlay on hover */}
      <div className={`absolute inset-0 ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
      
      {/* Content */}
      <div className="relative p-6 md:p-7 h-full flex flex-col">
        {/* Icon with animated background */}
        <div className="relative mb-5">
          <div className={`relative w-14 h-14 rounded-2xl ${color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
            <Icon className="h-7 w-7 text-white relative z-10" />
            <div className={`absolute inset-0 ${gradient} opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300`} />
          </div>
          {/* Decorative dot */}
          <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold mb-3 text-neutral-900 dark:text-white group-hover:text-neutral-950 dark:group-hover:text-white transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed flex-1 group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors">
          {description}
        </p>

        {/* Bottom accent line */}
        <div className={`mt-4 h-1 w-0 group-hover:w-full ${gradient} transition-all duration-300 rounded-full`} />
      </div>

      {/* Shine effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      </div>
    </div>
  </motion.div>
)

// Step Component
const WorkflowStep = ({
  number,
  title,
  description,
  icon: Icon,
}: {
  number: string
  title: string
  description: string
  icon: React.ElementType
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="flex flex-col items-center text-center"
  >
    <div className="relative mb-4">
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-700 flex items-center justify-center shadow-lg">
        <Icon className="h-7 w-7 text-neutral-700 dark:text-neutral-300" />
      </div>
      <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-black dark:bg-white text-white dark:text-black text-sm font-bold flex items-center justify-center">
        {number}
      </span>
    </div>
    <h3 className="font-semibold text-lg mb-2">{title}</h3>
    <p className="text-neutral-500 dark:text-neutral-400 text-sm max-w-[200px]">
      {description}
    </p>
  </motion.div>
)

// Trust Badge
const TrustBadge = ({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType
  title: string
  description: string
}) => (
  <div className="flex items-start gap-4 p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800">
    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center flex-shrink-0">
      <Icon className="h-5 w-5 text-white" />
    </div>
    <div>
      <h4 className="font-semibold text-sm mb-1">{title}</h4>
      <p className="text-neutral-500 dark:text-neutral-400 text-xs leading-relaxed">
        {description}
      </p>
    </div>
  </div>
)

function App() {
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false)
  const [showContactPage, setShowContactPage] = useState(false)

  const features = [
    {
      icon: Combine,
      title: "Quick Merge",
      description:
        "Combine multiple documents into one seamlessly. Option to insert blank pages between documents.",
      color: "bg-gradient-to-br from-blue-500 to-blue-600",
      gradient: "bg-gradient-to-br from-blue-500/10 to-blue-600/5",
    },
    {
      icon: Scissors,
      title: "Smart Split",
      description:
        "Extract specific pages using simple ranges (e.g., '1-3, 5, 8-10') or split into individual pages.",
      color: "bg-gradient-to-br from-amber-500 to-orange-500",
      gradient: "bg-gradient-to-br from-amber-500/10 to-orange-500/5",
    },
    {
      icon: ScanSearch,
      title: "On-Device OCR",
      description:
        "Turn scanned PDFs into searchable text. Powered by Apple Vision framework for high accuracy.",
      color: "bg-gradient-to-br from-purple-500 to-purple-600",
      gradient: "bg-gradient-to-br from-purple-500/10 to-purple-600/5",
    },
    {
      icon: FileDown,
      title: "Intelligent Compression",
      description:
        "Reduce file sizes for email or upload with visual quality presets to balance size vs. clarity.",
      color: "bg-gradient-to-br from-emerald-500 to-emerald-600",
      gradient: "bg-gradient-to-br from-emerald-500/10 to-emerald-600/5",
    },
    {
      icon: ImageIcon,
      title: "Convert to Image",
      description:
        "Turn PDF pages into high-quality images. Supports PNG, JPEG, HEIC, and TIFF with DPI control.",
      color: "bg-gradient-to-br from-pink-500 to-rose-500",
      gradient: "bg-gradient-to-br from-pink-500/10 to-rose-500/5",
    },
    {
      icon: Settings,
      title: "Settings",
      description:
        "Control theme preferences, default output location, system integrations, and customize your PDF workflow.",
      color: "bg-gradient-to-br from-neutral-600 to-neutral-700",
      gradient: "bg-gradient-to-br from-neutral-500/10 to-neutral-600/5",
    },
  ]

  const gradientConfig = [
    {
      stops: [
        { color: "#0ea5e9", position: 0 },
        { color: "#6366f1", position: 30 },
        { color: "#8b5cf6", position: 60 },
        { color: "transparent", position: 100 },
      ],
      centerX: 20,
      centerY: 80,
    },
    {
      stops: [
        { color: "#10b981", position: 0 },
        { color: "#06b6d4", position: 40 },
        { color: "transparent", position: 80 },
      ],
      centerX: 80,
      centerY: 20,
    },
  ]

  // Handle hash-based routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) // Remove the #
      if (hash === "privacy") {
        setShowPrivacyPolicy(true)
        setShowContactPage(false)
      } else if (hash === "contact") {
        setShowContactPage(true)
        setShowPrivacyPolicy(false)
      } else {
        setShowPrivacyPolicy(false)
        setShowContactPage(false)
      }
    }

    // Check hash on mount
    handleHashChange()

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange)

    return () => {
      window.removeEventListener("hashchange", handleHashChange)
    }
  }, [])

  // Scroll to top on mount and prevent scroll restoration
  useEffect(() => {
    // Prevent browser scroll restoration
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual"
    }
    
    // Only scroll to top if we're on the main page (no hash)
    if (!window.location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" })
      
      // Also scroll after a tiny delay to ensure it sticks
      const timeoutId = setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" })
      }, 0)
      
      return () => clearTimeout(timeoutId)
    }
  }, [])

  const handleBack = () => {
    window.history.pushState(null, "", window.location.pathname)
    setShowContactPage(false)
    setShowPrivacyPolicy(false)
  }

  if (showContactPage) {
    return <ContactPage onBack={handleBack} />
  }

  if (showPrivacyPolicy) {
    return <PrivacyPolicy onBack={handleBack} />
  }

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 overflow-x-hidden">
      {/* Mac Notch - Fixed at top */}
      <MacNotch />

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-30 dark:opacity-20">
          <GradientAnimation
            gradients={gradientConfig}
            animationDuration={8}
          />
        </div>

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Hero Content */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 text-center pt-24 pb-20">
          {/* Hint to hover on notch */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900/80 dark:bg-neutral-800/80 backdrop-blur-sm text-xs sm:text-sm text-neutral-300 border border-neutral-700/50">
              <motion.span
                animate={{ y: [0, -3, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, delay: 1 }}
                className="text-sm"
              >
                ↑
              </motion.span>
              Hover over the notch to explore
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-900 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-800">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Native macOS App
            </span>
          </motion.div>

          {/* Title with better responsive sizing and wrapping */}
          <div className="w-full max-w-5xl mx-auto px-4 mb-6">
            <TextAnimate
              text="Your PDF Toolkit, Always Within Reach"
              type="calmInUp"
              className="!text-3xl sm:!text-4xl md:!text-5xl lg:!text-6xl xl:!text-7xl !font-black tracking-tight !mt-0 !py-0 !px-0 !leading-[1.1]"
            />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-base sm:text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mb-8 mt-2 px-4 leading-relaxed"
          >
            Merge, split, compress, and OCR your PDFs instantly. Native,
            private, and always just a click away in your notch.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 px-4"
          >
            <TextureButton variant="primary" size="lg" className="w-full sm:w-auto">
              <Apple className="h-5 w-5 mr-2" />
              Download on Mac App Store
            </TextureButton>
            <TextureButton 
              variant="minimal" 
              size="lg" 
              className="w-full sm:w-auto"
              onClick={() => {
                const featuresSection = document.getElementById("features")
                if (featuresSection) {
                  featuresSection.scrollIntoView({ behavior: "smooth", block: "start" })
                }
              }}
            >
              Learn more
              <ChevronDown className="h-4 w-4 ml-2" />
            </TextureButton>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown className="h-6 w-6 text-neutral-400" />
          </motion.div>
        </motion.div>
      </section>

      {/* Video Demo Section */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-950 dark:to-neutral-900">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <GradientHeading size="lg" weight="bold" className="mb-3">
              See PDF Notch in Action
            </GradientHeading>
            <p className="text-neutral-600 dark:text-neutral-400 text-lg">
              Hover over the video to see how easy it is to use PDF Notch
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900"
          >
            <HoverVideoPlayer
              videoSrc="/Preview PDF NotchFPS.mp4"
              thumbnailSrc="/thumbnailvid.png"
              enableControls={true}
              muted={true}
              loop={true}
              className="w-full"
              style={{
                width: "100%",
                aspectRatio: "16/9",
              }}
            />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 md:py-32 px-6 md:px-12 relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 md:mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-xs font-medium text-neutral-600 dark:text-neutral-400">Features</span>
            </div>
            <GradientHeading size="xl" weight="black" className="mb-4">
              Powerful PDF Tools
            </GradientHeading>
            <p className="text-neutral-500 dark:text-neutral-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Everything you need to work with PDFs, right from your menu bar.
              Fast, native, and always accessible.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
            {features.map((feature, index) => (
              <FeatureCard key={feature.title} {...feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section
        id="how-it-works"
        className="py-24 px-6 md:px-12 bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-950"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <GradientHeading size="xl" weight="black" className="mb-4">
              Lightning Fast Workflow
            </GradientHeading>
            <p className="text-neutral-500 dark:text-neutral-400 text-lg max-w-2xl mx-auto">
              Process your PDFs in seconds, not minutes. Drag, select, done.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            <WorkflowStep
              number="1"
              title="Drag & Drop"
              description="Simply drag any PDF file to the menu bar icon or notch"
              icon={MousePointerClick}
            />
            <WorkflowStep
              number="2"
              title="Select Tool"
              description="Choose your operation: Split, Merge, Compress, OCR, or Convert"
              icon={Zap}
            />
            <WorkflowStep
              number="3"
              title="Done"
              description="Your processed file is saved instantly. That's it!"
              icon={Download}
            />
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section id="privacy" className="py-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <GradientHeading size="xl" weight="black" className="mb-4">
              Your Privacy, Protected
            </GradientHeading>
            <p className="text-neutral-500 dark:text-neutral-400 text-lg max-w-2xl mx-auto">
              PDF Notch processes everything locally on your Mac. Your documents
              never leave your device.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <TrustBadge
              icon={Shield}
              title="100% Private & Offline"
              description="All processing happens locally using native Apple frameworks (PDFKit, Vision). Your documents never touch any server."
            />
            <TrustBadge
              icon={Cpu}
              title="Native Performance"
              description="Built with SwiftUI for a lightweight, battery-friendly experience that feels right at home on macOS."
            />
            <TrustBadge
              icon={Apple}
              title="Apple Silicon Optimized"
              description="Takes full advantage of Apple Silicon for blazing-fast performance on all Apple Silicon Macs."
            />
            <TrustBadge
              icon={Moon}
              title="Universal Support"
              description="Works seamlessly with Dark Mode and Light Mode. Adapts to your macOS preferences."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 dark:opacity-10">
          <GradientAnimation
            gradients={[
              {
                stops: [
                  { color: "#8b5cf6", position: 0 },
                  { color: "#6366f1", position: 50 },
                  { color: "transparent", position: 100 },
                ],
                centerX: 50,
                centerY: 50,
              },
            ]}
            animationDuration={6}
          />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <GradientHeading size="xl" weight="black" className="mb-6">
            Ready to Simplify Your PDF Workflow?
          </GradientHeading>
          <p className="text-neutral-500 dark:text-neutral-400 text-lg mb-10">
            Download PDF Notch today and experience the fastest way to handle
            PDFs on your Mac.
          </p>
          <TextureButton variant="primary" size="lg">
            <Apple className="h-5 w-5 mr-2" />
            Download on Mac App Store
          </TextureButton>
          <p className="text-sm text-neutral-400 dark:text-neutral-500 mt-4">
            Requires macOS 14.0 or later
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-12 border-t border-neutral-200 dark:border-neutral-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-black dark:bg-white flex items-center justify-center">
                <FileDown className="h-3 w-3 text-white dark:text-black" />
              </div>
              <span className="font-medium text-sm">PDF Notch</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-neutral-500 dark:text-neutral-400">
              <a 
                href="#privacy"
                onClick={(e) => {
                  e.preventDefault()
                  window.location.hash = "privacy"
                }}
                className="hover:text-neutral-900 dark:hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
                Terms of Service
              </a>
              <a 
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  window.location.hash = "contact"
                }}
                className="hover:text-neutral-900 dark:hover:text-white transition-colors"
              >
                Contact
              </a>
            </div>
            <p className="text-sm text-neutral-400 dark:text-neutral-500">
              © 2025 PDF Notch. All rights reserved.
        </p>
      </div>
        </div>
      </footer>
    </div>
  )
}

export default App
