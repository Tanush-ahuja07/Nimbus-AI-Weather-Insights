import GradientBlinds from './GradientBlinds';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 bg-background">
      {/* Background gradient effect */}
      <div className="absolute inset-0">
  <div className="relative w-full h-full">
  <GradientBlinds
          gradientColors={['#FF9FFC', '#5227FF']}
          angle={-135}
          noise={0.3}
          blindCount={18}
          blindMinWidth={10}
          spotlightRadius={0.5}
          spotlightSoftness={1}
          spotlightOpacity={1}
          mouseDampening={0.15}
          distortAmount={0}
          shineDirection="left"

          className={undefined} dpr={undefined}  />
</div>

      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center pointer-events-none">
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


    </section>
  )
}
