import React from 'react'

const Buttons = ({ img, flag, tons, logos}) => {
    return (
        <div className='font-roboto w-[268px] h-[295px] border border-[#6C757D] flex flex-col text-black'>
            <div className='w-[268px] h-[110px] border'>
                <img src={img? img: null} alt="IMG" className=''/>
            </div>
            <div className='px-[12px] '>
                <div className='flex justify-between'>

                    <div className='flex gap-[10px]  h-6'>
                        <div className=' flex h-6 items-center'>

                        <img src={flag} alt="" className='h-3 w-4'/>
                        </div>
                        <p>2021</p>
                    </div>
                    <div>
                        <p>Available Tons <br />{tons}</p>
                    </div>
                </div>
                <div className='flex flex-col gap-[8px]'>
                    <a className='font-bold text-[#296480] text-[16px] leading-[14.63px]'>Project name</a>
                    <p className='w-[233px] h-[78px] text-[12px] leading-[15px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae earum alias autem nulla quaerat! Quod rerum voluptatum facere perferendis </p>
                </div>
                <hr />
                <div>
                    <img src={logos[0]} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Buttons