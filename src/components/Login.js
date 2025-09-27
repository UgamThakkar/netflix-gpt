import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate'

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleButtonClick = () =>{
        const message = checkValidData(email.current.value, password.current.value)
        setErrorMessage(message);
    }

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };

    return (
        <div>
            <Header />
            <div className='absolute'>
                <img src='https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt="logo" />
            </div>
            <form onSubmit={(e)=>e.preventDefault()} className='absolute w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80  '>
                <h1 className='font-bold text-3xl py-3 p-2'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && <input type='text' placeholder='Full Name' className='p-4 my-4 w-full rounded-md bg-gray-700'/>}
                <input ref={email} type='email' placeholder='Email or Phone Number' className='p-4 my-4 w-full rounded-md bg-gray-700'/>
                <input  ref={password} type='password' placeholder='Enter Password' className='p-4 my-4 w-full rounded-md bg-gray-700'/>
                {!isSignInForm && <input type='password' placeholder='Confirm Password' className='p-4 my-4 w-full rounded-md bg-gray-700'/>}
                <p className='text-red-600 font-bold text-lg py-2'>{errorMessage}</p>
                <button className='p-4 my-6 w-full bg-red-700 rounded-lg' onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p className='py-4 cursor-pointer' onClick={toggleSignInForm}> {isSignInForm ? "New to Netflix? Sign Up Now!" :"Already a member? Sign In Now!"}</p>
            </form>
        </div>
    )

    
}

export default Login