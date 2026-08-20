"use client"

import React from "react"

export function MeshGradientBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-1/4 -left-1/4 w-[150%] h-[150%] bg-[radial-gradient(circle_at_30%_30%,rgba(6,54,165,0.4),transparent_50%),radial-gradient(circle_at_70%_60%,rgba(9,80,246,0.25),transparent_50%),radial-gradient(circle_at_50%_80%,rgba(255,236,1,0.1),transparent_50%)] animate-pulse duration-[8000ms]" />
      <div className="absolute inset-0 bg-brand-blue-950/60 backdrop-blur-[60px]" />
    </div>
  )
}
