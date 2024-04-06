import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import { Link,Navigate,useNavigate } from 'react-router-dom'
import OAuth from '../components/OAuth'

const Signup = () => {
  const navigate=useNavigate()
  const [formData,setFormData]=useState({});
  const [errorMessage,setErrorMessage]=useState(null)
const [loading,setLodaing]=useState(false);

  const handleChange=(e)=>{
   
    setFormData({...formData,[e.target.id]:e.target.value.trim()})
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      return setErrorMessage("Please Fill Out All The Form ");
    }
    try {
      setLodaing(true);
      setErrorMessage(null);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        setErrorMessage(data.message);
        setLodaing(false); // Set loading to false here
        return; // Exit the function early
      }
      setLodaing(false); // Set loading to false for successful sign up
      if (res.ok) {
        navigate("/sign-in");
      }
    } catch (error) {
      setErrorMessage(error.message);
      setLodaing(false); // Set loading to false in case of error
    }
  };
  

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
        <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
        <div >
        <Label value="Your Username"/>
        <TextInput
        type="text"
        placeholder='username'
        id="username" onChange={handleChange}/>

        </div>
        <div >
        <Label value="Your Email"/>
        <TextInput
        type="email"
        placeholder='email'
        id="email" onChange={handleChange}/>

        </div>
        <div >
        <Label value="Your Password"/>
        <TextInput
        type="password"
        placeholder='password'
        id="password" onChange={handleChange}/>

        </div>
        <Button gradientDuoTone="purpleToPink" type="submit" disabled={loading}>
        {
          loading ? (
            <div>
              <Spinner size="sm" />
              <span className='pt-3'>Loading...</span>
            </div>
          ) : "Sign Up"
        }
        
        </Button>
        <OAuth/>
         </form>
         <div className='flex gap-2 text:sm mt-5'>
         
         <span>Have an account?</span>
         <Link to="/sign-in" className='text-blue-500'>Sgn In</Link></div>
         {
          errorMessage && (
            <Alert className='mt-5' color="failure">
            {errorMessage}
            </Alert>
          )
         }
      </div>
      </div>
    </div>
  )
}

export default Signup
