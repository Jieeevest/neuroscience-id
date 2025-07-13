import { Navbar } from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Programs from "../components/sections/Programs";
import Resources from "../components/sections/Resources";
import Events from "../components/sections/Events";
import Team from "../components/sections/Team";
import { Footer } from "../components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Programs />
        <Resources />
        <Events />
        <Team />
      </main>
      <Footer />
    </>
  );
}
