import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, FileCheck, Shield } from "lucide-react"

const solutions = [
  {
    icon: Search,
    title: "Vendor Discovery & Intelligence",
    description:
      "Identify suppliers for complex systems through structured, AI-assisted search. Our intelligent platform connects you with the right vendors for your specific bioprocess engineering needs.",
  },
  {
    icon: FileCheck,
    title: "Design Support for Procurement",
    description:
      "Validate concepts and generate data to accelerate decision-making and reduce project risk. Includes expertise in bioprocess engineering and GMP compliance.",
  },
  {
    icon: Shield,
    title: "GMP-Ready Workflows",
    description:
      "Engineered for traceability and compliance in regulated environments. Ensure your processes meet the highest standards for pharmaceutical manufacturing.",
  },
]

export function SolutionsSection() {
  return (
    <section id="solutions" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Solutions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive AI-driven tools designed to optimize your procurement and engineering workflows
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon
            return (
              <Card
                key={index}
                className="border-2 hover:border-emerald-200 transition-all duration-300 hover:shadow-lg"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-emerald-600" />
                  </div>
                  <CardTitle className="text-xl">{solution.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{solution.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
