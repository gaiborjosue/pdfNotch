import { useEffect } from "react"
import { motion } from "motion/react"
import { ArrowLeft, Shield, Lock, HardDrive, FileText, Mail } from "lucide-react"
import { GradientHeading } from "@/components/ui/gradient-heading"

interface PrivacyPolicyProps {
  onBack: () => void
}

export function PrivacyPolicy({ onBack }: PrivacyPolicyProps) {
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
            <h1 className="text-lg font-semibold">Privacy Policy</h1>
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
              Privacy Policy
            </GradientHeading>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              Last updated: January 2025
            </p>
          </div>

          {/* Summary Box */}
          <div className="mb-12 p-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100/50 dark:from-emerald-950/30 dark:to-emerald-900/20 border border-emerald-200 dark:border-emerald-900">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500 flex items-center justify-center flex-shrink-0">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold mb-2 text-emerald-900 dark:text-emerald-100">
                  Your Privacy is Our Priority
                </h2>
                <p className="text-emerald-800 dark:text-emerald-200 leading-relaxed">
                  PDF Notch processes all PDFs entirely on your device. We do not collect, 
                  store, or transmit any of your data. Your files never leave your Mac.
                </p>
              </div>
            </div>
          </div>

          {/* Sections */}
          <div className="space-y-10">
            {/* Data Collection */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center">
                  <Lock className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold">Data Collection</h2>
              </div>
              <div className="pl-14 space-y-3 text-neutral-700 dark:text-neutral-300">
                <p>
                  <strong className="text-neutral-900 dark:text-white">We do not collect any personal data.</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>No analytics or tracking</li>
                  <li>No telemetry data</li>
                  <li>No account creation required</li>
                  <li>No user identification</li>
                </ul>
              </div>
            </section>

            {/* Local Processing */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-purple-500 flex items-center justify-center">
                  <HardDrive className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold">Local Processing</h2>
              </div>
              <div className="pl-14 space-y-3 text-neutral-700 dark:text-neutral-300">
                <p>
                  All PDF processing happens entirely on-device using native Apple frameworks 
                  (PDFKit and Vision). Your files never leave your Mac.
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>No cloud uploads</li>
                  <li>No server communication</li>
                  <li>No external data transmission</li>
                  <li>100% offline processing</li>
                </ul>
              </div>
            </section>

            {/* File Access */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center">
                  <FileText className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold">File Access</h2>
              </div>
              <div className="pl-14 space-y-3 text-neutral-700 dark:text-neutral-300">
                <p>
                  PDF Notch only accesses files you explicitly provide through:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Drag and drop to the menu bar icon</li>
                  <li>File picker dialog</li>
                  <li>No background file scanning</li>
                  <li>No access to files beyond the current processing session</li>
                </ul>
                <p className="mt-4">
                  Files are only accessed temporarily during processing and are not stored 
                  or cached beyond what's necessary for the operation.
                </p>
              </div>
            </section>

            {/* Data Storage */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center">
                  <HardDrive className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold">Data Storage</h2>
              </div>
              <div className="pl-14 space-y-3 text-neutral-700 dark:text-neutral-300">
                <p>
                  Preferences are stored locally on your device using macOS standard storage 
                  (UserDefaults). No external databases are used.
                </p>
                <p className="font-semibold text-neutral-900 dark:text-white mt-4">
                  What's stored locally:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Theme preference (light/dark mode)</li>
                  <li>Default output location preference</li>
                  <li>Launch at login setting</li>
                  <li>Other app-specific preferences</li>
                </ul>
                <p className="mt-4">
                  All preferences are stored on your Mac and never synced or transmitted elsewhere.
                </p>
              </div>
            </section>

            {/* Third-Party Services */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-red-500 flex items-center justify-center">
                  <Shield className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold">Third-Party Services</h2>
              </div>
              <div className="pl-14 space-y-3 text-neutral-700 dark:text-neutral-300">
                <p>
                  PDF Notch does not use any third-party services that collect or transmit data.
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>No advertising SDKs</li>
                  <li>No analytics services</li>
                  <li>No external dependencies that phone home</li>
                  <li>No cloud services</li>
                </ul>
              </div>
            </section>

            {/* Children's Privacy */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-pink-500 flex items-center justify-center">
                  <Shield className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold">Children's Privacy</h2>
              </div>
              <div className="pl-14 space-y-3 text-neutral-700 dark:text-neutral-300">
                <p>
                  PDF Notch does not knowingly collect personal information from children under 
                  the age of 13. Since we do not collect any personal information, this app is 
                  safe for users of all ages.
                </p>
              </div>
            </section>

            {/* Contact */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-neutral-600 dark:bg-neutral-500 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold">Contact Us</h2>
              </div>
              <div className="pl-14 space-y-3 text-neutral-700 dark:text-neutral-300">
                <p>
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <p className="font-semibold text-neutral-900 dark:text-white">
                  <a 
                    href="mailto:josuexdaria@gmai.com" 
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    josuexdaria@gmai.com
                  </a>
                </p>
              </div>
            </section>

            {/* Changes to Policy */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-neutral-600 dark:bg-neutral-500 flex items-center justify-center">
                  <FileText className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold">Changes to This Policy</h2>
              </div>
              <div className="pl-14 space-y-3 text-neutral-700 dark:text-neutral-300">
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of 
                  any changes by posting the new Privacy Policy on this page and updating the 
                  "Last updated" date.
                </p>
              </div>
            </section>
          </div>

          {/* Footer Note */}
          <div className="mt-16 p-6 rounded-2xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
            <p className="text-sm text-neutral-600 dark:text-neutral-400 text-center">
              This privacy policy reflects our commitment to your privacy. Since PDF Notch 
              processes everything locally, your data remains completely private and secure.
            </p>
          </div>
        </motion.div>
      </main>
    </div>
  )
}

export default PrivacyPolicy

