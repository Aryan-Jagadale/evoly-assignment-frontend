import React from "react";

function Tooltip() {
  return (
    <>
      <div>
        <div className=" shadow-md absolute w-[20vw] left-[-8rem] border z-20 ">
          <div className="mx-auto px-4 py-4 bg-white rounded relative">
          
            <p className="text-sm font-semibold leading-none text-gray-800">
              Tooltip Title
            </p>
            <p className=" text-xs leading-none text-gray-600 pt-2 pb-2">
              Tooltip Description will come here!
            </p>
            
            
          </div>
        </div>

        <style>
          {`
  body{
    background:rgb(229 231 235);
}
  `}
        </style>
      </div>
    </>
  );
}

export default Tooltip;
