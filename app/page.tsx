'use client'

import { useEffect } from "react"
import Head from "next/head"
import Link from "next/link"
import { Shield, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  // Smooth scroll function defined inside useEffect
  useEffect(() => {
    const smoothScroll = (id: string) => {
      const target = document.getElementById(id)
      if (target) {
        target.scrollIntoView({ behavior: "smooth" })
      }
    }

    // Add event listeners for buttons
    const featuresBtn = document.getElementById("btn-features")
    const howItWorksBtn = document.getElementById("btn-how-it-works")
    const aboutBtn = document.getElementById("btn-about")

    featuresBtn?.addEventListener("click", () => smoothScroll("features"))
    howItWorksBtn?.addEventListener("click", () => smoothScroll("how-it-works"))
    aboutBtn?.addEventListener("click", () => smoothScroll("about"))

    // Cleanup
    return () => {
      featuresBtn?.removeEventListener("click", () => smoothScroll("features"))
      howItWorksBtn?.removeEventListener("click", () => smoothScroll("how-it-works"))
      aboutBtn?.removeEventListener("click", () => smoothScroll("about"))
    }
  }, [])

  return (
    <>
      <Head>
        <title>PhishGuard – AI Phishing Detection</title>
        <meta name="description" content="AI-powered phishing detection with 96.97% accuracy. Check URLs instantly and stay safe online." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="PhishGuard" />
        <meta property="og:description" content="Stop phishing attacks before they start with our AI-powered detection tool." />
        <meta property="og:image" content="/og-image.png" />
      </Head>

      <div className="flex min-h-screen flex-col bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60 shadow-sm">
          <div className="container flex h-16 items-center">
            <div className="mr-4 flex">
              <Link href="/" className="flex items-center space-x-2">
                <div className="relative">
                  <Shield className="h-8 w-8 text-emerald-500" />
                  <div className="absolute -top-1 -right-1 h-3 w-3 bg-orange-400 rounded-full animate-pulse"></div>
                </div>
                <span className="font-bold text-xl bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                  PhishGuard
                </span>
              </Link>
            </div>
            <nav className="flex flex-1 items-center justify-end space-x-6">
              <button id="btn-features" className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors">Features</button>
              <button id="btn-how-it-works" className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors">How It Works</button>
              <button id="btn-about" className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors">About</button>
              <Button className="bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white shadow-lg">
                <Link href="https://github.com/MEENUPARAMES" className="flex items-center gap-1">
                  <span>GitHub</span>
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </Button>
            </nav>
          </div>
        </header>

        <main className="flex-1">
          {/* Content goes here, ensure your sections have IDs: features, how-it-works, about */}
        </main>

        <footer className="w-full border-t bg-white py-8">
          <div className="container flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8">
            <p className="text-center text-sm text-gray-600 md:text-left">
              © 2025 PhishGuard. Protecting the web, one URL at a time.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-sm text-gray-500 hover:text-emerald-600 transition-colors">Terms of Service</Link>
              <Link href="#" className="text-sm text-gray-500 hover:text-emerald-600 transition-colors">Privacy Policy</Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

