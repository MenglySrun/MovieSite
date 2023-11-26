import React from 'react'
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs';
import { FaSearch } from 'react-icons/fa'
import { GrNotification } from 'react-icons/gr'
import { TbCopyright } from 'react-icons/tb'
import { BiLogOutCircle } from 'react-icons/bi'
import { BeatLoader } from 'react-spinners';
import Slider from './Slider';
import auth from './base';
import { signOut } from 'firebase/auth';

const List = () => {

   auth.onAuthStateChanged(user => {
      if (user === null) {
         goto('/login')
      }
   })
   const goto = useNavigate()
   const url_img = 'https://image.tmdb.org/t/p/w500';
   const [keyWard, setKeyWard] = useState("")
   const [movie, setMovie] = useState([])


   // const key = 'c04973ee6e8c039d002a22405c9c07e3';
   const key = '7f16c59997f05e465818f219212725cb';
   const getAllMovie = async (keyWard) => {

      console.log(auth.currentUser)
      const url = keyWard ? "https://api.themoviedb.org/3/search/movie" : "https://api.themoviedb.org/3/discover/movie";
      const res = await fetch(`${url}?api_key=${key}&&query=${keyWard}`)
      const movie = await res.json();
      setMovie(movie.results)
      console.log(movie)
   }
   useEffect(() => {
      getAllMovie(keyWard)
   }, [])

   async function a() {
      await signOut(auth).then(function (){
         goto('/login')
      })
   }


   return (
      <>
         <div className='fixed h-12 top-0 w-screen bg-slate-500 flex items-center justify-between'>
            <div className='flex'>
               <img src='https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png' className='h-7 w-12 rounded ml-7 mr-5' alt='img' />
               <ul className='flex text-white hover:cursor-pointer'>
                  <li className='px-2 hover:text-slate-200'>Home</li>
                  <li>TV Shows</li>
                  <li className='px-2'>Movies</li>
                  <li>Lastest</li>
               </ul>
            </div>
            <div className='flex'>
               <input type="text" placeholder='Search here...' className='border-none rounded-l-lg bg-transparent text-white' value={keyWard} onChange={e => setKeyWard(e.target.value)} />
               <button className=' bg-sky-500 rounded-r mr-3' onClick={() => { getAllMovie(keyWard); setKeyWard("") }}><FaSearch className='mx-1' /></button>
               <GrNotification className='h-5 w-5 mr-3' />
               <button onClick={a} className='mr-7 rounded bg-red-500'><BiLogOutCircle /></button>
            </div>
         </div>
         {/*Slider Here*/}

         {
            //  <Slider/>
         }

         <div className='pl-5 pt-5'>
            <h1 className='hover:text-red-500 hover:cursor-pointer'>All Movies</h1>
         </div>
         <div className='w-[70%] mx-auto grid grid-cols-1 gap-x-5 gap-y-10 py-5 lg:grid-cols-5'>

            {
               movie.length === 0 ? (<h1 className='flex h-96'>Loading<BeatLoader color="#36d7b7" className='pt-1' /></h1>) : (
                  movie.map((movie) => (
                     <Link to={'watch/' + movie.id} key={movie.id}>
                        <div className='h-[40vh] cursor-pointer group overflow-hidden'>
                           <img src={url_img + movie.poster_path}
                              className='object-cover w-full rounded-lg h-[90%] group-hover:scale-150 transition duration-300 ease-in-out' />
                           {movie.title}
                        </div>
                        <h1 className='text-sm font-serif text-center'>{movie.title}</h1>
                     </Link>
                  ))
               )}
         </div>
         <div className='h-32 bg-slate-500 pb-12 flex items-center justify-between'>
            <div>

            </div>
            <div className='flex tracking-wide'>
               <BsFacebook className='mr-2 hover:scale-125 transition duration-300 ease-in-out' />
               <BsInstagram className='mr-2 hover:scale-125 transition duration-300 ease-in-out' />
               <BsTwitter className='mr-2 hover:scale-125 transition duration-300 ease-in-out' />
               <BsYoutube className='mr-2 hover:scale-125 transition duration-300 ease-in-out' />
            </div>
            <div className='pt-12'>
               <Link to={'aboutus'} className='font-thin hover:cursor-pointer hover:underline mr-72 text-sm'>About Us</Link>
               <div>
                  <Link to={''} className='font-thin hover:cursor-pointer hover:underline mr-72 text-sm'>Help Center</Link>
               </div>
               <div className='flex'>
                  <TbCopyright className='mt-1' /><p className='font-thin text-sm'>1997-2023 Netflix,Ilc</p>
               </div>
            </div>
         </div>
      </>
   )
}

export default List
