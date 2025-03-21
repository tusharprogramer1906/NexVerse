"use client"
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

function Contact() {

  return (
    <div className=' flex justify-center items-center mt-32'>
        <div className='shadow-[0px_0px_20px_0px_#3182ce] flex rounded-3xl justify-between items-center  sm:w-[80%] mx-7 sm:mx-0'>
            <form className='rounded-3xl sm:shadow-[0px_0px_100px_0px_#3182ce] p-12 sm:p-16 w-full flex gap-5  flex-col justify-center items-start'>
                <div className='flex flex-col gap-2'>
                <label className='text-white text-3xl font-semibold'>Chat to our team</label>
                <label className='text-gray-400 text-sm'>Need help with something?</label>
                <label className='text-gray-400 text-sm'>Fill the form and our friendly team will get in touch with you</label>
                </div>
                <input className='bg-transparent border-b-2 border-gray-500 w-full text-white' type='text' placeholder='First Name' name="name" required/>
                <input className='bg-transparent border-b-2 border-gray-500 w-full text-white' type='text' placeholder='Last Name' required/>
                <input className='bg-transparent border-b-2 border-gray-500 w-full text-white' type='email' placeholder='Email' name="email" required/>
                <textarea className='bg-transparent border-b-2 border-gray-500 w-full text-white' placeholder='Message' name="message" required/>
                <Button variant="outline" className="w-[50%]">Submit</Button>
            </form>
        <div className=' w-full h-full hidden sm:flex justify-center items-center rounded-3xl'>
             <Image src={'/image.png'} height={60} width={900}/>
        </div>
        </div>
    </div>
  )
}

export default Contact