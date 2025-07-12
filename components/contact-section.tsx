import { Button } from "@/components/ui/button"
import { Mail, ArrowRight } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-emerald-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Get in Touch</h2>
          <p className="text-xl text-emerald-100 mb-8">
            Let's talk about your sourcing needs. Request access and we'll follow up.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button size="lg" variant="secondary" className="bg-white text-emerald-600 hover:bg-gray-100">
              Request Access <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <div className="flex items-center text-emerald-100">
              <Mail className="w-5 h-5 mr-2" />
              <a href="mailto:info@bpeai.com" className="hover:text-white transition-colors">
                info@bpeai.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
