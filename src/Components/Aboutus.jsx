import React from 'react'
import {motion} from 'framer-motion'
const Aboutus = () => {
  return (
   <div>
     <div className='px-36 grid grid-cols-2'>
      <div>
        <img src='https://avatars.githubusercontent.com/u/102691647?v=4' className='rounded-lg hover:scale-125 transition duration-300 ease-in-out'></img>
      </div>
      <div className='bg-white rounded-lg flex justify-center pt-24'>
       <motion.div>
       <p className='py-5 px-5 font-serif hover:cursor-pointer hover:animate-bounce'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I'm creating what everyone needs, I hope you all enjoy it. At first it was just a story, but later it may come true.</p>
       </motion.div>
      </div>
    </div>
    <div className='h-96 px-12 my-7 rounded-lg bg-white'>
   
    </div>
   </div>
  )
}

export default Aboutus
