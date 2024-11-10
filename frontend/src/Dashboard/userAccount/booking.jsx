import React from "react";
import customHook from "../../hooks/customHook";
import { BASE_URL } from "../../../config";
import Loading from "../../Loader/Loading.jsx";
import DoctorCard from "../../components/Doctors/DoctorCard.jsx";
import Error from "../../components/Error/Error.jsx";
const Booking = () => {
 
    const {data:appoints, loading, error} = customHook(`${BASE_URL}/user/appointment/myappointment`);
    console.log("...........")
     console.log(appoints,"app")
  
  return (
  
    <div>
      {loading && !error && <Loading />}

      {error && !loading && <Error />}

      {
       !loading && !error &&  
       (<div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

       {appoints.map(doctor=><DoctorCard doctor={doctor} key={doctor._id}/>)}  

       </div>)
      }
      { !loading && !error &&  appoints.length===0 && <h2 className="mt-5 text-center text-primaryColor leading-7 text-[20px] font-semibold">You didnot book any appointment to any doctor yet!!</h2>}
    </div>
  );
};

export default Booking;
