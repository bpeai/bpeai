"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const navItems = [
  { name: "Solutions", href: "#solutions" },
  { name: "Industries", href: "#industries" },
  { name: "Why BPE AI", href: "#why-bpe" },
  { name: "Contact", href: "#contact" },
]

export function Navigation() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  return (
    <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <Image src="/bpeai_logo.png" alt="BPE AI Logo" width={40} height={40} className="object-contain" />
            <span className="text-xl font-bold text-gray-900">BPE AI</span>
          </div>

          <nav className="hidden md:flex space-x-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative px-4 py-2 rounded-lg transition-all duration-200 ease-in-out"
                onMouseEnter={() => setHoveredItem(item.name)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <span
                  className={`relative z-10 transition-colors duration-200 ${
                    hoveredItem === item.name ? "text-white" : "text-gray-600 hover:text-emerald-600"
                  }`}
                >
                  {item.name}
                </span>
                <div
                  className={`absolute inset-0 bg-emerald-600 rounded-lg transition-all duration-200 ease-in-out ${
                    hoveredItem === item.name ? "opacity-100 scale-100" : "opacity-0 scale-95"
                  }`}
                />
              </a>
            ))}
          </nav>

          <Button className="bg-emerald-600 hover:bg-emerald-700">Get Started</Button>
        </div>
      </div>
    </header>
  )
}
