import React from "react";
import { Link } from "react-router-dom";

const Card = ({label,percent}) => {
  return (
    <div
      className="lg:my-8 rounded shadow-sm bg-white border  duration-300 hover:-translate-y-1"
      
    >
      <Link to="link" className="cursor-pointer">
        <figure>
          <figcaption className="p-4">
            <p
              className="text-lg mb-4 font-bold leading-relaxed text-gray-500 "
             
            >{label}</p>

            <small
              className="leading-5 text-black bold"
              
            >{percent}%</small>
          </figcaption>
        </figure>
      </Link>
    </div>
  );
};

export default Card;
