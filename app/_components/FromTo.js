import React from 'react'

function FromTo() {
  return (
    <div className=' py-10 flex flex-col gap-0 font-mono'>
    <div className='flex flex-col gap-5'> 
        <div className=' p-8 rounded-r-2xl shadow-[0px_0px_400px_0px_#3182ce] bg-secondary bg-opacity-90 w-[450px]'>
            <p className="font-normal text-white text-9xl ml-10">From</p>
            
        </div>
        <div className=' p-8 rounded-r-2xl shadow-[0px_0px_400px_0px_#3182ce] w-[860px]'>
            <p className="font-normal text-white text-9xl ml-10 ">Hackathons</p>
        </div>
    </div>
    <div className=' flex flex-col items-end gap-5 -translate-y-48'> 
        <div className=' p-8 rounded-l-2xl shadow-[0px_0px_400px_0px_#3182ce] bg-primary bg-opacity-60 w-[300px]'>
            <p className="font-normal text-right text-white text-9xl mr-10">To</p>
            
        </div>
        <div className=' p-8 rounded-l-2xl shadow-[0px_0px_400px_0px_#3182ce] w-[800px]'>
            <p className="font-normal text-right text-white text-9xl mr-10 ">Workshops</p>
        </div>
    </div>
    <div className='flex flex-col gap-5 -translate-y-48'> 
        <div className=' p-8 rounded-r-2xl shadow-[0px_0px_400px_0px_#3182ce] bg-secondary bg-opacity-90 w-[450px]'>
            <p className="font-normal text-white text-9xl ml-10">And</p>
            
        </div>
        <div className=' p-8 rounded-r-2xl shadow-[0px_0px_400px_0px_#3182ce] w-[860px]'>
            <p className="font-normal text-white text-9xl ml-10 ">Much More</p>
        </div>
    </div>
    </div>
  )
}

export default FromTo