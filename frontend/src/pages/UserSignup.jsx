import React, { useContext, useState } from 'react'
import Uber_Logo from "../images/Uber_Logo.png";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserDataContext } from '../context/userContext';

const UserSignup = () => {

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("");
    const [userData,setUserData]=useState({});

    const navigate=useNavigate();

    const {user,setUser}=useContext(UserDataContext);

    const submitHandler = async(e) => {
        e.preventDefault();

        // setUserData({
        //     fullName:{
        //         firstName:firstName,
        //         lastName:lastName,
        //     },
        //     email:email,
        //     password:password,
        // })
        // console.log(userData);

        const newUser={
            fullname:{
                firstname:firstName,
                lastname:lastName,
            },
            email:email,
            password:password,
        }

        const response=await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`,newUser);

        if(response.status===201){
            const data=response.data;
            setUser(data.user);
            localStorage.setItem("token",data.token);
            navigate("/home");
        }


        setEmail("");
        setPassword("");
        setFirstName("");
        setLastName("");
    }

    return (
        <div>
            <img className='w-20 mt-8 ml-8' src={Uber_Logo} />
            <div className='p-7 flex flex-col justify-between h-screen w-full lg:w-[50%] items-center mx-auto '>
                <div className='shadow-lg lg:p-11 p-4 rounded-lg flex flex-col '>
                    <form onSubmit={(e) => {
                        submitHandler(e);
                    }}>
                        <h3 className='text-xl mb-2 font-semibold'>What's your Name ? </h3>
                        <div className='flex gap-4 mb-7'>
                            <input
                                required
                                value={firstName}
                                onChange={(e)=>{
                                    setFirstName(e.target.value);
                                }}
                                className='bg-[#eeeeee] w-1/2 rounded px-4 py-3 border  text-lg placeholder:text-base'
                                type="text"
                                placeholder="First name"
                            />
                            <input
                                required
                                value={lastName}
                                onChange={(e)=>{
                                    setLastName(e.target.value);
                                }}
                                className='bg-[#eeeeee]  w-1/2 rounded px-4 py-3 border  text-lg placeholder:text-base'
                                type="text"
                                placeholder="Last name"
                            />
                        </div>

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
                            Create Account
                        </button>

                    </form>
                    <p className='text-center'>
                        Already have an account? {" "}
                        <Link
                            to="/login" className='text-blue-600'
                        >
                            Login
                        </Link>
                    </p>
                    <div className='mt-28 lg:mt-10'>
                       <p className='text-xs text-slate-400'>
                            By proceeding, you consent to get calls, WhatsApp or SMS messages, including by automated means, from Uber and its affiliates to the number provided
                       </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default UserSignup