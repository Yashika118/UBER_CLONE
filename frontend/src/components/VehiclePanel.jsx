import React from 'react'
import Uber_car from "../images/Uber_car.png";
import Uber_bike from "../images/Uber_bike.png";
import Uber_auto from "../images/Uber_auto.png";

const VehiclePanel = (props) => {
    return (
        <div>

            <p
                onClick={() => { props.setVehiclePanelOpen(false) }}
                className='p-1 text-center w-[93%] absolute top-0 right-6 text-[25px] font-bold'
            >
                <i className="text-gray-400 ri-arrow-down-wide-line"></i>
            </p>

            <h3 className='font-bold text-2xl mb-4'>Choose a vehicle</h3>

            <div onClick={()=>{
                props.setConfirmedRidePanel(true)
                props.setVehiclePanelOpen(false);
            }} className='flex border-2 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between'>

                <img className='h-16' src={Uber_car} />
                <div className='ml-3 w-1/2'>
                    <h4 className='text-lg font-medium'>UberGo <span className='text-[13px]'> <i className="ri-user-3-fill"></i> 4 </span></h4>
                    <h5 className='text-sm '>2 mins away</h5>
                    <p className='font-normal text-xs text-gray-500'>Affordable, compact rides</p>
                </div>
                <h2 className='text-xl font-bold'>₹193.20</h2>

            </div>

            <div onClick={()=>{
                props.setConfirmedRidePanel(true)
                props.setVehiclePanelOpen(false);
            }} className='flex border-2 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between'>

                <img className='h-16' src={Uber_bike} />
                <div className='ml-3 w-1/2'>
                    <h4 className='text-lg font-medium'>Moto <span className='text-[13px]'> <i className="ri-user-3-fill"></i> 1 </span></h4>
                    <h5 className='text-sm '>3 mins away</h5>
                    <p className='font-normal text-xs text-gray-500'>Affordable, motorcycle rides</p>
                </div>
                <h2 className='text-xl font-bold'>₹65.00</h2>

            </div>

            <div onClick={()=>{
                props.setConfirmedRidePanel(true)
                props.setVehiclePanelOpen(false);
            }} className='flex border-2 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between'>

                <img className='h-16' src={Uber_auto} />
                <div className='ml-3 w-1/2'>
                    <h4 className='text-lg font-medium'>UberAuto <span className='text-[13px]'> <i className="ri-user-3-fill"></i> 3 </span></h4>
                    <h5 className='text-sm '>2 mins away</h5>
                    <p className='font-normal text-xs text-gray-500'>Affordable, compact rides</p>
                </div>
                <h2 className='text-xl font-bold'>₹118.68</h2>

            </div>
        </div>
    )
}

export default VehiclePanel