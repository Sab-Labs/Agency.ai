import React, { useRef, useState } from "react";
import { motion } from "motion/react";

const ServiceCard = ({ service, index = 0 }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  const divRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const bounds = divRef.current.getBoundingClientRect();

    setPosition({
      x: e.clientX - bounds.left,
      y: e.clientY - bounds.top,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className="relative overflow-hidden max-w-lg m-2 sm:m-4 rounded-xl border border-gray-200 dark:border-gray-700 cursor-pointer"
    >
      {/* Mouse-following gradient */}
      <div
        className="pointer-events-none absolute w-72 h-72 rounded-full blur-3xl bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 transition-opacity duration-300"
        style={{
          left: position.x - 144,
          top: position.y - 144,
          opacity: visible ? 0.8 : 0,
        }}
      />

      {/* Card */}
      <div className="relative z-10 m-[2px] rounded-xl bg-white dark:bg-gray-900 p-8 flex items-center gap-10">
        <motion.div 
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.2 }}
          className="bg-gray-100 dark:bg-gray-700 rounded-full shrink-0"
        >
          <img
            src={service.icon}
            alt="icon"
            className="max-w-24 bg-white dark:bg-gray-900 rounded-full m-2"
          />
        </motion.div>

        <div className="flex-1">
          <h3 className="font-bold">{service.title}</h3>
          <p className="text-sm mt-2">{service.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;

