import React from 'react'
import { useState } from 'react';
import {IoIosArrowDropdown} from 'react-icons/io'
const Filter = () => {
    const optionsList = [
        {
          id: 1,
          label: "All Orders",
          total: 16,
          value: "All Orders",
        },
        {
          id: 2,
          label: "Ignored",
          value: "Ignored",
          total: 4,
        },
        {
          id: 3,
          label: "Scheduled",
          value: "Scheduled",
          total: 0,
        },
        {
          id: 4,
          label: "Send Now",
          value: "Send Now",
    
          total: 6,
        },
        {
          id: 5,
          label: "Completed",
          value: "Completed",
    
          total: 6,
        },
      ];
    const [filterselect, setFilterselect] = useState(optionsList[0].label);
    const [isvisible, setIsvisible] = useState(false)
    
  return (
    <span>
    <span className='flex gap-5 items-center'>
    
    <span className='text-md'>{filterselect}</span>
    <IoIosArrowDropdown className={`cursor-pointer ${isvisible ? "rotate-180":"rotate-0"} duration-75`} onClick={()=>setIsvisible(!isvisible)}/>
    </span>
    {
        isvisible && (
            <div className="z-10 absolute right-8">
            <div className="w-40 pl-4 mt-2 bg-white shadow rounded">
              <div className="flex  justify-between flex-col">
                <div className="flex items-center">
                  <div className=" flex flex-col">
                    {optionsList.map((menu) => (
                      <p
                        key={menu.label}
                        className="text-sm leading-normal text-left text-gray-500 py-2 cursor-pointer"
                        onClick={()=>setFilterselect(menu.label)}
                      >
                        {menu.label}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }
    </span>


  )
}

export default Filter