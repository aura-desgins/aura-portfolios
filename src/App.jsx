import About from "./components/About";
import AdditionalWorks from "./components/AdditionalWorks";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Params from "./components/Params";
import Services from "./components/Services";
import Works from "./components/Works";

function App() {
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
}

export default App;
