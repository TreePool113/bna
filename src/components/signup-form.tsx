"use client";
import React from "react"

interface SignupFormProps {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  phone: string;
  setPhone: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  onSubmit: (e: React.FormEvent) => void;
}

export default function SignupForm({
  name, setName,
  email, setEmail,
  phone, setPhone,
  password, setPassword,
  onSubmit
}: SignupFormProps) {
  return (
    <>
      {/*
        Trong layout bạn cần có:
        <html class="h-full bg-gray-900">
        <body class="h-full">
      */}
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="images/logo.png"
            className="mx-auto h-50 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">
            Create your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={onSubmit} action="#" method="POST" className="space-y-6">
            {/* Full name */}
            <div>
              <label htmlFor="name" className="block text-sm/6 font-medium text-gray-100">
                Full name
              </label>
              <div className="mt-2">
                <input
                value={name} 
                onChange={(e) => setName(e.target.value)}
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white 
                             outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 
                             focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm/6 font-medium text-gray-100">
                Phone number
              </label>
              <div className="mt-2">
                <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white 
                             outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 
                             focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-100">
                Email address
              </label>
              <div className="mt-2">
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white 
                             outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 
                             focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm/6 font-medium text-gray-100">
                Password
              </label>
              <div className="mt-2">
                <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="new-password"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white 
                             outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 
                             focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm/6 font-medium text-gray-100">
                Confirm password
              </label>
              <div className="mt-2">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  required
                  autoComplete="new-password"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white 
                             outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 
                             focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
            </div>

            {/* Submit */}
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 
                           text-sm/6 font-semibold text-white hover:bg-indigo-400 
                           focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Sign up
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-400">
            Already have an account?{' '}
            <a href="/login" className="font-semibold text-indigo-400 hover:text-indigo-300">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </>
  )
}
