import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Team from "./components/Team";
import CarePlans from "./components/CarePlans";
import Testimonials from "./components/Testimonials";
import OpeningHours from "./components/OpeningHours";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Services />
      <Team />
      <CarePlans />
      <Testimonials />
      <OpeningHours />
      <Contact />
      <Footer />
    </main>
  );
}
