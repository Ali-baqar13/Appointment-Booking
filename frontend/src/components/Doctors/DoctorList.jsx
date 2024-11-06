import React from "react";
// import { doctors } from "./../../assets/data/doctors";
import DoctorCard from "./DoctorCard";
import {BASE_URL} from "../../../config";
import customHook from "../../hooks/customHook";
import Error from "../Error/Error.jsx"
import Loader from "../../Loader/Loading.jsx"
const DoctorList = () => {
  const {data:doctor, loading, error}=customHook(`${BASE_URL}/doctor`)
  console.log("here is id.......",doctor._id)
 
  return (
    <>
    {loading && <Loader/>}
    {error && <Error/>}
    
    {!loading && !error && <div className="container">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px] ">
        {doctor.map((doctor) => (
          <DoctorCard key={doctor._id} doctor={doctor} />
        ))}
      </div>
    </div>}
    </>
  );
};

export default DoctorList;
  