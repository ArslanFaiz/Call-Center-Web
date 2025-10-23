"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Button } from "../../components/ui/button"
import { NavLink } from "react-router-dom"

export default function Hero() {
  const [showInfo, setShowInfo] = useState(false)

  return (
    <section className="relative py-28 px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-indigo-100/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.15),transparent_60%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        {/* Tagline */}
        <motion.p
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-blue-600 font-semibold text-xl mb-3 tracking-wide uppercase"
        >
          Welcome to CallVerse Global
        </motion.p>

        {/* Heading */}
        <motion.h1
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-8 leading-tight"
        >
          <span className="bg-gradient-to-r from-blue-600 via-teal-500 to-lime-400 bg-clip-text text-transparent">
            We Handle Bookings, You Focus on Sales!
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          className="text-gray-600 text-lg sm:text-xl leading-relaxed mb-10 max-w-3xl mx-auto"
        >
          Let our trained bookers manage your calls, schedules, and appointments with precision.
          Boost your productivity while we handle the details — saving you time and money.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <NavLink to={"/contact"}>
            <Button className="bg-gradient-to-r cursor-pointer from-blue-600 to-teal-400 text-white font-semibold px-8 py-4 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-transform">
              Get Started
            </Button>
          </NavLink>

          <Button
            variant="outline"
            onClick={() => setShowInfo(!showInfo)}
            className="border-2 border-blue-500 cursor-pointer text-blue-600 font-semibold px-8 py-4 rounded-full hover:bg-blue-100 hover:text-blue-700 hover:border-blue-600 transition-all duration-300"
          >
            Learn More
          </Button>
        </motion.div>

        {/* Instruction Box */}
        {showInfo && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-10 max-w-2xl mx-auto bg-white/80 backdrop-blur-sm border border-blue-100 shadow-md rounded-2xl p-6 text-gray-700"
          >
            <h3 className="text-xl font-semibold text-blue-600 mb-3">
              What We Offer at CallVerse Global
            </h3>
            <ul className="text-left list-disc list-inside space-y-2">
              <li>📞 24/7 call handling by professional agents.</li>
              <li>📅 Appointment scheduling and follow-ups.</li>
              <li>💬 Real-time updates and CRM integration.</li>
              <li>📈 Performance reports and analytics insights.</li>
              <li>🤝 Dedicated team for lead conversion and client support.</li>
            </ul>
          </motion.div>
        )}
      </div>
    </section>
  )
}
