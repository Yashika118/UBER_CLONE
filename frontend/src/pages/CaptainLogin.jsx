import React, { useContext, useState } from 'react'
import Uber_Logo from "../images/Uber_Logo.png";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CaptainDataContext } from '../context/CaptainContext';



const CaptainLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const {captain,setCaptain}=useContext(CaptainDataContext);
    const navigate=useNavigate();


    
    const submitHandler = async(e) => {
        e.preventDefault();

        // setCaptainData({
        //     email: email,
        //     password: password
        // })
        
        const captainData = {
            email: email,
            password: password
        }

        const response=await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`,captainData);

        if(response.status===200){
            const data=response.data;
            setCaptain(data.captain);
            localStorage.setItem("token",data.token);
            navigate("/captain-home");
        }

        setEmail("");
        setPassword("");            // after on click login button email and password block will be empty
    }
    return (
        <div>
            <img className='w-20 mt-8 ml-8' src={Uber_Logo} />
            <div className='p-7 lg:mb-20 flex flex-col justify-between h-screen w-full lg:w-[50%] items-center mx-auto '>
                <div className='shadow-lg lg:p-11 p-4 rounded-lg flex flex-col '>
                    <form onSubmit={(e) => {
                        submitHandler(e);
                    }}>
                        <h3 className='text-xl mb-2 font-semibold'>What's your email ? </h3>
                        <input
                            required
                            value={email}
                            onChange={(e) => {
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
                            onChange={(e) => {
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
                            to="/captain-signup" className='text-blue-600'
                        >
                            Create Account
                        </Link>
                    </p>
                    <div className='mt-28 lg:mt-10'>
                        <Link to="/login"
                            className='bg-yellow-500 text-white flex items-center justify-center font-semibold mb-2 rounded px-4 py-3  w-full text-xl placeholder:text-base'
                        >
                            Sign in as User
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CaptainLogin