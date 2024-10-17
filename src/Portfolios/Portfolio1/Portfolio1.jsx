import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Works from "./components/Works";
import Params from "./components/Params";
import AdditionalWorks from "./components/AdditionalWorks";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

const Portfolio1 = () => {
  return (
    <div className="bg-black text-white font-['Poppins',_sans-serif]">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Works />
      <Params />
      <AdditionalWorks />
      <Contacts />
      <Footer />
    </div>
  );
};

export default Portfolio1;
