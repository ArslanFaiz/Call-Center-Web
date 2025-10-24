"use client"

import { useState } from "react"
import { NavLink } from "react-router-dom"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "../ui/button"
import { navItems } from "../../constants"

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false) // Dropdown state
  const activeClass = "text-blue-600"

  // Filter out Blog & Portfolio
  const filteredNavItems = navItems.filter(
    (item) => item.name.toLowerCase() !== "blog" && item.name.toLowerCase() !== "portfolio"
  )

  // Dropdown items for Services
  const servicesOptions = ["Booking Services", "Recruiting Services", "Outsourcing"]

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
<nav className="hidden md:flex items-center gap-10 font-sans tracking-wide relative">
  {filteredNavItems.map((item, i) =>
    item.name.toLowerCase() === "services" ? (
      <div
        key={i}
        className="relative group"
        onMouseEnter={() => setServicesOpen(true)}
        onMouseLeave={() => setServicesOpen(false)}
      >
        <NavLink
          to={item.path ?? "#"}
          className="relative font-semibold transition-colors duration-300 text-gray-800 hover:text-blue-600 flex items-center gap-1"
        >
          {item.name} <ChevronDown className="w-4 h-4" />
        </NavLink>

        {/* Dropdown Menu */}
        <div
          className={`absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-2 transition-all duration-300 z-50
          ${servicesOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        >
          {servicesOptions.map((option, idx) => (
            <NavLink
              key={idx}
              to={`/services/${option.toLowerCase().replace(/\s+/g, "-")}`}
              className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
              onClick={() => setServicesOpen(false)} // 👈 closes dropdown on click
            >
              {option}
            </NavLink>
          ))}
        </div>
      </div>
    ) : (
      <NavLink
        key={i}
        to={item.path ?? "#"}
        className={({ isActive }) =>
          `relative font-semibold transition-colors duration-300 ${
            isActive ? activeClass : "text-gray-800"
          } hover:text-blue-600`
        }
      >
        {item.name}
      </NavLink>
    )
  )}
</nav>


        {/* Contact Button */}
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
          {filteredNavItems.map((item, i) =>
            item.name.toLowerCase() === "services" ? (
              <div key={i} className="flex flex-col">
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center justify-between font-medium text-gray-800 hover:text-blue-600 transition-colors"
                >
                  {item.name} <ChevronDown className="w-4 h-4" />
                </button>
                {servicesOpen && (
                  <div className="flex flex-col ml-4 mt-2 gap-2">
                    {servicesOptions.map((option, idx) => (
                      <NavLink
                        key={idx}
                        to={`/services/${option.toLowerCase().replace(/\s+/g, "-")}`}
                        onClick={() => setMobileOpen(false)}
                        className="text-gray-700 hover:text-blue-600 transition-colors"
                      >
                        {option}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                key={i}
                to={item.path ?? "#"}
                className={({ isActive }) =>
                  `font-medium transition ${isActive ? activeClass : "text-gray-800"} hover:text-blue-600`
                }
                onClick={() => setMobileOpen(false)}
              >
                {item.name}
              </NavLink>
            )
          )}

          {/* Mobile Contact Button */}
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
