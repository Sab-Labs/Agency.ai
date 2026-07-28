import React, { useState } from "react";
import assets from "../assets/assets";
import ThemeToggleBtn from "./themetogglebtn";
import { motion } from "motion/react";

const Navbar = ({ theme, setTheme }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900/70"
    >
      <img
        src={theme === "dark" ? assets.logo_dark : assets.logo}
        className="w-32 sm:w-40"
        alt="Logo"
      />

      <div
        className={`text-gray-700 dark:text-white sm:text-sm ${!sidebarOpen ? "max-sm:w-0  overflow-hidden" : "max-sm:px-10 max-sm:w-60"} 
              max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen
              max-sm:h-full max-sm:flex-col max-sm:bg-primary max-sm:text-white
              max-sm:pt-20 flex sm:items-center gap-5 transition-all`}
      >
        <img
          src={assets.close_icon}
          className="w-5 absolute top-4 right-4 sm:hidden"
          alt="Menu"
          onClick={() => setSidebarOpen(false)}
        />

        <a
          onClick={() => setSidebarOpen(false)}
          href="#hero"
          className="sm:hover:border-b-2"
        >
          Home
        </a>
        <a
          onClick={() => setSidebarOpen(false)}
          href="#services"
          className="sm:hover:border-b-2"
        >
          Services
        </a>
        <a
          onClick={() => setSidebarOpen(false)}
          href="#our-work"
          className="sm:hover:border-b-2"
        >
          Our Work
        </a>
        <a
          onClick={() => setSidebarOpen(false)}
          href="#contact-us"
          className="sm:hover:border-b-2"
        >
          Contacts
        </a>
        <a
          onClick={() => setSidebarOpen(false)}
          href="#about"
          className="sm:hover:border-b-2"
        >
          About
        </a>
      </div>

      <div className="flex items-center gap-2 sm:gap-4">
        <ThemeToggleBtn theme={theme} setTheme={setTheme} />
        <img
          src={theme === "dark" ? assets.menu_icon_dark : assets.menu_icon}
          className="w-8 sm:hidden"
          alt="Logo"
          onClick={() => setSidebarOpen(true)}
        />

        <a
          href="#contact-us"
          className="flex items-center gap-2 bg-primary max-sm:hidden text-white px-6 py-2 rounded-full text-sm cursor-pointer hover:scale-110 transition-all "
        >
          Connect <img src={assets.arrow_icon} width={14} alt="Connect" />
        </a>
      </div>
    </motion.div>
  );
};

export default Navbar;
