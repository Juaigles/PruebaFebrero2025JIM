import React from 'react'

const SateliteButton = () => {
    return (
        <button onClick={null} className=' border-2 border-[#68B75E] rounded-lg p-2 pr-0 flex items-center justify-center max-h-10 gap-2'>

            <p className='text-[#68B75E] text-bold text-[18px]'>SATELLITE MONITORING</p>
            <img src="/Assets/satellite.png" alt="" className='' />
        </button>
    )
}

export default SateliteButton