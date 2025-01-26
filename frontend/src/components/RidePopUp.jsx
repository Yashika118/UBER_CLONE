import React from 'react';
import User_Profile_Pic from "../images/user_profile_pic.jpg";

const RidePopUp = (props) => {
    return (
        <div>
            <p
                onClick={() => { props.setRidePopupPanel(false) }}
                className='p-1 text-center w-[93%] absolute top-0 right-6 text-[25px] font-bold'
            >
                <i className="text-gray-400 ri-arrow-down-wide-line"></i>
            </p>

            <h3 className='font-bold text-2xl mb-4'>New Ride Available !</h3>

            <div className='flex items-center justify-between p-3 bg-gray-100 shadow-md rounded-lg mt-6'>
                <div className='flex items-center gap-3'>
                    <img className='h-10 rounded-full object-cover' src={User_Profile_Pic} />
                    <h4 className='text-xl font-bold'>Kritika Rana</h4>
                </div>
                <div className='flex flex-col text-right'>
                    <h5 className='text-xl font-bold'>₹193.0</h5>
                    <h5 className='text-sm text-gray-600 font-bold -mt-1'>2.2 KM</h5>
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

                <div className='mt-5 flex w-full items-center justify-between'>

                    <button onClick={() => {
                        props.setRidePopupPanel(false);
                    }} className='bg-red-600 text-white font-semibold p-2 px-4 rounded-lg'>Ignore</button>
                    
                    <button onClick={() => {
                        props.setConfirmRidePopupPanel(true);
                        props.setRidePopupPanel(false);
                    }} className=' bg-green-500 text-white font-semibold p-2 px-4 rounded-lg'>Accept</button>
                </div>

            </div>

        </div>
    )
}

export default RidePopUp