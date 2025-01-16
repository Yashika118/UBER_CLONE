import React from 'react'
import Uber_Map from "../images/Uber_Map.gif";
import Uber_car from "../images/Uber_car.png";
import Uber_Logo from "../images/Uber_Logo.png";
import { Link } from 'react-router-dom';

const Riding = () => {
    return (
        <div className='h-screen'>

            <Link to="/home">
                <img className='w-16 absolute left-5 top-5' src={Uber_Logo} />
            </Link>

            {/* Uber_map */}
            <div className='h-1/2'>
                <img className='h-full w-full object-cover' src={Uber_Map} />
            </div>

            {/* location details and payment */}
            <div className='h-1/2 p-4'>

                <div className='flex items-center justify-between mb-5'>
                    <img className='ml-10 h-[110px] -mb-14' src={Uber_car} />
                    <div className='mr-5 text-right'>
                        <h2 className='text-lg font-medium -mb-1'>Sarthak</h2>
                        <h4 className='text-lg font-bold -mb-1'>MP04 AB 1234</h4>
                        <p className='text-sm text-gray-500'>Maruti Suzuki Alto</p>
                    </div>
                </div>

                <div className='flex flex-col gap-2 justify-between items-center'>

                    <div className='w-full mt-5'>

                        <div className='flex items-center gap-3 p-3 border-b-2'>
                            <i className="text-2xl ri-map-pin-fill"></i>
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

                </div>

                {/* payment button */}
                <button className='w-full mt-5 bg-green-500 text-white font-semibold p-2 rounded-lg mb-5'>Make a payment</button>

            </div>
        </div>
    )
}

export default Riding