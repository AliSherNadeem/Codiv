"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Zap, MessageSquare, Github, Upload, FolderSync, Eye, Terminal, Wand2 } from "lucide-react"

const features = [
  {
    icon: Wand2,
    title: "Single Prompt Creation",
    description:
      "Create and modify entire applications with just one prompt. Our AI understands your intent and builds accordingly.",
  },
  {
    icon: MessageSquare,
    title: "Discuss and Build Mode",
    description: "Collaborate with AI in real-time. Discuss your ideas and watch them come to life instantly.",
  },
  {
    icon: Github,
    title: "GitHub Integration",
    description:
      "Seamlessly import from and push to GitHub repositories. Keep your code synchronized across platforms.",
  },
  {
    icon: Upload,
    title: "Local Import",
    description: "Import your existing local projects and enhance them with AI-powered features.",
  },
  {
    icon: FolderSync,
    title: "Local Sync",
    description: "Keep your local development environment in perfect sync with your AI-enhanced projects.",
  },
  {
    icon: Eye,
    title: "Live Preview",
    description: "See your changes in real-time with our advanced live preview system. No more refresh cycles.",
  },
  {
    icon: Terminal,
    title: "Integrated Terminal",
    description: "Full terminal access within the editor. Run commands, install packages, and manage your project.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized for speed and performance. Experience coding at the speed of thought.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            Powerful Features for <span className="text-purple-shine">Modern Development</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Everything you need to build, deploy, and maintain applications with the power of AI
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.4,
                delay: index * 0.08,
                ease: "easeOut",
              }}
              viewport={{ once: false, amount: 0.3 }}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
            >
              <Card className="h-[240px] bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 relative overflow-hidden transition-all duration-300 group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/20 via-indigo-500/10 to-black/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />

                <CardContent className="relative z-10 p-6 flex flex-col h-full">
                  <div className="mb-4">
                    <feature.icon className="h-8 w-8 text-primary group-hover:scale-125 transition-transform duration-300" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-card-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
