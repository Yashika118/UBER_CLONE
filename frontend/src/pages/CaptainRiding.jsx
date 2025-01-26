import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Uber_Logo from "../images/Uber_Logo.png";
import Uber_Map from "../images/Uber_Map.gif";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import RidePopUp from '../components/RidePopUp';
import CaptainDetails from '../components/CaptainDetails';
import ConfirmRidePopUp from '../components/ConfirmRidePopUp';
import FinishRide from '../components/FinishRide';



const CaptainRiding = () => {

    const [completeRidePanel,setCompleteRidePanel]=useState(true);
    const completeRidePanelRef=useRef(null);
    const [finishRidePanel,setFinishRidePanel]=useState(false);
    const finishRidePanelRef=useRef(null);

    useGSAP(function () {
        if (completeRidePanel) {
            gsap.to(completeRidePanelRef.current, {
                transform: "translateY(0)"
            })
        } else {
            gsap.to(completeRidePanelRef.current, {
                transform: "translateY(100%)"
            })
        }
    }, [completeRidePanel])

    useGSAP(function () {
        if (finishRidePanel) {
            gsap.to(finishRidePanelRef.current, {
                transform: "translateY(0)"
            })
        } else {
            gsap.to(finishRidePanelRef.current, {
                transform: "translateY(100%)"
            })
        }
    }, [finishRidePanel])






    return (
        <div className='h-screen'>

            <div className='fixed p-3 top-0 gap-14 flex flex-col  justify-between w-full'>
                <Link to="/home">
                    <img className='w-16 absolute left-5 top-5' src={Uber_Logo} />
                </Link>

                <Link to="/captain-logout" className='h-10 w-10 ml-3 bg-red-600 flex items-center justify-center rounded-full'>
                    <i className=" text-xl font-semibold text-white ri-logout-box-line"></i>
                </Link>
            </div>

            {/* Uber_map */}
            <div className='h-4/5'>
                <img className='h-full w-full object-cover' src={Uber_Map} />
            </div>

            {/* location details and payment */}
            <div ref={completeRidePanelRef} className='h-1/5 p-6 bg-yellow-300 rounded-md flex items-center justify-between relative'>
                <p
                    onClick={() => {
                        setCompleteRidePanel(false);
                        setFinishRidePanel(true) 
                    }}
                    className='p-1 text-center w-[85%] absolute top-0 right-6 text-[25px] font-bold'
                >
                    <i className="text-gray-400 ri-arrow-up-wide-line"></i>
                </p>
                <h4 className='text-2xl font-bold mt-5'>4 km away</h4>
                <button 
                    onClick={()=>{
                        setCompleteRidePanel(false);
                        setFinishRidePanel(true) 
                    }}
                    className='w-full mt-5 flex justify-center bg-green-700 text-white font-semibold p-2 rounded-lg'>
                        Complete Ride
                </button>
            </div>

            {/* finish ride panel  */}
            <div ref={finishRidePanelRef} className='fixed w-full z-10 bg-white bottom-0 px-3 py-8 pt-12 translate-y-full '>
                <FinishRide setFinishRidePanel={setFinishRidePanel} />
            </div>


        </div>
    )
}

export default CaptainRiding