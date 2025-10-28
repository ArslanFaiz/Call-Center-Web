import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import Layout from './components/layout/layout.tsx'
import About from './pages/about.tsx'
import Contact from './pages/contact.tsx'
import BookingServices from './pages/sevices/bookingServieces.tsx'
import RecruitingServices from './pages/sevices/recruitingServices.tsx'
import OutSourcing from './pages/sevices/outSourcing.tsx'
import { Login, SignupForm } from './features/index.ts'
import CallBooking from './pages/callBooking.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/SignupForm" element={<SignupForm />} />
          <Route path="/home" element={<App />} />
          <Route path="/about" element={<About />} />
          <Route path="/services/booking-services" element={<BookingServices />} />
          <Route path="/services/recruiting-services" element={<RecruitingServices />} />
          <Route path="/services/outsourcing" element={<OutSourcing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/CallBooking" element={<CallBooking />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </StrictMode>,
)
