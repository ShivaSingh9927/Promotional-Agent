"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="bg-gradient-to-b from-[#b9a6fc] to-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Explain what you buit. 
            <span className="block" style={{ color: '#7c5cfd' }}>Convert who you built it for.</span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Creaco turns your product docs, specs, and updates into launch-ready content for users, buyers, and investors.
          </p>

          <Button
            size="lg"
            className="bg-[#7c5cfd] hover:bg-[#7c5cfd] text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
            onClick={() => document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" })}
          >
            Get started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
