import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
const Footer = ({isDarkMode}) => {
  return (
    <div className='mt-20'>
      <div className='text-center'>
      <h1 className='w-36 text-xl mx-auto mb-2'>SamSync<span className='text-blue-800'>Solutions</span></h1>
      <div className='w-max flex items-center gap-2 mx-auto'>
        <Image src={isDarkMode ? assets.mail_icon_dark: assets.mail_icon} alt='' className='w-6'/>
        mavekepeter20222gmail.com
      </div>
      </div>

      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p> © 2025 SamSync<span className='text-blue-800'>Solutions</span> . All rights reserved</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
            <li><a  target='_blank' href="">GITHUB</a></li>
            <li><a  target='_blank' href="">LinkedIn</a></li>
            <li><a  target='_blank' href="">X</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
