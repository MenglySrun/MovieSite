import * as firebase from 'firebase/app'
import { initializeApp } from "firebase/app";
import React, { useCallback } from 'react'
import auth from './base';
import { signInWithEmailAndPassword , createUserWithEmailAndPassword} from 'firebase/auth';
import { Link } from 'react-router-dom';

const Signup = ({history}) => {
    const HandleSignup = useCallback(async event =>{
        event.preventDefault();
        const {email, password} = event.target.elements;
        try {
            let a = await createUserWithEmailAndPassword(auth, email.value, password.value)
            console.log(a.user)
        }catch (error){
            alert(error)
        }
    }, [history])
  return (
    <div class='login'>
    <div className='h-96 w-96 bg-sky-500 items-center justify-center mx-96 rounded-xl mt-12'>
      <form onSubmit={HandleSignup}>
        <h1 className='flex justify-center text-2xl font-extrabold pt-7'>Sign Up</h1><p/>
        <label className='flex justify-center mt-7'>
          Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input type='email' name='email' placeholder='Email' className='rounded text-sm pl-2'/>
        </label><p />
        <label className='flex justify-center mt-7'>
          Password:
          <input type='password' name='password' placeholder='Password' className='rounded text-sm pl-2'/>
        </label>
      </form><p />
      <div className='flext items-center justify-center'>
        <Link to={'/login'}>
        <button type='submit' className='flex justify-center ml-32 mt-7 bg-green-200 rounded'>Sign Up</button><p />
        </Link>
      </div>
    </div>

  </div>
  )
}

export default Signup;
