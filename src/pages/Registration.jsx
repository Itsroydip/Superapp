import React, { useState } from 'react'
import image from '../assets/intro.png'
import logo from '../assets/logo.png'
import { useNavigate } from 'react-router-dom'

const Registration = () => {
    const navigate = useNavigate();

    const [registrationForm, setRegistrationForm] = useState({
        name:"",
        username:"",
        email:"",
        mobile:"",
        check: false
    });

    const [errorForm, setErrorForm] = useState({
        name:"",
        username:"",
        email:"",
        mobile:"",
        check: ""
    });

    const handleChange = (e)=>{
        if(e.target.name==='check')
        setRegistrationForm({
             ...registrationForm,
             check: e.target.checked
        });

        else{
            setRegistrationForm({
                ...registrationForm,
                [e.target.name]: e.target.value
            });
        }
    }

    let error = {};
    const handleSubmit = (e)=>{
        e.preventDefault();
        
        if(!registrationForm.name || registrationForm.name.trim()==='')
        error.name = "* Name is required";
        
        if(!registrationForm.username || registrationForm.username.trim()==='')
        error.username = "* Username is required";

        if(!registrationForm.email || registrationForm.email.trim()==='')
        error.email = "* Email is required";

        if(!registrationForm.mobile || registrationForm.mobile.trim()==='')
        error.mobile = "* Mobile is required";
        
        if(!registrationForm.check)
        error.check = "* Check this box if you want to proceed";

        setErrorForm(error);

        if(Object.keys(error).length === 0)
        {
            alert("Form has been Submitted");
            localStorage.setItem('user',JSON.stringify(registrationForm));
            setRegistrationForm({
                name:"",
                username:"",
                email:"",
                mobile:"",
                check: false
            })

            navigate("/Selection");
        }

    

    }

    

  return (
    <>
    <div className="min-h-screen flex flex-col lg:flex-row">
        <div className='w-full lg:w-1/2 p-16 flex justify-center items-center bg-no-repeat bg-cover bg-center' style={{backgroundImage: `url(${image})`}}>
            <p className='font-roboto text-white text-3xl md:text-5xl font-black leading-10'>
                Discover new things on Superapp
            </p>
        </div>
        <div className='font-dmsans bg-black lg:w-1/2 px-12 md:px-32 py-8 md:py-20'>
            <img src={logo} alt="" className='w-40 h-10 mx-auto'/>
            <p className='font-normal text-white leading-5 mx-auto text-center my-4'>Create your new account</p>

            <form onSubmit={handleSubmit} className='flex-col w-full mt-12'>
                <input 
                type="text" 
                name="name" 
                placeholder='Name' 
                className='w-full h-10 px-3 my-2 bg-zinc-800 text-gray-300 focus:outline-0'
                value={registrationForm.name}
                onChange={handleChange}
                />
                <span className='h-5 text-red-700'>{errorForm.name}</span>

                <input 
                type='text' 
                name="username" 
                placeholder='Username' 
                className='w-full h-10 px-3 my-2 bg-zinc-800 text-gray-300 focus:outline-0'
                value={registrationForm.username}
                onChange={handleChange}
                />
                <span className='h-5 text-red-700'>{errorForm.username}</span>

                <input 
                type="email" 
                name="email" 
                placeholder='Email' 
                className='w-full h-10 px-3 my-2 bg-zinc-800 text-gray-300 focus:outline-0'
                value={registrationForm.email}
                onChange={handleChange}
                />
                <span className='h-5 text-red-700'>{errorForm.email}</span>

                <input 
                type="tel" 
                name="mobile" 
                placeholder='Mobile' 
                className='w-full h-10 px-3 my-2 bg-zinc-800 text-gray-300 focus:outline-0'
                value={registrationForm.mobile}
                onChange={handleChange}
                />
                <span className='h-5 text-red-700'>{errorForm.mobile}</span> 
                <br /> <br />

                <input 
                type="checkbox" 
                name="check"
                onChange={handleChange}
                />
                <label htmlFor="check" className='text-zinc-500 mx-2 '>Share my registration data with Superapp</label><br />
                <span className='h-5 text-red-700'>{errorForm.check}</span> 

                <button type="submit" className='bg-green-500 text-white rounded-3xl w-full h-10 font-semibold mt-12'>SIGN UP</button>
            </form>

            <p className='text-zinc-500 my-4 '>By clicking on Sign up. you agree to Superapp <span className='text-green-400'>Terms and Conditions of Use</span></p>
            <p className='text-zinc-500 '>To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp <span className='text-green-400'>Privacy Policy</span></p>
        </div>


    </div>
    </>
  )
}

export default Registration