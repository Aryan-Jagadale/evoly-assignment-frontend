import { useState } from "react";

import { Toaster } from "react-hot-toast";
import Loader from "./views/loader/Loader";
import Sidebar from "./views/header/Sidebar";
import Navbar from "./views/header/Navbar";
import { Route, Routes } from "react-router-dom";
import NotFound from "./views/notfound/NotFound";
import DashBoard from "./views/dashboard/DashBoard";
import FollowupRemainder from "./views/followreminder/components/FollowupRemainder";
import FollowupRemainForm from "./views/followreminder/components/FollowupRemainForm";

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
