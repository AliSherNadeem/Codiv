"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Senior Developer at TechCorp",
    content:
      "Codiv has completely transformed how I approach coding. What used to take hours now takes minutes. The AI understands exactly what I need.",
    rating: 5,
    avatar: "/professional-woman-developer-avatar.png",
  },
  {
    name: "Marcus Rodriguez",
    role: "Freelance Full-Stack Developer",
    content:
      "The GitHub integration is seamless, and the live preview feature is a game-changer. I can iterate faster than ever before.",
    rating: 5,
    avatar: "/professional-man-developer-avatar.png",
  },
  {
    name: "Emily Johnson",
    role: "CTO at StartupXYZ",
    content:
      "Our team productivity has increased by 300% since adopting Codiv. The discuss and build mode is incredibly intuitive.",
    rating: 5,
    avatar: "/professional-woman-cto-avatar.png",
  },
  {
    name: "David Kim",
    role: "Software Engineer at BigTech",
    content:
      "I was skeptical about AI coding tools, but Codiv proved me wrong. It understands context better than any tool I've used.",
    rating: 5,
    avatar: "/professional-man-engineer-avatar.png",
  },
  {
    name: "Lisa Wang",
    role: "Product Manager & Developer",
    content:
      "The single prompt creation feature is mind-blowing. I can prototype ideas instantly and show them to stakeholders.",
    rating: 5,
    avatar: "/professional-woman-product-manager-avatar.png",
  },
  {
    name: "Alex Thompson",
    role: "Indie Developer",
    content:
      "As a solo developer, Codiv is like having a whole team. The integrated terminal and local sync keep everything organized.",
    rating: 5,
    avatar: "/professional-indie-developer-avatar.png",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            Loved by{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Developers
            </span>{" "}
            Worldwide
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            See what developers are saying about their experience with Codiv
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full bg-card border-border hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-primary fill-current" />
                    ))}
                  </div>

                  <p className="text-card-foreground mb-6 leading-relaxed">"{testimonial.content}"</p>

                  <div className="flex items-center">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-card-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
