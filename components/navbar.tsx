"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X, Code2 } from "lucide-react"
import Image from "next/image"
import codivlogo from "@/public/codiv-logo.png"
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
    setIsOpen(false) // Close mobile menu after clicking
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div whileHover={{ scale: 1.05 }}
           onClick={() => scrollToSection("hero")}
           className="flex items-center space-x-2 cursor-pointer">
            <Code2 className="h-8 w-8 text-primary" />
            {/* <span className="text-xl font-bold text-foreground">CoDiv AI</span> */}
            <Image
              src={codivlogo}
              width={100}
              height={100}
              alt="Codiv Logo"
            />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("features")}
              className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              How It Works
            </button>
            {/* <button
              onClick={() => scrollToSection("pricing")}
              className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              Pricing
            </button> */}
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              Testimonials
            </button>
            <Button variant="outline" className="mr-2 bg-transparent cursor-pointer">
              Sign In
            </Button>
            <Button className="bg-gradient-to-r from-indigo-500 to-indigo-700 hover:from-indigo-600 hover:to-indigo-800 text-white border-0 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30 cursor-pointer">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-card border border-border rounded-lg mt-2 p-4"
          >
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("features")}
                className="text-muted-foreground hover:text-foreground transition-colors text-left cursor-pointer"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="text-muted-foreground hover:text-foreground transition-colors text-left cursor-pointer"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="text-muted-foreground hover:text-foreground transition-colors text-left cursor-pointer"
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-muted-foreground hover:text-foreground transition-colors text-left cursor-pointer"
              >
                Testimonials
              </button>
              <div className="flex flex-col space-y-2 pt-4 border-t border-border">
                <Button variant="outline" className="cursor-pointer bg-transparent">
                  Sign In
                </Button>
                <Button className="bg-gradient-to-r from-indigo-500 to-indigo-700 hover:from-indigo-600 hover:to-indigo-800 text-white border-0 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30 cursor-pointer">
                  Get Started
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
