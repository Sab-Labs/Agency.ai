import React from "react";
import { motion } from "motion/react";

const Title = ({ title, desc }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      viewport={{ once: true }}
      className="flex flex-col items-center text-center gap-4"
    >
      <h2 className="text-3xl sm:text-5xl font-medium text-gray-700 dark:text-white">
        {title}
      </h2>

      <p className="max-w-2xl text-gray-500 dark:text-white/75 text-base sm:text-lg leading-7">
        {desc}
      </p>
    </motion.div>
  );
};

export default Title;

