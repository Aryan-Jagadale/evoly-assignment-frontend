import React from "react";
import Row from "./Row";
import Card from "./Card";

const FollowupRemainder = () => {
  const optionsList = [
    {
      id: 1,
      name: "All Orders",
      total: 16,
    },
    {
      id: 2,
      name: "Ignored",
      total: 4,
    },
    {
      id: 3,
      name: "Scheduled",
      total: 0,
    },
    {
      id: 4,
      name: "Send Now",
      total: 6,
    },
    {
      id: 5,
      name: "Completed",
      total: 6,
    },
  ];

  const user = [
    {
      id: 1,
      name: "Zeph Burks",
      email: "orci.quis@icloud.ca",
      orderId: "#123456789",
      date: "Jan 12,2021",
      review: "None",
      status: "Send Now",
    },
    {
      id: 11,
      name: "Walker Nieves",
      email: "consectetuer.adipiscing@hotmail.org",
      orderId: "#1234567890",
      date: "Jan 12,2021",
      review: "None",
      status: "Send Now",
    },
    {
      id: 100,
      name: "Erin Gates",
      email: "in.faucibus.morbi@yahoo.com",
      orderId: "#12345670",
      date: "Jan 12,2021",
      review: "None",
      status: "Send Now",
    },
    {
      id: 21,
      name: "Zorita Parrish",
      email: "eu.metus@google.couk",
      orderId: "#23456789",
      date: "Jan 12,2021",
      review: "None",
      status: "Send Now",
    },
    {
      id: 108,
      name: "Nayda Gilmore",
      email: "eget@icloud.net",
      orderId: "#1234568789",
      date: "Jan 12,2021",
      review: "None",
      status: "Send Now",
    },
  ];

  return (
    <div>
      {/*Card */}
      <div className="grid gap-8 px-4 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      
      <Card label={"Review rate"} percent={12.27}/>
      <Card label={"Review score"} percent={5.5}/>
      <Card label={"Total reviews"} percent={58.27}/>
      <Card label={"Send now"} percent={2}/>

      
      
      
      
      
      
      </div>

      <div className="overflow-x-scroll md:overflow-auto rounded-lg border border-gray-200 shadow m-5">
        {/*Follow up Title */}
        <div className="bg-white flex items-center font-medium px-6 py-4 justify-between">
          <h2 className="  text-gray-900">Follow up</h2>
          <span>
            Filter:{" "}
            <select className="text-sm cursor-pointer text-black  px-6 outline-none">
              {optionsList.map((option) => (
                <option
                  key={option.id}
                  className="p-1 cursor-pointer text-gray-500"
                  value={option.name}
                >
                  {option.name} ({option.total})
                </option>
              ))}
            </select>
          </span>
        </div>

        <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Customer
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Order ID
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Date
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Review
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Status
              </th>
              <th
                scope="col"
                className="px-6 py-4 font-medium text-gray-900"
              ></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 border-t border-gray-100">
            {/*Table row */}
            {user.map((userInfo) => (
              <Row key={userInfo.id} userInfo={userInfo} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FollowupRemainder;
