import { Users, Brain, Workflow } from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Built by Engineers",
    description:
      "Deep domain experience in facility design and vendor sourcing. We understand your challenges because we've faced them ourselves.",
  },
  {
    icon: Brain,
    title: "AI With Depth",
    description:
      "Structured logic tailored to your workflow, not a generic chatbot. Our AI understands the nuances of bioprocess engineering.",
  },
  {
    icon: Workflow,
    title: "Workflow-Focused",
    description:
      "Tools that fit into your sourcing and documentation process. Seamless integration with your existing workflows.",
  },
]

export function WhyBpeSection() {
  return (
    <section id="why-bpe" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why BPE AI</h2>
          <p className="text-lg text-gray-600">The difference is in our engineering-first approach to AI solutions</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-200 transition-colors">
                  <IconComponent className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
