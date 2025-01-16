import React from 'react'

const LocationSearchPanel = (props) => {

    const loactions = [
        "24B, Near Kapoor's cafe, Sheriyans Coding School",
        "22B, Near Kapoor's cafe, Sheriyans Coding School",
        "27B, Near Kapoor's cafe, Sheriyans Coding School"
    ]

    return (
        <div>

            {/* this is just a sample data */}

            {
                loactions.map(function (element,index) {
                    return (
                        <div key={index} onClick={()=>{
                            props.setVehiclePanelOpen(true)
                            props.setPanelOpen(false)
                            }} className='flex border-2 p-3 rounded-xl border-white active:border-black  items-center gap-4 my-2 justify-start'>
                            <h2 className=' bg-[#eee] flex  items-center justify-center h-10 w-10 p-2 text-[23px] rounded-lg'><i className="ri-map-pin-fill"></i></h2>
                            <h4 className='text-[15px] font-medium'>{element}</h4>
                        </div>
                    )
                })
            }

            




        </div>
    )
}

export default LocationSearchPanel