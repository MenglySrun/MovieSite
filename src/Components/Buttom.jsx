import React from 'react'
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs';
import { TbCopyright } from 'react-icons/tb'
import { Link } from 'react-router-dom';

const Buttom = () => {
  return (
    <div>
       <div className='h-32 bg-slate-500 pb-12 flex items-center justify-between'>
            <div>

            </div>
            <div className='flex gap-2'>
               <BsFacebook className='w-6 h-6 mr-2 hover:scale-125 transition duration-300 ease-in-out hover:cursor-pointer' />
               <BsInstagram className='w-6 h-6 mr-2 hover:scale-125 transition duration-300 ease-in-out hover:cursor-pointer' />
               <BsTwitter className='w-6 h-6 mr-2 hover:scale-125 transition duration-300 ease-in-out hover:cursor-pointer' />
               <BsYoutube className='w-6 h-6 mr-2 hover:scale-125 transition duration-300 ease-in-out hover:cursor-pointer' />
            </div>
            <div className='pt-12 font-mono'>
               <Link to={'aboutus'} className='font-thin hover:cursor-pointer hover:underline mr-72 text-lg'>About Us</Link>
               <div>
                  <Link to={''} className='font-thin hover:cursor-pointer hover:underline mr-72 text-lg'>Help Center</Link>
               </div>
               <div className='flex'>
                  <TbCopyright className='mt-1' /><p className='font-thin text-lg'>1997-2023 Netflix,Ilc</p>
               </div>
            </div>
         </div>
    </div>
  )
}

export default Buttom
