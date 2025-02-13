import React from 'react'

const Buttons = ({ }) => {
    return (
        <div className='font-roboto w-[268px] h-[295px] border border-[#E5E5E5] flex flex-col'>
            <div className='w-[268px] h-[110px] border'>
                <img src={null} alt="IMG" className=''/>
            </div>
            <div className='px-[12px] '>
                <div className='flex justify-between'>

                    <div className='flex gap-[10px]'>
                        flag
                        <p>2021</p>
                    </div>
                    <div>
                        <p>Available Tons <br />1995.459.225</p>
                    </div>
                </div>
                <div className='flex flex-col gap-[8px]'>
                    <h3 className='font-bold text-[#296480] text-[16px] leading-[14.63px]'>Title</h3>
                    <p className='w-[233px] h-[78px] text-[12px] leading-[15px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae earum alias autem nulla quaerat! Quod rerum voluptatum facere perferendis </p>
                </div>
                <hr />
                <div>
                    logo
                </div>
            </div>
        </div>
    )
}

export default Buttons