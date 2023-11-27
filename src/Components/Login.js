import React, { useCallback, useContext } from 'react'
// import app from './base';
import { AuthContext } from './Auth';
import { Link, Navigate, redirect, useNavigate } from 'react-router-dom';
import * as firebase from 'firebase/app'
import auth from './base';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
const Login = ({ history }) => {
const goto = useNavigate()

  const HandleLogin = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await signInWithEmailAndPassword(auth, email.value, password.value)
      goto('/')
    } catch (error) {
      alert(error)
    }
  }, [history])
  const currentUser = useContext(AuthContext);

  if (currentUser) {
    return (
      redirect("/list")
    )
  }
  return (
    <div class='login'>
      <div className='bg-transparent'></div>
      <div className='h-96 w-96 bg-red-500 items-center justify-center mx-96 rounded-xl mt-12 md:bg-green-500 ml-7 w-80 h-80'>
        <form onSubmit={HandleLogin}>
          <h1 className='flex justify-center text-2xl font-extrabold pt-7'>Log In</h1><p/>
          <label className='flex justify-center mt-7'>
            Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type='email' name='email' placeholder='Email' className='rounded text-sm pl-2'/>
          </label><p />
          <label className='flex justify-center mt-7'>
            Password:
            <input type='password' name='password' placeholder='Password' className='rounded text-sm pl-2'/>
          </label>
          <button type='submit' className='flex justify-center ml-32 mt-7 bg-blue-500 rounded text-sm font-light px-1'>Log In</button><p />
        </form><p />
        <div className='flext items-center justify-center'>

          <div className='flex mt-2 text-black'>
            <h1 className='text-sm font-extralight ml-24'>Not have account?</h1><Link to={'/signup'} className='text-sm font-extralight ml-1 text-white'>Sign Up</Link>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Login;

