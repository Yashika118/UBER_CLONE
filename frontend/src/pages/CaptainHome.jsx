import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Uber_Logo from "../images/Uber_Logo.png";
import Uber_Map from "../images/Uber_Map.gif";
import CaptainDetails from '../components/CaptainDetails';
import RidePopUp from '../components/RidePopUp';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ConfirmRidePopUp from '../components/ConfirmRidePopUp';

const CaptainHome = () => {

  const [ridePopupPanel,setRidePopupPanel]=useState(true);
  const ridePopupPanelRef=useRef(null);

  const [confirmRidePopupPanel,setConfirmRidePopupPanel]=useState(false);
  const confirmRidePopupPanelRef=useRef(null);

  useGSAP(function (){
    if(ridePopupPanel){
      gsap.to(ridePopupPanelRef.current,{
        transform:"translateY(0)"
      })
    }else{
      gsap.to(ridePopupPanelRef.current,{
        transform:"translateY(100%)"
      })
    }
  },[ridePopupPanel])


  useGSAP(function (){
    if(confirmRidePopupPanel){
      gsap.to(confirmRidePopupPanelRef.current,{
        transform:"translateY(0)"
      })
    }else{
      gsap.to(confirmRidePopupPanelRef.current,{
        transform:"translateY(100%)"
      })
    }
  },[confirmRidePopupPanel])

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
      <div className='h-3/5'>
        <img className='h-full w-full object-cover' src={Uber_Map} />
      </div>

      {/* location details and payment */}
      <div className='h-2/5 p-6'>
        <CaptainDetails/>
      </div>

      {/* RidePopUp Panel */}
      <div ref={ridePopupPanelRef} className='fixed w-full z-10 bg-white bottom-0 px-3 py-8 pt-12 translate-y-full '>
        <RidePopUp setRidePopupPanel={setRidePopupPanel} setConfirmRidePopupPanel={setConfirmRidePopupPanel} />
      </div>

      {/* AcceptRidePopUp Panel */}
      <div ref={confirmRidePopupPanelRef} className='fixed w-full h-screen z-10 bg-white bottom-0 px-3 py-8 pt-12 translate-y-full '>
        <ConfirmRidePopUp setConfirmRidePopupPanel={setConfirmRidePopupPanel} setRidePopupPanel={setRidePopupPanel}  />
      </div>


    </div>
  )
}

export default CaptainHome