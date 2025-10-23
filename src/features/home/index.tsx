import CTA from "./cta"
import Features from "./features"
import GradientSection from "./gradient-section"
import Hero from "./hero"
import OurGoal from "./ourGoal"
import Services from "./services"
import WhyChooseUs from "./whyChooseUs"

const Home = () => {
  return (
    <>
      <Hero />
      <GradientSection />
      <Features />
      <Services/>
      <WhyChooseUs/>
      <OurGoal/>
      <CTA/>
      </>
  )
}

export default Home
