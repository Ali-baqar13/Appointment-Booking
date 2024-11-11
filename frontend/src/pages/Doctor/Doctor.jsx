import React, { useState } from "react";
import DoctorCard from "../../components/Doctors/DoctorCard.jsx";
import { BASE_URL } from "../../../config";
import customHook from "../../hooks/customHook";
import Error from "../../components/Error/Error.jsx";
import Loader from "../../Loader/Loading.jsx";
const Doctor = () => {
  const [query, setQuery] = useState('')


  const handleSearch = (e) => {
    setQuery(e.query.trim())
    // console.log("submitSearch")

  }
  const { data: doctor, loading, error } = customHook(`${BASE_URL}/doctor?query=${query}`);
  
  return (
    <>

      <section className="bg-[#fff9ea]">
        <div className="container text-center">
          <h2 className="heading">Find a Doctor</h2>

          <div className="max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between">
            <input
              type="search"
              className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor "
              placeholder="Search doctor by name or specification..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            ></input>
            <button onClick={handleSearch} className="btn mt-0 rounded-[0px] ">Search</button>
          </div>
        </div>
      </section>

      <section>

        <div className="container">
          {loading && <Loader />}
          {error && <Error />}
          {!loading && !error && <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {doctor.map((doctor) => (
              <DoctorCard key={doctor._id} doctor={doctor} />
            ))}
          </div>}
        </div>
      </section>
    </>
  );
};
export default Doctor;
