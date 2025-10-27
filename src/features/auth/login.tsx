import React, { useState, useEffect } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form, Input, Label } from "../../components";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const route = useNavigate();

  // ✅ Auto-fill email and password from SignUpForm
  useEffect(() => {
    const savedData = localStorage.getItem("signupData");
    if (savedData) {
      const { email, password } = JSON.parse(savedData);
      setEmail(email);
      setPassword(password);
      localStorage.removeItem("signupData"); // optional
    }
  }, []);

  const handleRouting = (e: React.FormEvent) => {
    e.preventDefault();
    let valid = true;

    // ✅ Email validation (format check)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      setEmailError("Please fill in the field");
      valid = false;
    } else if (!emailRegex.test(email)) {
      setEmailError("Invalid email format");
      valid = false;
    } else {
      setEmailError("");
    }

    // ✅ Password validation (length check)
    if (!password) {
      setPasswordError("Please fill in the field");
      valid = false;
    } else if (password.length < 6) {
      setPasswordError("Minimum 6 characters required");
      valid = false;
    } else {
      setPasswordError("");
    }

    if (valid) {
      route("/home");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sign in:", { email, password });
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Side */}
      <div className="w-full lg:w-1/2 bg-gradient-to-br from-blue-600 via-teal-600 to-cyan-600 flex items-center justify-center p-8 relative overflow-hidden text-white">
        <div className="relative z-10 text-center max-w-md">
          <div className="mb-6 flex justify-center">
            <svg
              className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="100" cy="60" r="20" fill="white" opacity="0.9" />
              <path
                d="M 80 60 Q 70 80 70 100"
                stroke="white"
                strokeWidth="3"
                fill="none"
                opacity="0.9"
              />
              <path
                d="M 120 60 Q 130 80 130 100"
                stroke="white"
                strokeWidth="3"
                fill="none"
                opacity="0.9"
              />
              <rect x="65" y="100" width="10" height="30" fill="white" />
              <rect x="125" y="100" width="10" height="30" fill="white" />
              <circle cx="100" cy="150" r="12" fill="white" opacity="0.8" />
              <path
                d="M 100 162 L 100 180"
                stroke="white"
                strokeWidth="2"
                opacity="0.8"
              />
              <path
                d="M 100 168 L 85 175"
                stroke="white"
                strokeWidth="2"
                opacity="0.8"
              />
              <path
                d="M 100 168 L 115 175"
                stroke="white"
                strokeWidth="2"
                opacity="0.8"
              />
            </svg>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
            Connect With Your Team
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-white/90 px-2 sm:px-4">
            Access your call center dashboard and manage customer interactions
            with ease. Real-time analytics and team collaboration at your
            fingertips.
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-white">
        <div className="w-full max-w-md">
          <div className="mb-8 text-center">
            <div className="text-lg sm:text-xl font-semibold text-teal-700 mb-2">
              CallVerse Global
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-gray-900">
              Welcome Back
            </h1>
            <p className="text-gray-600 text-sm sm:text-base">
              Sign in to your account to continue
            </p>
          </div>

          <Form onSubmit={handleSubmit} className="space-y-5">
            {/* Email Input */}
            <div>
              <Label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder={emailError || "you@example.com"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className={`w-full px-4 py-3 rounded-lg border ${
                  emailError
                    ? "border-red-500 placeholder-red-400"
                    : "border-gray-300"
                } bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600`}
              />
            </div>

            {/* Password Input */}
            <div>
              <Label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder={passwordError || "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={6}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    passwordError
                      ? "border-red-500 placeholder-red-400"
                      : "border-gray-300"
                  } bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600`}
                />
                <Button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </Button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-sm gap-3 sm:gap-0">
              <Label className="flex items-center gap-2">
                <input type="checkbox" className="rounded border-gray-300" />
                Remember me
              </Label>
              <Link to="#" className="text-blue-700 hover:underline">
                Forgot password?
              </Link>
            </div>

            {/* Sign In Button */}
            <Button
              type="submit"
              onClick={handleRouting}
              className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-lg font-semibold transition"
            >
              Sign In
            </Button>
          </Form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">
                Or continue with
              </span>
            </div>
          </div>

          {/* Google Login */}
          <Button
            type="button"
            className="w-full flex items-center justify-center gap-3 border border-gray-300 py-3 rounded-lg hover:bg-gray-50 transition"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
            Google
          </Button>

          <p className="text-center text-sm text-gray-600 mt-6">
            Don’t have an account?{" "}
            <Link to="/SignupForm" className="text-blue-700 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
