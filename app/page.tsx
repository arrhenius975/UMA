import HeroSection from "../components/HeroSection"
import AboutSection from "../components/AboutSection"
import ImpactSection from "../components/ImpactSection"
import CircuitSection from "../components/CircuitSection"
import UnplayedChords from "../components/UnplayedChords"
import EchoesSection from "../components/EchoesSection"
import RouteSection from "../components/RouteSection"
import Soundwaves from "../components/Soundwaves"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-sky-200 via-lavender-200 to-navy-800 text-navy-800 text-center">
      <HeroSection />
      <AboutSection />
      <ImpactSection />
      <CircuitSection />
      <UnplayedChords />
      <EchoesSection />
      <RouteSection />
      <Soundwaves />
    </main>
  )
}

