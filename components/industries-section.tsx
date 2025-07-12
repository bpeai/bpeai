import { Badge } from "@/components/ui/badge"
import { Users } from "lucide-react"

const industries = ["Biopharma", "CDMOs", "Life Science Labs", "Engineering Firms"]

export function IndustriesSection() {
  return (
    <section id="industries" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
          <p className="text-lg text-gray-600">
            Specialized solutions for regulated and complex manufacturing environments
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
          {industries.map((industry, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="text-lg py-2 px-6 bg-emerald-100 text-emerald-800 hover:bg-emerald-200 transition-colors cursor-default"
            >
              <Users className="w-4 h-4 mr-2" />
              {industry}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  )
}
