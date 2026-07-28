import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Trustedby from "./components/Trustedby";
import Services from "./components/Services";
import OurWork from "./components/OurWork";
import Teams from "./components/Teams";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";

const App = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light",
  );

  return (
    <div className="bg-white dark:bg-black relative transition-colors duration-300">
      <CustomCursor />
      <Toaster />
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <Trustedby />
      <Services />
      <OurWork />
      <Teams />
      <Contact />
      <Footer theme={theme} />
    </div>
  );
};

export default App;
