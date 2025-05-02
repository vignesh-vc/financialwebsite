import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
// Optional if you have a services page
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useEffect } from "react";
import AOS from "aos";
function App() {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

         <Route path="/contact" element={<Contact />} /> 
        <Route path="/services" element={<Services />} />
        <Route path="/services/:id" element={<ServiceDetail />} /> {/* Dynamic route */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
