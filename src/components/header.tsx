"use client"

import { useState } from "react"
import { ChevronDown, Menu, X } from "lucide-react"
import { Button } from "./ui/button"

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/80 border-b border-gray-200 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-orange-400 rounded-xl flex items-center justify-center shadow-md">
            <span className="text-white font-extrabold text-lg tracking-wide">M</span>
          </div>
          <span className="font-bold text-2xl bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent tracking-tight">
            MAAMAAR
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {["HOME", "SERVICES", "ABOUT", "PORTFOLIO", "BLOG"].map((item, i) => (
            <a
              key={i}
              href="#"
              className="relative text-gray-800 font-semibold hover:text-pink-600 transition"
            >
              {item}
              <span className="absolute left-0 bottom-[-3px] w-0 h-[2px] bg-pink-500 transition-all group-hover:w-full hover:w-full"></span>
            </a>
          ))}
          <div className="flex items-center gap-1 cursor-pointer group">
            <span className="text-gray-800 font-semibold group-hover:text-pink-600 transition">
              MORE
            </span>
            <ChevronDown className="w-4 h-4 text-gray-800 group-hover:text-pink-600 transition" />
          </div>
        </nav>

        {/* Contact Button */}
        <Button className="hidden sm:inline-flex bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold px-6 py-2 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-transform">
          CONTACT
        </Button>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-6 py-4 flex flex-col gap-4 shadow-md">
          <a href="#" className="text-gray-800 font-medium hover:text-pink-600 transition">
            HOME
          </a>
          <a href="#" className="text-gray-800 font-medium hover:text-pink-600 transition">
            SERVICES
          </a>
          <a href="#" className="text-gray-800 font-medium hover:text-pink-600 transition">
            ABOUT
          </a>
          <a href="#" className="text-gray-800 font-medium hover:text-pink-600 transition">
            PORTFOLIO
          </a>
          <Button className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-transform">
            CONTACT
          </Button>
        </div>
      )}
    </header>
  )
}
