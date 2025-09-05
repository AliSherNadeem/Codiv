"use client"

import type React from "react"

import { motion } from "framer-motion"

interface CardBackgroundProps {
  children: React.ReactNode
  className?: string
}

export function CardBackground({ children, className = "" }: CardBackgroundProps) {
  // Generate random stars for each card
  const stars = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 1.5 + 0.5,
    delay: Math.random() * 2,
  }))

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 pointer-events-none">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute w-1 h-1 bg-purple-400/30 rounded-full"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
            }}
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2 + star.delay,
              repeat: Number.POSITIVE_INFINITY,
              delay: star.delay,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent pointer-events-none" />

      {children}
    </div>
  )
}
