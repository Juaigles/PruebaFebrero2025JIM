import React from 'react'

const SelectButtons = () => {
    const buttonText = [
        ["Assets/biodiversity_stamp2.png", "Biodiversity"], [null, "Country"], [null, "Price"], [null, "Methodology"], [null, "In Progress"], [null, "All Projects"]
    ]
    return (
        <div className='flex  gap-[20px] justify-end'>
            {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className='' >
                    <div className='flex items-center border gap-2 border-black px-2  rounded-md'  >
                        {buttonText[index][0]? 
                        <img src={buttonText[index][0]} className='h-5' /> :null
                    }
                        <option value="">{buttonText[index][1]}</option>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default SelectButtons