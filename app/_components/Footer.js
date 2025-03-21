import { Instagram, Linkedin } from 'lucide-react'
import React from 'react'

function Footer() {
  return (
    <div className=' flex gap-5 justify-between sm:p-8 p-3 sm:h-[200px] bg-black mt-32 sm:mt-52'>
        <div> 
            <p className='text-white sm:text-6xl text-2xl font-bold sm:mb-5 mb-3'>Geek Room IITM</p>
            <p className='text-gray-300 text-xs sm:text-sm font-normal w-[200px] sm:w-[400px]'>Institute of Information Technology & Management
            D-29, Institutional Area, Janakpuri, New Delhi-110058</p>
        </div>
        <div >
            <h1 className='text-white text-xl sm:text-3xl font-semibold whitespace-nowrap'>Social Links</h1>
            <div className='flex flex-row sm:flex-col justify-end gap-5 sm:gap-0 mt-2 sm:mt-0'>
            <div className='flex flex-row sm:flex-col justify-end gap-5 sm:gap-0 mt-2 sm:mt-0'>
            <div className="flex items-center gap-2 mt-1 sm:mt-3">
                <a 
                href="https://www.instagram.com/geekroom_iitm/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white"
                >
                <Instagram className="text-white" size={25} />
                <p className="text-white text-sm sm:text-lg hidden sm:flex">Instagram</p>
                </a>
            </div>

            <div className="flex items-center gap-2 mt-1 sm:mt-3">
                <a 
                href="https://www.linkedin.com/company/geek-room-iitm/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white"
                >
                <Linkedin className="text-white" size={25} />
                <p className="text-white text-sm sm:text-lg hidden sm:flex">LinkedIn</p>
                </a>
            </div>
        </div>

    </div>

        </div>
    </div>
  )
}

export default Footer