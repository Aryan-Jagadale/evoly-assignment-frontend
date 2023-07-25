import React, { useState } from "react";
import { Link } from "react-router-dom";
import control from "../../images/control.png";
import logo from "../../images/logo.svg";
import { MdSpaceDashboard, MdOutlineChatBubbleOutline } from "react-icons/md";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const menus = [
    { title: "Dashboard", src: <MdSpaceDashboard />, link: "/" },
    {
      title: "Followup Remainder",
      src: <MdOutlineChatBubbleOutline />,
      link: "/followup-reminder",
    },
  ];
  return (
    <div
      className={` ${
        open ? "w-72" : "w-20 "
      } p-5  pt-8 relative border-r-2 duration-300`}
    >
      <img
        src={control}
        className={` border-dark-black absolute cursor-pointer -right-3 top-9 w-7 
           border-2 rounded-full  ${!open && "rotate-180"}`}
        onClick={() => setOpen(!open)}
        alt={"control"}
      />
      <div className="flex gap-x-4 items-center">
        <img
          src={logo}
          className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"}`}
          alt={"logo"}
        />
        <Link to={"/"}>
          <h1
            className={` origin-left  text-xl font-extrabold duration-200 ${
              !open && "scale-0"
            }`}
          >
            Assignment
          </h1>
        </Link>
      </div>

      <ul className="pt-6">
        {menus.map((Menu, index) => (
          <li
            key={index}
            className={`flex  rounded-md p-2 font-medium cursor-pointer hover:bg-gray-100 text-slate-500 hover:text-slate-900   text-base items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
              index === 0 && "bg-light-white"
              
            } `}
          >
            <Link to={Menu.link}>
              <p className="">{Menu.src}</p>
            </Link>
            <Link to={Menu.link}>
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
