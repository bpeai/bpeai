import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section
      className="relative py-32 bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: "url('/hero_bg.jpg')",
      }}
    >
      {/* Glass overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />

      {/* Glass effect container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Glass card effect */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 md:p-12 shadow-2xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              AI Tools for Equipment Vendor Selection, Design, and <span className="text-emerald-300">Data Sheets</span>
            </h1>
            <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Streamline vendor discovery, accelerate procurement decisions, and ensure GMP compliance with intelligent
              workflows built by engineers, for engineers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg">
                Request Access <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm bg-transparent"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
