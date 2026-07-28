import React from "react";
import Title from "./Title";
import assets from "../assets/assets";

const OurWork = () => {

    const workData = [
        {
            title :"Mobile App Marketing",
            description : 'we turn bold ideas into  powerful digital solutions that connect, engage...',
            image : assets.work_mobile_app
                
        },
        {
            title :"DashBoard Management",
            description : 'we help you execute your plan and  deliver results.',
            image : assets.work_dashboard_management
                
        },
        {
            title :"Fitness app promotion",
            description : 'we help fitness brands and wellness companies engage users and drive results.',
            image : assets.work_fitness_app
                
        },
        
    ]

  return (
    <div
      id="our-work"
      className="scroll-mt-20 flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 py-16 sm:py-24 text-gray-700 dark:text-white"
    >
      <Title
        title="Our Latest Work"
        desc="from strategy to delivery we craft digital solutions that move your 
        business forward."
      />
<div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl'>
{
     workData.map((work, index)=>(
     <div key={index} className='hover:scale-102 duration-500
      transition-all cursor-pointer'>
     <img src={work.image} className='w-full rounded-xl' alt="" />
     <h3 className='mt-3 mb-2 text-lg font-semibold'>{work.title}</h3>
     <p className='text-sm opacity-60 w-5/6'>{work.description}</p>
    </div>
     ))
}
</div>  
    </div>
  );
};

export default OurWork;

