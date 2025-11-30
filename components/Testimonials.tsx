export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Event Coordinator",
      text: "Nimbus has completely transformed how I plan outdoor events. The AI alerts give me confidence that I'll never be caught off guard by sudden weather changes.",
      image: "/professional-woman.png",
    },
    {
      name: "Marcus Rodriguez",
      role: "Agricultural Manager",
      text: "The 7-day forecast accuracy is incredible. We've reduced crop losses significantly by making informed decisions based on Nimbus insights.",
      image: "/professional-man.png",
    },
    {
      name: "Elena Volkova",
      role: "Travel Blogger",
      text: "Location-based insights have made my travels so much easier. I always know exactly what to pack and expect at my destination.",
      image: "/smiling-woman.png",
    },
  ]

  return (
    <section className="py-20 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">What Users Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Join thousands of satisfied users who trust Nimbus for their weather intelligence.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-lg bg-background border border-border hover:border-primary/50 transition-colors"
            >
              {/* User info */}
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>

              {/* Review text */}
              <p className="text-muted-foreground leading-relaxed italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
