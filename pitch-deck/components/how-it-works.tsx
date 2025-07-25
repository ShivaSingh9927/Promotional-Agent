import { Upload, Brain, Share } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      icon: Upload,
      title: "Define Your Audience",
      description: "Choose from battle-tested B2B personas or build customs ICPs with specific pain points, tech stacks, and buying triggers that match your target customers.",
    },
    {
      icon: Brain,
      title: "Add Product Context",
      description: "Sync your Github repos, upload PRDs, or connect Notion docs. Creaco's AI reads your technical documentation and identifies the features that matter most to buyers.",
    },
    {
      icon: Share,
      title: "Generate & Post",
      description: "Select your content goal (launch, feature update, hiring, etc.) and let Creaco create multiple post Variants. Review, edit, and post directly to platforms with one click. ",
    },
  ]

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">How Creaco Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From technical specs to platform success in 3 simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="bg-[#e4d9fd] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <step.icon className="h-8 w-8 text-[#7c5cfd]" />
                </div>
                <div className="bg-[#7c5cfd] text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
