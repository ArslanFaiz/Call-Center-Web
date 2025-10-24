"use client"
import { motion } from "framer-motion"
import { feature } from "../../constants"

export default function WhyChooseUs() {
  return (
    <section className="relative bg-gradient-to-b from-white via-blue-50 to-lime-50 overflow-hidden py-28 px-6 lg:px-12">
      {/* === Background Glow Elements === */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{ x: [0, 80, -80, 0], y: [0, -40, 40, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-[10%] w-[500px] h-[500px] bg-blue-300/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, -80, 80, 0], y: [0, 60, -60, 0] }}
          transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-[10%] w-[600px] h-[600px] bg-lime-300/25 rounded-full blur-[150px]"
        />
      </div>

      {/* === Header Section === */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-24"
      >
        <p className="text-blue-600 font-semibold text-lg uppercase tracking-wider mb-3">
          Why Choose Us
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
          We’re <span className="bg-gradient-to-r from-blue-600 to-lime-500 bg-clip-text text-transparent">
            Committed
          </span>{" "}
          to Your Success
        </h1>
        <div className="h-[4px] w-24 bg-gradient-to-r from-blue-500 to-lime-400 rounded-full mx-auto my-6"></div>
        <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
          From QA monitoring to professional booking services, our expert team ensures efficiency, accuracy, and real-time performance for your business.
        </p>
      </motion.div>

      {/* === Content Section === */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* ==== Left Side (Image + Floating Elements) ==== */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >
          {/* Main Image */}
          <div className="relative w-full max-w-md">
            <motion.img
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.5 }}
              src="/assets/professional-woman-with-headset-customer-service.jpg"
              alt="Customer Service Team"
              className="w-full h-auto rounded-[2rem] shadow-2xl object-cover border border-white/70"
            />

            {/* Glow ring */}
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-blue-400/30 to-lime-400/30 blur-3xl -z-10"></div>

            {/* Floating Badge 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -top-8 -left-8 bg-white/90 backdrop-blur-md border border-gray-200 shadow-lg rounded-xl px-4 py-2 flex items-center gap-2"
            >
              🏆 <span className="font-semibold text-gray-800">Award-Winning Service</span>
            </motion.div>

            {/* Floating Badge 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="absolute bottom-6 -right-10 bg-gradient-to-r from-blue-500 to-lime-400 text-white font-semibold px-5 py-3 rounded-full shadow-lg"
            >
              Trusted by 100+ Businesses
            </motion.div>
          </div>
        </motion.div>

        {/* ==== Right Side (Feature Cards) ==== */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {feature.map((feat, index) => {
            const Icon = feat.icon
            return (
              <motion.div
                key={index}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  boxShadow: "0 15px 40px rgba(56,189,248,0.2)",
                  transition: { duration: 0.3 },
                }}
                className={`relative p-6 rounded-2xl border transition-all duration-300 ${
                  feat.highlight
                    ? "bg-gradient-to-br from-blue-600 to-lime-400 text-white border-none"
                    : "bg-white/80 backdrop-blur-md text-gray-800 border-gray-200 hover:bg-gradient-to-br hover:from-blue-50 hover:to-lime-50"
                }`}
              >
                <div
                  className={`mb-4 w-12 h-12 flex items-center justify-center rounded-xl shadow-md ${
                    feat.highlight
                      ? "bg-white/20 text-white"
                      : "bg-blue-100 text-blue-600"
                  }`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-xl mb-2">{feat.title}</h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  {feat.description || "We ensure efficiency and high-quality outcomes across every booking."}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
