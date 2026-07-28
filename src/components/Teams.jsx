import React from "react";
import Title from "./Title";
import { teamData } from "../assets/assets";
import { motion } from "motion/react";

const Teams = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      id="about"
      className="scroll-mt-20 flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 py-16 sm:py-24 text-gray-800 dark:text-white"
    >
      <Title
        title="Meet the team"
        desc="A passionate team of digital experts dedicated to your brand's success."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 w-full max-w-5xl">
        {teamData.map((team, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 25, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -6, scale: 1.03 }}
            className="flex max-sm:flex-col items-center gap-5 p-4 rounded-xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-xl shadow-gray-100 dark:shadow-white/5 cursor-pointer"
          >
            <motion.img 
              whileHover={{ scale: 1.15 }}
              transition={{ duration: 0.2 }}
              src={team.image} 
              className="w-12 h-12 rounded-full object-cover" 
              alt={team.name} 
            />
            <div className="flex-1 max-sm:text-center">
              <h3 className="font-bold text-sm text-gray-800 dark:text-white">{team.name}</h3>
              <p className="text-xs opacity-60 dark:text-gray-300">{team.title}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Teams;

