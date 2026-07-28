import React, { useEffect, useState } from "react";
import assets from "../assets/assets";

const ThemeToggleBtn = ({ theme, setTheme }) => {
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="flex items-center justify-center">
      <button>
        {theme === "dark" ? (
          <img
            onClick={() => setTheme("light")}
            src={assets.sun_icon}
            className="size-7 p-1.5 rounded-full border border-gray-700"
            alt="Switch to light mode"
          />
        ) : (
          <img
            onClick={() => setTheme("dark")}
            src={assets.moon_icon}
            className="size-7 p-1.5 rounded-full border border-gray-700"
            alt="Switch to dark mode"
          />
        )}
      </button>
    </div>
  );
};

export default ThemeToggleBtn;
