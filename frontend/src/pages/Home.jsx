import React, { useRef, useState } from 'react'
import Uber_Logo from "../images/Uber_Logo.png";
import Uber_Map from "../images/Uber_Map.gif";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";

const Home = () => {

  const [pickup,setPickup]=useState("");
  const [destination,setDestination]=useState("");
  const [panelOpen,setPanelOpen]=useState(false);
  const panelRef=useRef(null);      // to name the panel open div
  const panelCloseRef=useRef(null); // to name the panel close button


  const submitHandler = (e) => {
    e.preventDefault();
  }

  useGSAP(function(){
    if(panelOpen){
      gsap.to(panelRef.current,{
        height:"70%",
        //opacity:1
      })
      gsap.to(panelCloseRef.current,{
        opacity:1
      })
    }else{
      gsap.to(panelRef.current,{
        height:"0%",
        //opacity:0
      })
      gsap.to(panelCloseRef.current,{
        opacity:0
      })
    }
  },[panelOpen])

  return (
    <div className='h-screen relative'>
      <img className='w-16 absolute left-5 top-5' src={Uber_Logo} />

      <div className='h-screen w-screen'>
        {/* temp image */}
        <img className='h-full w-full object-cover' src={Uber_Map} />
      </div>

      <div className='flex flex-col justify-end h-screen absolute top-0 w-full '>

        <div className='h-[30%] p-6 bg-white relative'>

          <p 
            ref={panelCloseRef}
            onClick={()=>{setPanelOpen(false)}} 
            className='absolute opacity-0 top-6 right-6 text-[25px] font-bold'
          >
            <i className="ri-arrow-down-wide-line"></i>
          </p>

          <p className='text-3xl font-bold'>Find a trip</p>

          <form onSubmit={(e)=>{
            submitHandler(e);
          }}>

            <div className='line absolute h-16 w-1 top-[34%] left-10 bg-black rounded-full'></div>

            <input 
              onClick={()=>{
                setPanelOpen(true);
              }}
              value={pickup}
              onChange={(e)=>{
                setPickup(e.target.value);
              }}
              className='bg-[#eeeeee] px-12 py-2 text-lg rounded-lg w-full mt-5' 
              type="text" 
              placeholder="Add a pick-up location" 
            />

            <input 
              onClick={()=>{
                setPanelOpen(true);
              }}
              value={destination}
              onChange={(e)=>{
                setDestination(e.target.value);
              }}
              className='bg-[#eeeeee] px-12 py-2 text-lg rounded-lg w-full mt-3' 
              type="text" 
              placeholder="Enter your destination" 
            />

          </form>

        </div>

        <div ref={panelRef} className=' bg-red-500'>

        </div>
      </div>


    </div>
  )
}

export default Home