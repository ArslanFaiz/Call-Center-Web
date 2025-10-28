
import { useState } from "react"
import { Button } from "../components"
import { ChevronLeft, Phone, Calendar, TrendingUp, Clock } from "lucide-react"
import { Link } from "react-router-dom"

export default function CallBooking() {
  const [selectedDate, setSelectedDate] = useState<string>("")
  const [selectedTime, setSelectedTime] = useState<string>("")
  const [hoursRequested, setHoursRequested] = useState(1)
  const [bookingStep, setBookingStep] = useState(1)

  const timeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
  ]

  const handleBooking = () => {
    if (selectedDate && selectedTime && hoursRequested) {
      alert(`Booking confirmed!\nDate: ${selectedDate}\nTime: ${selectedTime}\nHours: ${hoursRequested}`)
      setBookingStep(1)
      setSelectedDate("")
      setSelectedTime("")
      setHoursRequested(1)
    }
  }

  return (
    <main className="w-full min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-xl border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link to="/home" className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors">
            <ChevronLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
          <h1 className="text-2xl font-bold text-white">Book Your Calls</h1>
          <div className="w-20"></div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left - Booking Form */}
          <div className="lg:col-span-2">
            <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-2xl p-8 space-y-8">
              {/* Step Indicator */}
              <div className="flex items-center justify-between mb-8">
                {[1, 2, 3].map((step) => (
                  <div key={step} className="flex items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${
                        step <= bookingStep ? "bg-blue-600 text-white" : "bg-slate-700 text-slate-400"
                      }`}
                    >
                      {step}
                    </div>
                    {step < 3 && (
                      <div
                        className={`w-12 h-1 mx-2 transition-all ${
                          step < bookingStep ? "bg-blue-600" : "bg-slate-700"
                        }`}
                      ></div>
                    )}
                  </div>
                ))}
              </div>

              {/* Step 1: Select Date */}
              {bookingStep >= 1 && (
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-blue-400" />
                    <h2 className="text-xl font-semibold text-white">Step 1: Choose Your Date</h2>
                  </div>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => {
                      setSelectedDate(e.target.value)
                      if (bookingStep === 1) setBookingStep(2)
                    }}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                  />
                  {selectedDate && (
                    <p className="text-sm text-green-400 flex items-center space-x-2">
                      <span>✓</span>
                      <span>Date selected: {selectedDate}</span>
                    </p>
                  )}
                </div>
              )}

              {/* Step 2: Select Time */}
              {bookingStep >= 2 && (
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-purple-400" />
                    <h2 className="text-xl font-semibold text-white">Step 2: Choose Your Time</h2>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => {
                          setSelectedTime(time)
                          if (bookingStep === 2) setBookingStep(3)
                        }}
                        className={`py-3 px-4 rounded-lg font-medium transition-all ${
                          selectedTime === time
                            ? "bg-blue-600 text-white border-2 border-blue-500"
                            : "bg-slate-700 text-slate-300 border-2 border-slate-600 hover:border-blue-500"
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                  {selectedTime && (
                    <p className="text-sm text-green-400 flex items-center space-x-2">
                      <span>✓</span>
                      <span>Time selected: {selectedTime}</span>
                    </p>
                  )}
                </div>
              )}

              {/* Step 3: Select Hours */}
              {bookingStep >= 3 && (
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="w-5 h-5 text-green-400" />
                    <h2 className="text-xl font-semibold text-white">Step 3: How Many Hours?</h2>
                  </div>
                  <div className="flex items-center space-x-6">
                    <button
                      onClick={() => setHoursRequested(Math.max(1, hoursRequested - 1))}
                      className="w-12 h-12 bg-slate-700 hover:bg-slate-600 rounded-lg text-white font-bold text-xl transition-colors"
                    >
                      −
                    </button>
                    <div className="flex-1">
                      <input
                        type="number"
                        min="1"
                        max="8"
                        value={hoursRequested}
                        onChange={(e) => setHoursRequested(Math.max(1, Number.parseInt(e.target.value) || 1))}
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white text-center text-2xl font-bold focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <button
                      onClick={() => setHoursRequested(Math.min(8, hoursRequested + 1))}
                      className="w-12 h-12 bg-slate-700 hover:bg-slate-600 rounded-lg text-white font-bold text-xl transition-colors"
                    >
                      +
                    </button>
                  </div>
                  <p className="text-sm text-slate-400">You can book between 1 and 8 hours per session</p>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-4 pt-8 border-t border-slate-700">
                {bookingStep > 1 && (
                  <Button onClick={() => setBookingStep(bookingStep - 1)} variant="outline" className="flex-1">
                    Back
                  </Button>
                )}
                {bookingStep < 3 && (
                  <Button
                    onClick={() => setBookingStep(bookingStep + 1)}
                    disabled={(bookingStep === 1 && !selectedDate) || (bookingStep === 2 && !selectedTime)}
                    className="flex-1 bg-blue-600 hover:bg-blue-700"
                  >
                    Next
                  </Button>
                )}
                {bookingStep === 3 && (
                  <Button onClick={handleBooking} className="flex-1 bg-green-600 hover:bg-green-700">
                    Confirm Booking
                  </Button>
                )}
              </div>
            </div>
          </div>

          {/* Right - Summary Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white space-y-6">
              <h3 className="text-2xl font-bold">Booking Summary</h3>

              {/* Summary Items */}
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-sm text-blue-100 mb-1">Selected Date</p>
                  <p className="text-lg font-semibold">{selectedDate || "Not selected"}</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-sm text-blue-100 mb-1">Selected Time</p>
                  <p className="text-lg font-semibold">{selectedTime || "Not selected"}</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-sm text-blue-100 mb-1">Hours Requested</p>
                  <p className="text-lg font-semibold">{hoursRequested} hour(s)</p>
                </div>
              </div>

              {/* Info Box */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-sm mb-1">What Happens Next?</p>
                    <p className="text-sm text-blue-100">
                      Our appointment setters will call and book meetings during your selected time slots.
                    </p>
                  </div>
                </div>
              </div>

              {/* Availability Badge */}
              <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-4">
                <p className="text-sm font-semibold text-green-300">✓ Only 5 slots left today</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
