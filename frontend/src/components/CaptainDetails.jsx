import React from 'react'
import Captain_Profile_Pic from "../images/captain_profile_pic.jpg";

const CaptainDetails = () => {
    return (
        <div>
            <div className='flex items-center justify-between'>

                <div className='flex items-center justify-start gap-3'>
                    <img className='h-10 rounded-full object-cover' src={Captain_Profile_Pic} />
                    <h4 className='text-xl font-bold'>Harsh Patel</h4>
                </div>

                <div className='text-right'>
                    <h4 className='text-xl font-bold'>₹295.0</h4>
                    <p className='text-sm text-gray-500 font-medium'>Earned</p>
                </div>

            </div>

            <div className='flex bg-gray-100 rounded-lg my-5 p-3 justify-center gap-5 items-start'>
                <div className='text-center'>
                    <i className="text-4xl font-medium ri-time-line"></i>
                    <h5 className='text-lg mt-3 font-semibold'>10.2</h5>
                    <p className="text-sm text-gray-600" >Hours Online</p>
                </div>
                <div className='text-center'>
                    <i className="text-4xl  font-medium ri-speed-up-line"></i>
                    <h5 className='text-lg mt-3 font-semibold'>10.2</h5>
                    <p className="text-sm text-gray-600" >Hours Online</p>
                </div>
                <div className='text-center'>
                    <i className="text-4xl font-medium ri-booklet-line"></i>
                    <h5 className='text-lg mt-3 font-semibold'>10.2</h5>
                    <p className="text-sm text-gray-600" >Hours Online</p>
                </div>
            </div>
        </div>
    )
}

export default CaptainDetails