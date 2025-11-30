import { Cloud, TrendingUp, MapPin } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: Cloud,
      title: "Real-time AI Weather Alerts",
      description:
        "Receive instant notifications for severe weather conditions with AI-powered predictions tailored to your location.",
    },
    {
      icon: TrendingUp,
      title: "7-Day Forecast Analysis",
      description:
        "Advanced AI analysis of weather patterns to provide accurate forecasts and trend analysis for the next 7 days.",
    },
    {
      icon: MapPin,
      title: "Location-Based Insights",
      description: "Get hyperlocal weather data specific to your exact location with intelligent recommendations.",
    },
  ]

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Powerful Features</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Everything you need to stay informed and prepared with advanced AI weather intelligence.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="p-8 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors group"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
