"use client"

import { motion } from "framer-motion"
import { centerCards, leftCards } from "../../constants"
import { ArrowRight } from "lucide-react"

export default function Services() {
 return (
    <section className="relative overflow-hidden min-h-screen flex items-center px-6 py-24 bg-[#0a0f1f] text-white">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1f] via-[#111a33] to-[#1b294f]" />
        <motion.div
          animate={{ x: [0, 100, -100, 0], y: [0, -80, 80, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-40 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, -80, 80, 0], y: [0, 60, -60, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-lime-400/15 rounded-full blur-[140px]"
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-3 gap-10 items-center">
        {/* Left Cards */}
        <div className="space-y-8">
          {leftCards.map((card, i) => {
            const Icon = card.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                  boxShadow: "0 6px 25px rgba(164, 255, 120, 0.3)",
                  transition: { duration: 0.15, ease: "easeOut" }, // ⚡ faster hover response
                }}
                className={`relative p-8 rounded-2xl backdrop-blur-md border transition-all duration-150 ease-out cursor-pointer
                  ${
                    card.highlight
                      ? "bg-gradient-to-r from-lime-400/90 to-lime-300/80 text-gray-900 border-lime-200"
                      : "bg-white/10 border-white/20 text-white"
                  }`}
              >
                <div className="flex items-start gap-5">
                  <div
                    className={`p-4 rounded-xl shadow-md ${
                      card.highlight ? "bg-blue-700 text-white" : "bg-lime-400/80 text-blue-800"
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                    <p className="text-white/80">{card.description}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Center Cards */}
        <div className="space-y-8">
          {centerCards.map((card, i) => {
            const Icon = card.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                  boxShadow: "0 6px 25px rgba(80, 200, 255, 0.3)",
                  transition: { duration: 0.15, ease: "easeOut" },
                }}
                className="relative p-8 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md text-white transition-all duration-150 ease-out cursor-pointer"
              >
                <div className="flex items-start gap-5">
                  <div className="p-4 bg-lime-400/80 rounded-xl shadow-md">
                    <Icon className="w-6 h-6 text-blue-800" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                    <p className="text-white/80">{card.description}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Right Column - Text */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8 text-center lg:text-left"
        >
          <p className="text-lime-400 font-semibold tracking-widest text-sm uppercase">Our Services</p>
          <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
            We Only Provide <br />
            <span className="text-lime-400">Individual Bookers</span>
          </h2>
          <p className="text-white/80 text-lg leading-relaxed">
            Bookers and Appointment Setters for Insurance Sales Agents.
          </p>

          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(164, 255, 120, 0.3)",
              transition: { duration: 0.15, ease: "easeOut" },
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-lime-400 text-gray-900 font-semibold px-8 py-4 rounded-xl shadow-lg hover:bg-lime-300 transition duration-150"
          >
            Explore Services
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
