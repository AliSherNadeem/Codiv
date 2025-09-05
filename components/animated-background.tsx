"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const generateStars = () => {
  const stars = []
  for (let i = 0; i < 200; i++) {
    // Use index-based seed for consistent positioning
    const seed = i * 0.618033988749 // Golden ratio for better distribution
    const x = (seed * 100) % 100
    const y = (seed * 137.508) % 100 // Golden angle
    const size = i % 3 === 0 ? 4 : i % 5 === 0 ? 3 : 2
    const delay = (i * 0.02) % 4

    stars.push({
      id: i,
      x,
      y,
      size,
      delay,
      duration: 2 + (i % 4),
      animationDelay: (i * 0.05) % 2,
    })
  }
  return stars
}

export function AnimatedBackground() {
  const [mounted, setMounted] = useState(false)
  const stars = generateStars()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card" />
      </div>
    )
  }

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card" />

      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute bg-primary/60 rounded-full animate-twinkle"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
            animationDelay: `${star.delay}s`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: star.duration,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: star.animationDelay,
          }}
        />
      ))}

      {/* Existing code */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-6 h-6 bg-primary/30 rounded-full"
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          scale: [1, 1.3, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-3/4 right-1/4 w-8 h-8 bg-primary/25 rounded-full"
        animate={{
          y: [0, -25, 0],
          x: [0, -25, 0],
          scale: [1, 1.4, 1],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 3,
        }}
      />

      <motion.div
        className="absolute top-1/2 right-1/3 w-5 h-5 bg-primary/35 rounded-full"
        animate={{
          y: [0, -35, 0],
          x: [0, 30, 0],
          opacity: [0.4, 0.9, 0.4],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </div>
  )
}
