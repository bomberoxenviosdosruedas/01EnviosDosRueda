"use client"

import React from "react"

export default function Waitlist() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-brand-blue-950">
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(6,54,165,0.5),transparent_60%),radial-gradient(circle_at_80%_80%,rgba(255,236,1,0.1),transparent_50%)]" />
      </div>

      <div className="relative z-10">
        {/* Main content */}
        <main className="flex items-center justify-center min-h-screen p-4 my-0">
          <div className="w-full max-w-2xl mx-auto text-center space-y-8">
            {/* Hero section */}
            <div className="text-4xl md:text-6xl font-bold tracking-tight text-white drop-shadow-2xl font-sans">
              <h1 className="text-4xl md:text-6xl tracking-tight text-white drop-shadow-2xl py-[23px] font-semibold">
                We are launching SickUI soon!
                <span className="text-4xl md:text-6xl font-bold tracking-tight text-white drop-shadow-2xl font-sans">
                  {" "}
                </span>
              </h1>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
