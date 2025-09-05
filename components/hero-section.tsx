"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { AnimatedBackground } from "@/components/animated-background"

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AnimatedBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl  mt-16 sm:mt-0 font-bold text-balance leading-tight"
          >
            Transform Your <span className="text-purple-shine">Coding Experience</span> with AI
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-2xl text-muted-foreground max-w-3xl mx-auto text-pretty"
          >
            Create, modify, and build applications with single prompts. Codiv brings the future of coding to your
            fingertips with advanced AI capabilities.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500/20 to-indigo-600/20 border border-indigo-500/40 rounded-full text-sm font-medium text-indigo-200 backdrop-blur-sm shadow-lg shadow-indigo-500/20">
              <Sparkles className="w-4 h-4 mr-2 animate-pulse text-white" />
              AI-Powered Code Editor
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              onClick={() => window.open("https://app.codiv.dev/", "_blank")}
              className="group bg-gradient-to-r from-indigo-500 to-indigo-700 hover:from-indigo-600 hover:to-indigo-800 text-white border-0 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30 transition-all duration-300 cursor-pointer"
            >
              Get Started Free
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            {/* <Button
              size="lg"
              variant="outline"
              className="border-indigo-500/50 text-indigo-400 hover:bg-indigo-500/20 hover:border-indigo-400 bg-transparent hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-300 cursor-pointer"
            >
              Watch Demo
            </Button> */}
          </motion.div>

          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="pt-8"
          >
            <img
              src="/modern-dark-code-editor-interface-with-ai-features.png"
              alt="Codiv Interface"
              className="mx-auto rounded-lg shadow-2xl border border-border max-w-lg lg:max-w-2xl h-auto"
            />
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  )
}
