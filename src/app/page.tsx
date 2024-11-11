import About from "@/components/Landing/About/About";
import Contact from "@/components/Landing/Contact/Contact";
import Accord from "@/components/Landing/FAQ/Accord";
import Features from "@/components/Landing/Features/Features";
import Footer from "@/components/Landing/Footer/Footer";
import Hero from "@/components/Landing/Hero/Hero";
import Navbar from "@/components/Landing/Navbar/Navbar";
import Partners from "@/components/Landing/Partners/Partners";
import Pricing from "@/components/Landing/Pricing /Pricing";
import Testimonials from "@/components/Landing/Testimonials/Testimonials";


const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Partners />
      <Testimonials />
      <Pricing />
      <About />
      <Contact />
      <Accord />
      <Footer />
    </div>
  );
};

export default Home;
