"use client"
import { motion } from "framer-motion"
import { feature } from "../../constants"
export default function WhyChooseUs() {
   return (
    <section className="relative overflow-hidden min-h-screen flex items-center px-6 py-24 bg-[#f9fafc]">
      {/* Background Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ x: [0, 100, -100, 0], y: [0, -50, 50, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-40 w-[400px] h-[400px] bg-lime-400/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, -100, 100, 0], y: [0, 60, -60, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-40 w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-[140px]"
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-10"
        >
          <div>
            <p className="text-lime-500 font-semibold text-sm tracking-wider mb-4 uppercase">Why Choose Us</p>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              We Are <span className="text-blue-600">Focused</span> On <br />
              Your Success!
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              We focus on Dialing & Bookings, so you can focus on Sales. Let us handle your customer appointments with
              speed, accuracy, and professionalism — while you grow your business.
            </p>
          </div>

          {/* Features List */}
          <div className="space-y-5">
            {feature.map((feat, index) => {
              const Icon = feat.icon
              return (
                <motion.div
                  key={index}
                  whileHover={{
                    scale: 1.02,
                    y: -4,
                    boxShadow: "0 8px 25px rgba(164, 255, 120, 0.3)",
                    transition: { duration: 0.2 },
                  }}
                  className={`group flex items-center gap-4 p-6 rounded-xl cursor-pointer transition-all border
                    ${
                      feat.highlight
                        ? "bg-gradient-to-r from-lime-400/90 to-lime-300/80 text-black border-lime-300"
                        : "bg-white/80 text-gray-800 border-gray-100 hover:bg-gradient-to-r hover:from-lime-400/90 hover:to-lime-300/80 hover:text-black hover:border-lime-300"
                    }`}
                >
                  <div
                    className={`p-3 rounded-full shadow-md transition-all duration-300
                      ${
                        feat.highlight
                          ? "bg-blue-600 text-white"
                          : "bg-lime-400/80 text-blue-700 group-hover:bg-blue-600 group-hover:text-white"
                      }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="font-semibold text-lg">{feat.title}</span>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative flex justify-center lg:justify-end"
        >
          <motion.div
            whileHover={{
              scale: 1.03,
              transition: { duration: 0.3 },
            }}
            className="relative w-full max-w-md"
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-lime-400 to-cyan-400 rounded-3xl blur-3xl opacity-25"></div>

            {/* Main Image */}
            <img
              src="/assets/professional-woman-with-headset-customer-service.jpg"
              alt="Customer Service Representative"
              className="relative w-full h-auto rounded-3xl shadow-2xl object-cover"
            />

            {/* Floating Tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-white px-6 py-3 rounded-xl shadow-lg"
            >
              <p className="text-gray-800 font-semibold flex items-center gap-2">
                💬 Trusted by <span className="text-blue-600">100+ Businesses</span>
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
