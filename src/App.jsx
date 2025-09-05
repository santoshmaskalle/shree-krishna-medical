import { useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar";
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import OrderMedicine from './components/OrderMedicine';
import banner from "./Images/medical-bg.jpg"; // ✅ background image
import { FaCapsules } from "react-icons/fa";


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <OrderMedicine />
      <Contact />
      <section className="py-12">
  <div className="max-w-3xl mx-auto bg-black bg-opacity-40 backdrop-blur-md text-center p-8 rounded-2xl shadow-lg">
    <h1 className="text-3xl font-bold text-green-400 drop-shadow-lg flex items-center justify-center gap-2">
      Caring for Your Health, Always <FaCapsules className="text-orange-400" />
    </h1>
    <p className="mt-3 text-lg text-white drop-shadow-md">
      Affordable medicines, timely delivery, and trusted healthcare support at your doorstep.
    </p>
  </div>
</section>

      <Footer />
    </div>
  );
}

export default App
