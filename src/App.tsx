import { ThemeProvider } from './components/theme-provider'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import StatsSectionNew from './components/StatsSectionNew'
import ProblemSection from './components/ProblemSection'
import StatsSection from './components/StatsSection'
import PillarsSection from './components/PillarsSection'
import MobileAppSection from './components/MobileAppSection'
import FeaturesSection from './components/FeaturesSection'
import TestimonialsSection from './components/TestimonialsSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <Navigation />
        <main className="scroll-snap-section">
          <Hero />
          <StatsSectionNew delay={2} />
          <PillarsSection />
          <MobileAppSection />
          <ProblemSection />
          <StatsSection />

          <FeaturesSection />
          <TestimonialsSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
