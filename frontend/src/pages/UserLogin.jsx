import React, { useState } from 'react'
import Uber_Logo from "../images/Uber_Logo.png";
import { Link } from 'react-router-dom';

const UserLogin = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [userData,setUserData]=useState({});

    const submitHandler=(e)=>{
        e.preventDefault();
        
        setUserData({
            email:email,
            password:password
        })
        // console.log(userData);

        setEmail("");
        setPassword("");            // after on click login button email and password block will be empty
    }

    return (
        <div>
            <img className='w-20 mt-8 ml-8' src={Uber_Logo} />
            <div className='p-7 lg:mb-20 flex flex-col justify-between h-screen w-full lg:w-[50%] items-center mx-auto '>
                <div className='shadow-lg lg:p-11 p-4 rounded-lg flex flex-col '>
                    <form onSubmit={(e)=>{
                        submitHandler(e);
                    }}>
                        <h3 className='text-xl mb-2 font-semibold'>What's your email ? </h3>
                        <input
                            required
                            value={email}
                            onChange={(e)=>{
                                setEmail(e.target.value);
                            }}
                            className='bg-[#eeeeee] mb-7 rounded px-4 py-3 border w-full text-lg placeholder:text-base'
                            type="email"
                            placeholder="email@example.com"
                        />
                        <h3 className='text-xl mb-2 font-semibold'>Enter your password .</h3>
                        <input
                            required
                            value={password}
                            onChange={(e)=>{
                                setPassword(e.target.value);
                            }}
                            className='bg-[#eeeeee] mb-7 rounded px-4 py-3 border w-full text-lg placeholder:text-base'
                            type="password"
                            placeholder="password"
                        />
                        <button
                            className='bg-[#111] text-white font-semibold mb-2 rounded px-4 py-3  w-full text-xl placeholder:text-base'
                        >
                            Login
                        </button>
                    </form>
                    <p className='text-center'>
                        New here? {" "}
                        <Link
                            to="/signup" className='text-blue-600'
                        >
                            Create Account
                        </Link>
                    </p>
                    <div className='mt-28 lg:mt-10'>
                        <Link to="/captain-login"
                            className='bg-green-500 text-white flex items-center justify-center font-semibold mb-2 rounded px-4 py-3  w-full text-xl placeholder:text-base'
                        >
                            Sign in as Captain
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default UserLogin