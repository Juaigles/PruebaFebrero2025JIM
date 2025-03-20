import React from 'react'

const Buttons = ({ img, flag, tons, logos }) => {
    return (
        <div className='font-roboto w-[269px] h-[295px] border border-[#6C757D] rounded-md flex flex-col text-black'>
            <div className='relative '>
                {
                    img[1] ?
                        <img className='absolute  right-2 bottom-2 w-[34px] h-[29px]' src={img[1]} /> : null
                }
                <img src={img ? img[0] : null} alt="IMG" className='' />
            </div>
            <div className='flex flex-col gap-2 px-[10px] py-[6px] '>
                <div className='flex justify-between text-[12px] '>

                    <div className='flex gap-[10px] h-6'>
                        <div className='flex items-center gap-2 '>

                            <img src={flag} alt="" className='h-3 w-4' />
                            <p>2021</p>
                        </div>
                    </div>
                    <div className=' flex flex-col  text-right'>
                        <p>Available Tons <br />{tons}</p>
                    </div>
                </div>
                <div className='flex flex-col gap-[8px]'>
                    <a className='font-bold text-[#296480] text-[16px] leading-[14.63px]'>Project name</a>
                    <p className=' text-[12px] leading-[15px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae earum alias autem nulla quaerat! Quod rerum voluptatum facere perferendis </p>
                </div>
                <hr />
                <div className='flex items-center  gap-1'>
                    {logos.map((logo) => (

                        <img src={logo} alt="" />

                    ))}
                </div>
            </div>
        </div>
    )
}

export default Buttons