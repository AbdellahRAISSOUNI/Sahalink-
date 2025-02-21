import React, { useEffect } from "react";

import { Route, Routes, useNavigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import MedicalRecord from "./pages/records/index.jsx"
import Navbar from "./components/Navbar";
import { Home, Onboarding, Profile } from "./pages";
import { useStateContext } from "./context";
import SingleRecordDetails from "./pages/records/single-record-details.jsx";
import ScreeningSchedule from "./pages/ScreeningSchedules.jsx";

const App = () => {
    const {currentUser} = useStateContext();

    const {user, authenticated, ready, login} = useStateContext();

    const navigate = useNavigate();

    useEffect(()=>{
        if(ready && !authenticated){
            login();
        }else if(user && !currentUser){
            navigate("/onboarding");
        }
    },[user, authenticated, ready, currentUser, navigate ])
    return(
        <div className="relative flex min-h-screen flex-row bg-[#13131a] p-4">
            <div className="relative mr-10 hidden sm:flex">
                <Sidebar />
            </div>


            <div className="mx-auto max-w-[1280px] flex-1 max-sm::full s:pr-5">
                <Navbar/>

                <Routes>
                    <Route path="/" element={ <Home/>} />
                    <Route path="/profile" element={ <Profile/>} />
                    <Route path="/onboarding" element={ <Onboarding/>} />
                    <Route path="/medical-records" element={ <MedicalRecord/>} />
                    <Route path="/medical-records/:id" element={ <SingleRecordDetails/>} />
                    <Route path="/screening-schedules" element={<ScreeningSchedule/>} />
                </Routes>
            </div>
        </div>
    )
};


export default App;