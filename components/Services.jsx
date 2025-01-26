'use client'
import { assets, serviceData } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'
import { motion } from "motion/react"

const Services = () => {
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}} 
    id='services' className='w-full px-[12%] py-10 scroll-mt-20'>
        <motion.h4 
        initial={{y:-20, opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{delay:0.3, duration:0.5}}
        className='text-center mb-2 text-lg font-Ovo'>What I offer
        </motion.h4>
        <motion.h2
         initial={{y:-20, opacity:0}}
         whileInView={{y:0, opacity:1}}
         transition={{delay:0.3, duration:0.5}}
         className='text-center text-5xl font-Ovo'>My services</motion.h2>

        <motion.p
         initial={{ opacity:0}}
         whileInView={{ opacity:1}}
         transition={{delay:0.7, duration:0.5}}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
        I offer a range of professional services to bring your digital ideas to life. From crafting visually stunning and user-friendly <strong>web designs</strong> to developing dynamic and responsive <strong>web applications</strong>, I cover all aspects of <strong>front-end</strong> and <strong>back-end development</strong>.  
        Whether you need a sleek, modern website, a complex web app with advanced functionality, or seamless integration of design and functionality, I have the expertise to deliver solutions that meet your goals. Let’s create something extraordinary together.
       </motion.p>

       <motion.div
        initial={{ opacity:0}}
        whileInView={{ opacity:1}}
        transition={{delay:0.9, duration:0.6}}
       className='grid grid-cols-auto gap-6 my-10'>
        {serviceData.map(({icon,title,description,link},index)=>(
            <motion.div
            whileHover={{scale:1.05}}
            key={index} 
            className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white'>
                <Image src={icon} alt='' className='w-10'/>
                <h3 className='text-lg my-4 text-gray-700 dark:text-white'>{title}</h3>
                <p className='text-sm text-gray-600 leading-5 dark:text-white/80'>{description}</p>
                <a href={link} className='flex items-center gap-2 text-sm mt-5'>
                    Read more <Image alt='' src={assets.right_arrow} className='w-4'/>
                </a>
            </motion.div>
        ))}

       </motion.div>
        
    </motion.div>
  )
}

export default Services
