"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Star } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: "$0",
    period: "forever",
    description: "Perfect for getting started with AI-powered coding",
    features: [
      "5 AI prompts per day",
      "Basic code generation",
      "GitHub integration",
      "Live preview",
      "Community support",
    ],
    popular: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "per month",
    description: "For professional developers and small teams",
    features: [
      "Unlimited AI prompts",
      "Advanced code generation",
      "GitHub & local sync",
      "Integrated terminal",
      "Priority support",
      "Custom templates",
      "Team collaboration",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$99",
    period: "per month",
    description: "For large teams and organizations",
    features: [
      "Everything in Pro",
      "Custom AI models",
      "Advanced security",
      "SSO integration",
      "Dedicated support",
      "Custom integrations",
      "Analytics dashboard",
      "SLA guarantee",
    ],
    popular: false,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            Simple,{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Transparent
            </span>{" "}
            Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Choose the perfect plan for your development needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: false, amount: 0.3 }}
              whileHover={{ y: -5 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-30">
                  <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium flex items-center shadow-lg">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              <Card
                className={`min-h-[500px] relative flex flex-col cursor-pointer overflow-hidden ${
                  plan.popular ? "border-primary bg-card/80 shadow-lg shadow-primary/20" : "border-border bg-card/80"
                } backdrop-blur-sm hover:border-primary/50 transition-all duration-300 group`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/20 via-indigo-500/10 to-black/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />

                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-bold text-card-foreground">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-card-foreground">{plan.price}</span>
                    <span className="text-muted-foreground ml-2">{plan.period}</span>
                  </div>
                  <p className="text-muted-foreground mt-4 text-sm">{plan.description}</p>
                </CardHeader>

                <CardContent className="relative z-10 pt-0 flex-1 flex flex-col">
                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <Check className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                        <span className="text-card-foreground text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full mt-auto cursor-pointer ${
                      plan.popular
                        ? "bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white border-0 shadow-lg shadow-violet-500/20 hover:shadow-violet-500/30 transition-all duration-300"
                        : "border-violet-500/50 text-violet-400 hover:bg-violet-500/20 hover:border-violet-400 bg-transparent hover:shadow-lg hover:shadow-violet-500/20 transition-all duration-300"
                    }`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    {plan.name === "Starter" ? "Get Started Free" : "Start Free Trial"}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
