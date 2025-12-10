import { useEffect } from "react"
import { motion } from "motion/react"
import { ArrowLeft, Mail, HelpCircle, MessageCircle } from "lucide-react"
import { GradientHeading } from "@/components/ui/gradient-heading"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface ContactPageProps {
  onBack: () => void
}

const faqs = [
  {
    question: "How do I use PDF Notch?",
    answer: "Simply drag and drop a PDF file onto the PDF Notch icon in your menu bar, or hover over the notch to see available actions. Select your desired operation (Merge, Split, Compress, OCR, or Convert), and the processed file will be saved automatically.",
  },
  {
    question: "What file formats are supported?",
    answer: "PDF Notch works with PDF files. For conversion, you can export PDFs to PNG, JPEG, HEIC, and TIFF formats. All processing happens locally on your Mac.",
  },
  {
    question: "Is my data secure?",
    answer: "Yes! PDF Notch processes all files entirely on your device. Your PDFs never leave your Mac—no cloud uploads, no server communication, and no data collection. Everything is processed locally using Apple's native frameworks.",
  },
  {
    question: "What are the system requirements?",
    answer: "PDF Notch requires macOS 14.0 or later and works best on Apple Silicon Macs (M1, M2, M3, and later). The app is optimized for native performance and battery efficiency.",
  },
  {
    question: "Where are processed files saved?",
    answer: "By default, processed files are saved in the same location as the original file, or you can set a custom output location in Settings. You'll be notified when processing is complete.",
  },
  {
    question: "Can I merge multiple PDFs at once?",
    answer: "Yes! Simply drag multiple PDF files onto the PDF Notch icon, select 'Merge PDFs', and they'll be combined into a single document. You can also choose to insert blank pages between documents.",
  },
  {
    question: "How do I split a PDF?",
    answer: "Drag your PDF onto PDF Notch, select 'Split PDF', and specify the pages you want to extract. You can use simple ranges like '1-3, 5, 8-10' or split the document into individual pages.",
  },
  {
    question: "What is OCR and how does it work?",
    answer: "OCR (Optical Character Recognition) converts scanned PDFs into searchable text. PDF Notch uses Apple's Vision framework to analyze images and extract text, making your scanned documents searchable and editable. This all happens on your device—no internet connection required.",
  },
  {
    question: "How much can I compress a PDF?",
    answer: "Compression results vary depending on the content of your PDF. PDF Notch offers visual quality presets to help you balance file size reduction with clarity. You can preview the results before saving.",
  },
  {
    question: "Does PDF Notch work offline?",
    answer: "Yes! PDF Notch works completely offline. All processing happens locally on your Mac using native Apple frameworks. No internet connection is required for any features.",
  },
  {
    question: "Can I customize the app settings?",
    answer: "Yes! Open Settings from the PDF Toolkit to customize your theme preference, default output location, launch at login setting, and other app preferences. All settings are stored locally on your device.",
  },
  {
    question: "Is PDF Notch free?",
    answer: "PDF Notch is available on the Mac App Store. Please check the App Store listing for current pricing information.",
  },
]

export function ContactPage({ onBack }: ContactPageProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" })
  }, [])

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-xl">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center gap-4">
          <button
            onClick={onBack}
            className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <div>
            <h1 className="text-lg font-semibold">Support & Contact</h1>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              PDF Notch
            </p>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Introduction */}
          <div className="mb-12">
            <GradientHeading size="xl" weight="black" className="mb-4">
              Support & Contact
            </GradientHeading>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              Find answers to common questions or get in touch with us.
            </p>
          </div>

          {/* Help Box */}
          <div className="mb-12 p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100/50 dark:from-blue-950/30 dark:to-blue-900/20 border border-blue-200 dark:border-blue-900">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center flex-shrink-0">
                <HelpCircle className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold mb-2 text-blue-900 dark:text-blue-100">
                  Need Help?
                </h2>
                <p className="text-blue-800 dark:text-blue-200 leading-relaxed">
                  Check out our frequently asked questions below. If you can't find what you're 
                  looking for, feel free to reach out to us directly.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <MessageCircle className="h-6 w-6" />
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="w-full space-y-2">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-neutral-200 dark:border-neutral-800 rounded-xl px-4 bg-neutral-50/50 dark:bg-neutral-900/50"
                >
                  <AccordionTrigger className="text-left font-semibold hover:no-underline py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-neutral-600 dark:text-neutral-400 pb-4 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Contact Section */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-neutral-100 to-neutral-50 dark:from-neutral-900 dark:to-neutral-950 border border-neutral-200 dark:border-neutral-800">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-neutral-600 dark:bg-neutral-500 flex items-center justify-center flex-shrink-0">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold mb-2">Still Have Questions?</h2>
                <p className="text-neutral-600 dark:text-neutral-400 mb-4 leading-relaxed">
                  If you couldn't find the answer you're looking for in our FAQ, we're here to help. 
                  Send us an email and we'll get back to you as soon as possible.
                </p>
                <a
                  href="mailto:josuexdaria@gmai.com?subject=PDF Notch Support"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 font-semibold hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  Contact Support
                </a>
                <p className="mt-3 text-sm text-neutral-500 dark:text-neutral-500">
                  <a 
                    href="mailto:josuexdaria@gmai.com" 
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    josuexdaria@gmai.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800">
            <p className="text-sm text-neutral-600 dark:text-neutral-400 text-center">
              We typically respond within 24-48 hours. For urgent issues, please include "URGENT" 
              in your subject line.
            </p>
          </div>
        </motion.div>
      </main>
    </div>
  )
}

export default ContactPage

