import { useState } from "react";

import { Toaster } from "react-hot-toast";
import Loader from "./components/Loader";
import Sidebar from "./components/Header/Sidebar";
import Navbar from "./components/Header/Navbar";
import { Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import DashBoard from "./components/DashBoard";
import FollowupRemainder from "./components/FollowRemainder/FollowupRemainder";
import FollowupRemainForm from "./components/FollowRemainder/FollowupRemainForm";

function App() {
  const [loading] = useState(false);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="flex">
            <Sidebar />

            <div className="h-screen flex-1 pt-0 pl-0" style={{
              backgroundColor: "#fafbfd"
            }}>
              <Navbar />
              <Routes>
              <Route path="/" element={<DashBoard/>} />
              <Route exact path="/followup-reminder" element={<FollowupRemainder/>} />
              <Route path="/app/followup-reminder/:id" element={<FollowupRemainForm/>} />
              <Route path="*" element={<NotFound />} />
              </Routes>

              <Toaster />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default App;
