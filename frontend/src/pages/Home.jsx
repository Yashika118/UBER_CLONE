import React, { useRef, useState } from 'react'
import Uber_Logo from "../images/Uber_Logo.png";
import Uber_Map from "../images/Uber_Map.gif";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from '../components/LocationSearchPanel.jsx';
import VehiclePanel from '../components/VehiclePanel.jsx';
import ConfirmedRide from '../components/ConfirmedRide.jsx';
import WaitingForDriver from '../components/WaitingForDriver.jsx';
import LookingForDriver from '../components/LookingForDriver.jsx';

const Home = () => {

  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const vehiclePanelRef=useRef(null);
  const panelRef = useRef(null);      // to name the panel open div
  const panelCloseRef = useRef(null); // to name the panel close button
  const confirmedRidePanelRef=useRef(null);
  const vehicleFoundRef=useRef(null);
  const waitingForDriverRef=useRef(null);
  const [vehiclePanelOpen,setVehiclePanelOpen]=useState(false);
  const [confirmedRidePanel,setConfirmedRidePanel]=useState(false);
  const [vehicleFound,setVehicleFound]=useState(false);
  const [waitingForDriver,setWaitingForDriver]=useState(false);


  const submitHandler = (e) => {
    e.preventDefault();
  }

  useGSAP(function () {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: "70%",
        padding: 24
        //opacity:1
      })
      gsap.to(panelCloseRef.current, {
        opacity: 1
      })
    } else {
      gsap.to(panelRef.current, {
        height: "0%",
        padding: 20
        //opacity:0
      })
      gsap.to(panelCloseRef.current, {
        opacity: 0
      })
    }
  }, [panelOpen])


  useGSAP(function (){
    if(vehiclePanelOpen){
      gsap.to(vehiclePanelRef.current,{
        transform:"translateY(0)"
      })
    }else{
      gsap.to(vehiclePanelRef.current,{
        transform:"translateY(100%)"
      })
    }
  },[vehiclePanelOpen])

  useGSAP(function (){
    if(confirmedRidePanel){
      gsap.to(confirmedRidePanelRef.current,{
        transform:"translateY(0)"
      })
    }else{
      gsap.to(confirmedRidePanelRef.current,{
        transform:"translateY(100%)"
      })
    }
  },[confirmedRidePanel])

  useGSAP(function (){
    if(vehicleFound){
      gsap.to(vehicleFoundRef.current,{
        transform:"translateY(0)"
      })
    }else{
      gsap.to(vehicleFoundRef.current,{
        transform:"translateY(100%)"
      })
    }
  },[vehicleFound])

  useGSAP(function (){
    if(waitingForDriver){
      gsap.to(waitingForDriverRef.current,{
        transform:"translateY(0)"
      })
    }else{
      gsap.to(waitingForDriverRef.current,{
        transform:"translateY(100%)"
      })
    }
  },[waitingForDriver])



  return (
    <div className='h-screen relative overflow-hidden'>
      <img className='w-16 absolute left-5 top-5' src={Uber_Logo} />

      {/*Uber Map Image */}
      <div  className='h-screen w-screen'>
        <img className='h-full w-full object-cover' src={Uber_Map} />
      </div>

      <div className='flex flex-col justify-end h-screen absolute top-0 w-full '>

        {/* Find a trip Panel */}
        <div className='h-[30%] p-6 bg-white relative'>

          {/* rimix icon */}
          <p
            ref={panelCloseRef}
            onClick={() => { setPanelOpen(false) }}
            className='p-1 text-center w-[93%] absolute opacity-0 top-0 right-6 text-[25px] font-bold'
          >
            <i className="text-gray-400 ri-arrow-down-wide-line"></i>
          </p>

          <p className='text-2xl font-bold'>Find a trip</p>

          <form onSubmit={(e) => {
            submitHandler(e);
          }}>

            <div className='line absolute h-16 w-1 top-[52%] left-10 bg-black rounded-full'></div>

            <input
              onClick={() => {
                setPanelOpen(true);
              }}
              value={pickup}
              onChange={(e) => {
                setPickup(e.target.value);
              }}
              className='bg-[#eeeeee] px-12 py-2 text-lg rounded-lg w-full mt-5'
              type="text"
              placeholder="Add a pick-up location"
            />

            <input
              onClick={() => {
                setPanelOpen(true);
              }}
              value={destination}
              onChange={(e) => {
                setDestination(e.target.value);
              }}
              className='bg-[#eeeeee] px-12 py-2 text-lg rounded-lg w-full mt-3'
              type="text"
              placeholder="Enter your destination"
            />

          </form>

        </div>

        {/* location search panel */}
        <div ref={panelRef} className=' bg-white h-0'>
          <LocationSearchPanel  setPanelOpen={setPanelOpen}  setVehiclePanelOpen={setVehiclePanelOpen} />
        </div>

      </div>

      {/* vehicle Panel :  div that show car,auto etc */}
      <div ref={vehiclePanelRef} className='fixed w-full z-10 bg-white bottom-0 px-3 py-8 pt-12 translate-y-full '>
        <VehiclePanel setConfirmedRidePanel={setConfirmedRidePanel} setVehiclePanelOpen={setVehiclePanelOpen} />
      </div>
      
      {/* confirmedRide Panel : to see details of particular vehicle */}
      <div ref={confirmedRidePanelRef} className='fixed w-full z-10 bg-white bottom-0 px-3 py-6 pt-12 translate-y-full '>
        <ConfirmedRide setConfirmedRidePanel={setConfirmedRidePanel} setVehicleFound={setVehicleFound} />
      </div>

      {/* After confirm a ride ,looking for a driver */}
      <div ref={vehicleFoundRef} className='fixed w-full z-10 bg-white bottom-0 px-3 py-6 pt-12 translate-y-full '>
       <LookingForDriver setVehicleFound={setVehicleFound} />
      </div>

      {/* Waiting for driver */}
      <div ref={waitingForDriverRef}  className='fixed w-full z-10 bg-white bottom-0 px-3 py-6 pt-12  '>
       <WaitingForDriver setWaitingForDriver={setWaitingForDriver}  />
      </div>

    </div>
  )
}

export default Home