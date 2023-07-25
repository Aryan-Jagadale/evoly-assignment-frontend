import React from "react";
import { useParams } from "react-router-dom";

const FollowupRemainForm = () => {
  const params = useParams();

  console.log(params);

  //let form = useRef(null);

  const handleSubmit = (event) => {
   
    event.preventDefault()
  };
  //Fetch from user, Righ now dummy data
  return (
    <>
      <form id="login" onSubmit={handleSubmit}>
        <div className="p-10">
          <div className="mx-auto rounded">
            <div className="xl:w-full border-b border-gray-300 dark:border-gray-700 py-5 bg-white ">
              <div className="flex w-11/12 mx-auto xl:w-full xl:mx-0 items-center">
                <p className="text-lg text-gray-800  font-bold">
                  Order from <b>Suresh</b>
                </p>
              </div>
            </div>
            <div className="mx-auto">
              <div className="xl:w-9/12 w-11/12 mx-auto xl:mx-0">



              <div class="flex items-start px-4 py-6">
              <img
                class="w-12 h-12 rounded-full object-cover mr-4 shadow"
                src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                alt="avatar"
              />
              <div class="">
                <div class="flex items-center justify-between">
                  <h2 class="text-lg font-semibold text-gray-900 -mt-1">
                    Suresh
                  </h2>
                  
                </div>
            
                <p class="cursor-pointer text-gray-700 text-sm">
                 Order History
                </p>
              
              </div>
            </div>




                <div className=" flex flex-col xl:w-2/6 lg:w-1/2 md:w-1/2 w-full">
                  <input
                    type="text"
                    id="username"
                    value={"Re: Order from suresh@gmail.com on Jan 12, 2021"}
                    name="username"
                    
                    className="border border-gray-300 px-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-black "
                    placeholder="@example"
                  />
                </div>
                <div className="mt-8 flex flex-col xl:w-3/5 lg:w-1/2 md:w-1/2 w-full">
                  <textarea
                    id="about"
                    name="about"
                    
                    className="bg-transparent border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 resize-none placeholder-gray-500 text-gray-500 dark:text-gray-400"
                    placeholder="Message"
                    rows={5}
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto w-11/12 xl:w-full">
            <div className="w-full py-4 sm:px-0   flex justify-end">
              <button className="bg-gray-200 focus:outline-none transition duration-150 ease-in-out hover:bg-gray-300  rounded text-black  px-6 py-2 text-xs mr-4">
                Cancel
              </button>
              <button
                className="bg-black focus:outline-none transition duration-150 ease-in-out  rounded text-white px-8 py-2 text-sm"
                type="submit"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default FollowupRemainForm;
