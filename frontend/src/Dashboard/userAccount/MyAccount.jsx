import { useContext } from "react";
import userImg from "../../assets/images/doctor-img01.png";
import { authContext } from "../../context/AuthContext.jsx";
import { useState } from "react";
import Loading from "../../Loader/Loading.jsx";
import Error from '../../components/Error/Error.jsx'
import customHook from "../../hooks/customHook.jsx"
import { BASE_URL } from "../../../config.js";

import Booking from "./booking.jsx";
import Profile from "./profile.jsx";
const MyAccount = () => {
  
  const [lab, setLab] = useState("bookings");
  const { dispatch } = useContext(authContext);
  const handleLogOut = () => {
    dispatch({ type: "LOGOUT" });
  };
  const {data:userData,loading,error} =customHook(`${BASE_URL}/user/profile/me`)
  console.log("userData",userData)
  

  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">

        { loading && !error && <Loading/>}

        { error && !loading && <Error/>}
       
        {
          !loading && !error && (<div className="grid md:grid-cols-3 gap-[40px]">
          <div className="pb-[50px] rounded-md">
            <div className="flex items-center justify-center">
              <figure className="w-[100px] h-[100px] rounded-full border-2 border-solid border-primaryColor">
                <img src={`${userData.photo}`}className="w-full h-full rounded-full"></img>
              </figure>
            </div>

            <div className="text-center mt-4">
              <h3 className="text-[18px] leading-[30px] text-headingColor font-bold">
                {userData.name}
              </h3>
              <p className="text-headingColor leading-6 font-medium">
                {userData.email}
              </p>
              <p className="text-headingColor leading-6 font-medium">
                Blood Type {" "}
                <span className="ml-2 text-headingColor leading-8">O-</span>
              </p>
            </div>
            <div className="mt-[50px] md:mt-[100px] flex flex-col justify-between h-[120px]">
              <button
                onClick={handleLogOut}
                className="w-full bg-[#181A1E] p-3 text-[16px] leading-7 text-white rounded-md"
              >
                Logout
              </button>
              <button className="w-full bg-red-600 p-3 text-[16px] leading-7 text-white rounded-md">
                Delete Account
              </button>
            </div>
          </div>

          <div className="md:col-span-2 md:px-[30px]">
            <div>
              <button
                onClick={() => setLab("bookings") }
                className={`${
                  lab === "bookings" && "bg-primaryColor text-white"
                } "p-2 mr-5 px-5 rounded-md text-headingColor font-semibold text-[16px] leading-7 border border-solid border-primaryColor`}
              >
                Bookings
              </button>
              <button
                onClick={() => setLab("settings")}
                className={`${
                  lab === "settings" && "bg-primaryColor text-white"
                } "py-2  px-5 rounded-md text-headingColor font-semibold text-[16px] leading-7 border border-solid border-primaryColor `}
              >
                Profile settings
              </button>
              <div>
                {
                  lab==="bookings" && <Booking/>
                }
                {
                  lab==="settings" && <Profile user={userData}/>
                }
              </div>
            </div>
          </div>
        </div>)
        }
      </div>
    </section>
  );
};

export default MyAccount;
