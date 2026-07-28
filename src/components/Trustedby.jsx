import React from "react";
import { company_logos } from "../assets/assets";
import { motion } from "motion/react";

const Trustedby = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center gap-6 py-16 px-4 sm:px-12 lg:px-24 xl:px-40 text-center dark:text-white"
    >
      <motion.h3
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="font-semibold text-gray-700 dark:text-gray-200 tracking-wide text-base sm:text-lg"
      >
        Trusted by Leading Companies
      </motion.h3>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 m-4"
      >
        {company_logos.map((logo, index) => (
          <motion.img
            key={index}
            src={logo}
            alt="Company logo"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1, y: -2 }}
            className="max-h-5 sm:max-h-6 h-auto object-contain dark:drop-shadow-xl cursor-pointer"
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Trustedby;

