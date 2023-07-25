import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
import Dropdown from "./Dropdown";

const Row = ({ userInfo }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [menuVisible, setMenuVisible] = useState(true);

  const { id, name, email, orderId, date, review, status } = userInfo;

  const navigate = useNavigate();

  const handleClick = (e) => {
    //alert("Clicked");
    navigate(`/app/followup-reminder/${id}`);
  };

  return (
    <tr
      className="hover:bg-gray-50"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => {
        setIsVisible(false);
        setMenuVisible(false);
      }}
    >
      <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
        <div className="relative h-10 w-10">
          <img
            className="h-full w-full rounded-full object-cover object-center"
            src="https://i.pravatar.cc/48"
            alt=""
          />
          <span className="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
        </div>
        <div className="text-sm">
          <div className="font-medium text-gray-700">{name}</div>
          <div className="text-gray-400">{email}</div>
        </div>
      </th>
      <td className="px-6 py-4">{orderId}</td>
      <td className="px-6 py-4">{date}</td>
      <td className="px-6 py-4">
        <div className="flex gap-2">
          <span className="inline-flex items-center gap-1 rounded bg-slate-100 px-2 py-1 text-xs font-semibold text-black">
            {review}
          </span>
        </div>
      </td>
      <td className="px-6 py-4">
        <span
          className="inline-flex items-center gap-1 rounded-full bg-yellow-50 px-2 py-1 text-xs font-semibold text-gray-600 cursor-pointer hover:bg-yellow-100"
          onClick={handleClick}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-yellow-600"></span>
          {status}
        </span>
      </td>
      <td className="px-6 py-4">
        <div
          className={`flex justify-end relative gap-4 ${
            isVisible ? "visible" : "invisible"
          }`}
        >
          <div>
            <BiEdit
              className="h-4 w-4 cursor-pointer"
              onClick={() => setMenuVisible(!menuVisible)}
            />
          </div>
          {menuVisible && <Dropdown />}
          <Link to="/followup-reminder">
            <BsThreeDotsVertical className="h-4 w-4" />
          </Link>
        </div>
      </td>
    </tr>
  );
};

export default Row;
