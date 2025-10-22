import Header from "../../components/header"
import Features from "./features"
import GradientSection from "./gradient-section"
import Hero from "./hero"
import Services from "./services"
import WhyChooseUs from "./whyChooseUs"

const Home = () => {
  return (
    <>
    <Header />
      <Hero />
      <GradientSection />
      <Features />
      <Services/>
      <WhyChooseUs/>
      </>
  )
}

export default Home
