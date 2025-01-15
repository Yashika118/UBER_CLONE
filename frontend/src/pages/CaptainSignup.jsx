import React, { useContext, useState } from 'react'
import Uber_Logo from "../images/Uber_Logo.png";
import { Link } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const CaptainSignup = () => {

    const navigate=useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const [vehicleColor, setVehicleColor] = useState("");
    const [vehiclePlate, setVehiclePlate] = useState("");
    const [vehicleCapacity, setVehicleCapacity] = useState("");
    const [vehicleType, setVehicleType] = useState("");

    const { captain, setCaptain } = useContext(CaptainDataContext);

    const submitHandler = async(e) => {
        e.preventDefault();

        // setCaptainData({
        //     fullName: {
        //         firstName: firstName,
        //         lastName: lastName,
        //     },
        //     email: email,
        //     password: password,
        // })

        const captainData = {
            fullname: {
                firstname: firstName,
                lastname: lastName,
            },
            email: email,
            password: password,
            vehicle:{
                color:vehicleColor,
                plate:vehiclePlate,
                capacity:vehicleCapacity,
                vehicleType:vehicleType,
            }
        }

        const response=await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`,captainData);

        if(response.status===201){
            const data=response.data;
            setCaptain(data.captain);
            localStorage.setItem("token",data.token);
            navigate("/captain-home");
        }


        setEmail("");
        setPassword("");
        setFirstName("");
        setLastName("");
        setVehicleCapacity("");
        setVehicleColor("");
        setVehiclePlate("");
        setVehicleType("");
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
                                onChange={(e) => {
                                    setFirstName(e.target.value);
                                }}
                                className='bg-[#eeeeee] w-1/2 rounded px-4 py-3 border  text-lg placeholder:text-base'
                                type="text"
                                placeholder="First name"
                            />
                            <input
                                required
                                value={lastName}
                                onChange={(e) => {
                                    setLastName(e.target.value);
                                }}
                                className='bg-[#eeeeee]  w-1/2 rounded px-4 py-3 border  text-lg placeholder:text-base'
                                type="text"
                                placeholder="Last name"
                            />
                        </div>

                        <h3 className='text-xl mb-2  font-semibold'>What's your email ? </h3>
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

                        
                        <h3 className='text-xl mb-2 font-semibold'>Enter your vehicle details.</h3>
                        <div className='flex gap-4 mb-7'>
                            <input
                                required
                                value={vehiclePlate}
                                onChange={(e) => {
                                    setVehiclePlate(e.target.value);
                                }}
                                className='bg-[#eeeeee] w-1/2 rounded px-4 py-3 border  text-lg placeholder:text-base'
                                type="text"
                                placeholder="plate"
                            />
                            <input
                                required
                                value={vehicleType}
                                onChange={(e) => {
                                    setVehicleType(e.target.value);
                                }}
                                className='bg-[#eeeeee]  w-1/2 rounded px-4 py-3 border  text-lg placeholder:text-base'
                                type="text"
                                placeholder="type"
                            />
                        </div>
                        <div className='flex gap-4 mb-7'>
                            <input
                                required
                                value={vehicleColor}
                                onChange={(e) => {
                                    setVehicleColor(e.target.value);
                                }}
                                className='bg-[#eeeeee] w-1/2 rounded px-4 py-3 border  text-lg placeholder:text-base'
                                type="text"
                                placeholder="color"
                            />
                            <input
                                required
                                value={vehicleCapacity}
                                onChange={(e) => {
                                    setVehicleCapacity(e.target.value);
                                }}
                                className='bg-[#eeeeee]  w-1/2 rounded px-4 py-3 border  text-lg placeholder:text-base'
                                type="number"
                                placeholder="capacity"
                            />
                        </div>

                        <button
                            className='bg-[#111] text-white font-semibold mb-2 rounded px-4 py-3  w-full text-xl placeholder:text-base'
                        >
                            Create Account
                        </button>

                    </form>
                    <p className='text-center'>
                        Already have an account? {" "}
                        <Link
                            to="/captain-login" className='text-blue-600'
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

export default CaptainSignup