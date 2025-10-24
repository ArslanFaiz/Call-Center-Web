"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { features } from "../../constants"

export default function Features() {
  // Track which feature is expanded
const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const toggleExpand = (index: number) => {
  setExpandedIndex(expandedIndex === index ? null : index)
}


  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-100 py-28 px-6 lg:px-10">
      {/* Glowing Background Blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-10%] left-[10%] w-[400px] h-[400px] bg-blue-200/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[10%] w-[500px] h-[500px] bg-lime-300/30 rounded-full blur-3xl animate-pulse delay-200"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-28"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Powerful Features, Seamlessly Integrated
          </h2>
          <div className="mx-auto h-[4px] w-24 bg-gradient-to-r from-blue-500 to-lime-400 rounded-full mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Each tool is designed to enhance your workflow, empower your team,
            and give you full control through real-time insights.
          </p>
        </motion.div>

        {/* Alternating Feature Blocks */}
        <div className="space-y-32">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col lg:flex-row ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              } items-center gap-12`}
            >
              {/* Image Section */}
              <div className="w-full lg:w-1/2 relative group">
                <div className="rounded-3xl overflow-hidden shadow-xl relative">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-[420px] object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent"></div>
                </div>
                <div className="absolute -top-6 -left-6 w-36 h-36 bg-gradient-to-br from-blue-500 to-lime-400 rounded-full blur-3xl opacity-50 group-hover:opacity-80 transition-all duration-500"></div>
              </div>

              {/* Text Section */}
              <div className="w-full lg:w-1/2">
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-lime-400 text-white rounded-2xl text-3xl shadow-lg mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {feature.description}
                  </p>
                </div>

                {/* Learn More Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200, damping: 12 }}
                  onClick={() => toggleExpand(index)}
                  className="mt-6 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-lime-400 text-white font-medium shadow-md hover:shadow-lg transition-all"
                >
                  {expandedIndex === index ? "Hide Details ↑" : "Learn More →"}
                </motion.button>

                {/* Expanded Info Section */}
                {expandedIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                    className="mt-6 bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl p-6 shadow-lg text-gray-700"
                  >
                    <h4 className="font-semibold text-xl text-blue-600 mb-2">
                      How It Works:
                    </h4>
                    <ul className="list-disc ml-6 space-y-2 text-gray-600">
                      {feature.instructions?.map((step, i) => (
                        <li key={i}>{step}</li>
                      )) || (
                        <li>
                          Coming soon! Detailed instructions for this feature
                          will be added shortly.
                        </li>
                      )}
                    </ul>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
