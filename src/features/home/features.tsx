"use client"

import { motion } from "framer-motion"
import { features } from "../../constants"
import { Card } from "../../components"
export default function Features() {
  return (
    <section className="relative py-24 px-6 lg:px-10 bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[450px] h-[450px] bg-teal-100/40 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-blue-600 font-semibold text-lg uppercase tracking-wider mb-3">
            Our Features
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
            Gain Insights From Every Interaction
          </h2>
          <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
            Understand your customer performance through data-driven booking analytics, team QA reports, and live call insights.
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative mb-20"
        >
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="/assets/customer-service-representatives-with-headsets-wor.jpg"
              alt="Customer service team working"
              className="w-full h-[480px] object-cover"
            />
          </div>
          <div className="absolute -top-6 -right-6 w-36 h-36 bg-gradient-to-br from-lime-400 to-blue-500 rounded-3xl -z-10 blur-lg opacity-70"></div>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-10"
        >
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-lime-400 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-md group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h4 className="text-2xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
