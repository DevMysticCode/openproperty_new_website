import { ThemeProvider } from './components/theme-provider';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import StatsSection from './components/StatsSection';
import MobileAppSection from './components/MobileAppSection';
import FeaturesSection from './components/FeaturesSection';
import TestimonialsSection from './components/TestimonialsSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <Navigation />
        <main className="scroll-snap-section">
          <Hero />
          <ProblemSection />
          <StatsSection />
          <MobileAppSection />
          <FeaturesSection />
          <TestimonialsSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;