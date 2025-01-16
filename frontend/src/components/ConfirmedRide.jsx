import React from 'react'
import Uber_car from "../images/Uber_car.png";


const ConfirmedRide = (props) => {
    return (
        <div>

            <p
                onClick={() => { props.setConfirmedRidePanel(false) }}
                className='p-1 text-center w-[93%] absolute top-0 right-6 text-[25px] font-bold'
            >
                <i className="text-gray-400 ri-arrow-down-wide-line"></i>
            </p>

            <h3 className='font-bold text-2xl mb-4'>Confirmed your ride</h3>

            <div className='flex flex-col gap-2 justify-between items-center'>

                <img className='h-[150px] -mb-14' src={Uber_car} />

                <div className='w-full mt-5'>

                    <div className='flex items-center gap-3 p-3 border-b-2'>
                        <i className="text-2xl ri-map-pin-fill"></i>
                        <div>
                            <h3 className='text-lg font-semibold'>562/11-A </h3>
                            <p className='text-sm -mt-1 text-gray-600'>Kankariya Talab, Bhopal</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-3 p-3 border-b-2'>
                        <i className="text-2xl ri-map-pin-user-fill"></i>
                        <div>
                            <h3 className='text-lg font-semibold'>562/11-A </h3>
                            <p className='text-sm -mt-1 text-gray-600'>Kankariya Talab, Bhopal</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-3 p-3'>
                        <i className="text-2xl ri-money-rupee-circle-fill"></i>
                        <div>
                            <h3 className='text-lg font-semibold'>₹193.20 </h3>
                            <p className='text-sm -mt-1 text-gray-600'>Payment by cash</p>
                        </div>
                    </div>

                </div>

                <button onClick={()=>{
                    props.setConfirmedRidePanel(false);
                    props.setVehicleFound(true)
                }} className='w-full mt-5 bg-green-500 text-white font-semibold p-2 rounded-lg'>Confirm</button>

            </div>


        </div>
    )
}

export default ConfirmedRide