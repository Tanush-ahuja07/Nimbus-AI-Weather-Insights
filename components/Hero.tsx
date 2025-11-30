export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 bg-background">
      {/* Background gradient effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border mb-8">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          <span className="text-sm text-muted-foreground">AI-Powered Weather Intelligence</span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">Nimbus – AI Weather Insights</h1>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-muted-foreground mb-12 text-pretty leading-relaxed">
          Stay ahead of weather with real-time AI alerts, intelligent 7-day forecasts, and location-based insights
          tailored to your needs. Experience weather prediction like never before.
        </p>

        {/* CTA Button */}
        <button className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-lg hover:bg-primary/90 transition-colors">
          Get Started
        </button>
      </div>

      {/* Weather illustration placeholder */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-2xl h-64 opacity-20">
        <svg viewBox="0 0 400 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="80" r="40" fill="currentColor" className="text-primary/30" />
          <path
            d="M 150 100 Q 170 90 190 100 Q 200 105 190 115 Q 170 125 150 115 Q 140 110 150 100"
            fill="currentColor"
            className="text-secondary/20"
          />
          <circle cx="300" cy="60" r="25" fill="currentColor" className="text-primary/40" />
          <path
            d="M 280 120 L 290 140 L 300 120 L 310 140 L 320 120"
            stroke="currentColor"
            strokeWidth="2"
            className="text-secondary/30"
            fill="none"
          />
        </svg>
      </div>
    </section>
  )
}
