import Navbar from "@/components/layout/navbar"
import HeroSection from "./components/layout/hero-section"
import WorkSection from "./components/layout/work-section"
import FadeInWrapper from "./components/ui/fade_in_wrapper"
import AboutSection from "./components/layout/about-section"
import ContactSection from "./components/layout/contact-section"
import { Stack } from "@chakra-ui/react"
import WelcomeSection from "./components/layout/welcome-section"


function App() {
  return (
    <Stack gap={24} >
      <Navbar />
      <HeroSection />
      <WelcomeSection />
      <FadeInWrapper>
        <WorkSection />
      </FadeInWrapper>
      <FadeInWrapper>
        <AboutSection />
      </FadeInWrapper>
      <FadeInWrapper>
        <ContactSection />
      </FadeInWrapper>
    </Stack>
  )
}

export default App
