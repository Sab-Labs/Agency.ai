import React, { useState } from "react";
import assets from "../assets/assets";

// Data-driven nav links: easier to maintain, and avoids re-declaring JSX per item
const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#our-work" },
  { label: "Contact us", href: "#contact-us" },
];

const SOCIAL_LINKS = [
  { label: "Twitter", href: "#", icon: "twitter" },
  { label: "LinkedIn", href: "#", icon: "linkedin" },
  { label: "Instagram", href: "#", icon: "instagram" },
];

const Footer = ({ theme }) => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | submitting | success

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("submitting");
    // Replace with real API call
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 600);
  };

  return (
    <footer className="bg-slate-50 dark:bg-gray-900 pt-10 sm:pt-10 mt-20 sm:mt-40 px-4 sm:px-12 lg:px-24 xl:px-40 transition-colors duration-300">
      <div className="flex justify-between lg:items-start max-lg:flex-col gap-10">
        {/* Brand column */}
        <div className="text-sm text-gray-700 dark:text-gray-400 space-y-5">
          <img
            src={theme === "dark" ? assets.logo_dark : assets.logo}
            className="w-32 sm:w-44"
            alt="Company logo"
          />
          <p className="max-w-md">
            From strategy to execution, we craft digital solutions that deliver
            real results.
          </p>

          <ul className="flex flex-wrap gap-6 sm:gap-8">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="relative text-gray-700 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors duration-200 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[1.5px] after:w-0 after:bg-primary hover:after:w-full after:transition-all after:duration-300"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Social icons */}
          <div className="flex gap-4 pt-1">
            {SOCIAL_LINKS.map(({ label, href, icon }) => (
              <a
                key={icon}
                href={href}
                aria-label={label}
                className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:border-primary hover:text-primary hover:-translate-y-0.5 transition-all duration-200"
              >
                <SocialIcon name={icon} />
              </a>
            ))}
          </div>
        </div>

        {/* Newsletter column */}
        <div className="text-sm text-gray-700 dark:text-gray-400 w-full lg:max-w-sm">
          <h3 className="font-semibold text-gray-900 dark:text-white">
            Subscribe to Our Newsletter
          </h3>
          <p className="mt-2 mb-6">
            The latest news, updates and articles, sent directly to your inbox.
          </p>

          <form
            onSubmit={handleSubscribe}
            className="flex w-full max-sm:max-w-sm gap-2"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              aria-label="Email address"
              className="w-full p-3 text-sm outline-none rounded dark:text-gray-200 bg-transparent border border-gray-300 dark:border-gray-600 focus:border-primary transition-colors duration-200"
            />
            <button
              type="submit"
              disabled={status === "submitting"}
              className="text-white bg-primary rounded px-6 shrink-0 hover:opacity-90 active:scale-95 disabled:opacity-60 transition-all duration-150"
            >
              {status === "submitting" ? "..." : "Subscribe"}
            </button>
          </form>

          {status === "success" && (
            <p className="text-primary text-xs mt-2">Thanks for subscribing!</p>
          )}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-10 py-6 border-t border-gray-200 dark:border-gray-700 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-500 dark:text-gray-500">
        <p>
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-primary transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

// Small inline icon set — avoids pulling in an icon library for 3 glyphs
const SocialIcon = ({ name }) => {
  const paths = {
    twitter:
      "M22 5.9c-.7.3-1.5.6-2.3.7.8-.5 1.4-1.3 1.7-2.3-.8.5-1.7.8-2.6 1a4.1 4.1 0 0 0-7 3.7A11.6 11.6 0 0 1 3.4 4.7a4.1 4.1 0 0 0 1.3 5.5c-.7 0-1.3-.2-1.9-.5v.1c0 2 1.4 3.6 3.3 4a4.1 4.1 0 0 1-1.9.1c.5 1.6 2 2.8 3.9 2.9A8.3 8.3 0 0 1 2 18.4a11.6 11.6 0 0 0 6.3 1.8c7.5 0 11.7-6.2 11.7-11.7v-.5c.8-.6 1.5-1.3 2-2.1z",
    linkedin:
      "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3V9zm7 0h3.8v1.7h.1c.5-1 1.9-2 3.8-2 4 0 4.8 2.6 4.8 6V21h-4v-5.3c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9V21h-4V9z",
    instagram:
      "M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm5.3-3.3a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4z",
  };
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
      <path d={paths[name]} />
    </svg>
  );
};

export default Footer;
