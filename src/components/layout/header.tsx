"use client"

import { useState } from "react"
import { NavLink } from "react-router-dom"
import { ChevronDown, Menu, X } from "lucide-react"
import { Button } from "../ui/button"
import { navItems } from "../../constants"

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const activeClass = "text-blue-600"

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/80 border-b border-gray-200 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center shadow-md">
            <span className="text-white font-extrabold text-lg tracking-wide">CG</span>
          </div>
          <span className="font-bold text-2xl bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent tracking-tight">
            CallVerse Global
          </span>
        </div>

        {/* Desktop Navigation */}
<nav className="hidden md:flex items-center gap-10">
  {navItems.map((item, i) => (
    <NavLink
      key={i}
      to={item.path}
      className={({ isActive }) =>
        `group relative font-semibold transition-colors duration-100 ${
          isActive ? "text-blue-600" : "text-gray-800"
        } hover:text-blue-600`
      }
    >
      {item.name}
      <span
        className={`
          absolute left-0 bottom-[-3px] h-[2px] bg-blue-600 transition-all duration-300
          ${"group-hover:w-full"} 
          ${"w-0"}
          ${"rounded-full"}
          ${"opacity-0 group-hover:opacity-100"}
          ${"transition-[width,opacity]"}
          ${"ease-in-out"}
          ${
            // keep underline when active
            "group-[.text-blue-600]:w-full group-[.text-blue-600]:opacity-100"
          }
        `}
      ></span>
    </NavLink>
  ))}
  <div className="flex items-center gap-1 cursor-pointer group">
    <span className="text-gray-800 font-semibold group-hover:text-blue-600 transition">
      MORE
    </span>
    <ChevronDown className="w-4 h-4 text-gray-800 group-hover:text-blue-600 transition" />
  </div>
</nav>


        {/* Contact Button (Linked) */}
        <NavLink to="/contact">
          <Button className="hidden sm:inline-flex cursor-pointer bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold px-6 py-2 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-transform">
            CONTACT
          </Button>
        </NavLink>

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
          {navItems.map((item, i) => (
            <NavLink
              key={i}
              to={item.path}
              className={({ isActive }) =>
                `font-medium transition ${isActive ? activeClass : "text-gray-800"} hover:text-blue-600`
              }
              onClick={() => setMobileOpen(false)}
            >
              {item.name}
            </NavLink>
          ))}

          {/* Mobile Contact Button (Linked) */}
          <NavLink to="/contact" onClick={() => setMobileOpen(false)}>
            <Button className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-transform">
              CONTACT
            </Button>
          </NavLink>
        </div>
      )}
    </header>
  )
}
