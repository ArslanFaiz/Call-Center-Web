"use client"

import { motion } from "framer-motion"

export default function Portfolio() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-20 px-6 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Portfolio Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-14 mt-4"
        >
          Portfolio
        </motion.h2>

        {/* Left & Right Avatars with Center Text */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-20">
          {/* Left Avatar */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0"
          >
            <div className="relative w-24 h-24 shadow-lg shadow-blue-200 hover:shadow-blue-300 rounded-full overflow-hidden">
              <img
                src="/assets/woman-profile.jpg"
                alt="Team member"
                className="w-full h-full rounded-full object-cover border-4 border-blue-600"
              />
              <div className="absolute bottom-0 right-0 bg-blue-600 rounded-full p-2 shadow-md">
                <svg
                  className="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Center Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center"
          >
            <div className="w-full h-1 bg-gradient-to-r from-green-400 via-blue-500 to-blue-600 rounded-full mb-8 shadow-sm"></div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Proven Track Record of Success
            </h3>
            <p className="text-gray-600 text-lg">
              From inbound customer support to outbound sales campaigns, our
              portfolio highlights real-world success stories. We’ve partnered
              with global clients to deliver measurable growth, increased
              efficiency, and enhanced customer satisfaction through innovative
              call center solutions.
            </p>
          </motion.div>

          {/* Right Avatar */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0"
          >
            <div className="relative w-24 h-24 shadow-lg shadow-blue-200 hover:shadow-blue-300 rounded-full overflow-hidden">
              <img
                src="/assets/man-profile.jpg"
                alt="Team member"
                className="w-full h-full rounded-full object-cover border-4 border-blue-600"
              />
              <div className="absolute bottom-0 right-0 bg-blue-600 rounded-full p-2 shadow-md">
                <svg
                  className="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
