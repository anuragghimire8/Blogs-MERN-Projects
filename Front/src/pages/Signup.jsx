import { Button, Label, TextInput } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className=' min-h-screen mt-20'>
      <div className=' flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-cnter gap-5'>
        {/*left side */}
        <div className='flex-1'>
        <Link to="/" className='font-bold   dark:text-white text:4xl'>
  <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to bg-pink-500 rounded-lg text-white'>
    Anurag's
    </span>
    Blog</Link>
    <p className='text-sm mt-5'>Prject Created By me Anurag Ghimire Iam a MERN Stack Developer.</p>
    </div>
    {/*right side */}
      <div className='flex-1'>
        <form className='flex flex-col gap-4'>
        <div >
        <Label value="Your Username"/>
        <TextInput
        type="text"
        placeholder='username'
        id="username"/>

        </div>
        <div >
        <Label value="Your Email"/>
        <TextInput
        type="email"
        placeholder='email'
        id="email"/>

        </div>
        <div >
        <Label value="Your Password"/>
        <TextInput
        type="password"
        placeholder='password'
        id="password"/>

        </div>
        <Button gradientDuoTone="purpleToPink" type="submit">
        Sign Up</Button>
         </form>
         <div className='flex gap-2 text:sm mt-5'>
         
         <span>Have an account?</span>
         <Link to="/sign-in" className='text-blue-500'>Sgn In</Link></div>
      </div>
      </div>
    </div>
  )
}

export default Signup
