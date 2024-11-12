import React, { useState } from "react";
import avatar from "../../assets/images/doctor-img01.png";
import customHook from "../../hooks/customHook";
import { BASE_URL } from "../../../config";
import Loading from "../../Loader/Loading";
import Error from "../../components/Error/Error";
import Tab from "../Tabs/Tab";
import starIcon from "../../assets/images/Star.png";
import DoctorAbout from "../../pages/Doctor/DoctorAbout";
import Profile from "../Profile/Profile";
import Appointment from "../Appointment/Appointment";
const Dasboard = () => {
  const { data:doctor, loading, error } = customHook(`${BASE_URL}/doctor/profile/me`);
  const [tab, setTab] = useState("overview");
  
  return (
    <section>
      {loading && !error && <Loading />}

      {error && !loading && <Error />}

      <div className="max-w-[1170px] px-5 mx-auto">
        <div className="grid grid-cols-3 gap-[30px] lg:gap-[50px]">
          <Tab tab={tab} setTab={setTab} />
          <div className="lg:col-span-2 ">
            {/* {data.isApproved==='approved' && (<div className='p-4 mb-4 text-yellow-800 bg-yellow-50'><svg></svg></div>)} */}

            <div className="mt-8">
              {tab === "overview" && (
                <div>
                <div className="flex items-center mb-10 h-full gap-3">
                  <figure className="max-w-[200px] mx-h-[200px]">
                    <img src={doctor?.photo}></img>
                  </figure>
                  <div>
                    <span className="bg-[#CCF0F3] text-irisBlueColor py-1 px-4 lg:py-2 lg:px-6 rounded-md text-[12px] leading-4 lg:text-[16px] lg:leading-6 font-semibold">
                      {doctor.specialization}
                    </span>

                    <h3 className="text-[22px] leading-9 font-bold text-headingColor mt-3">
                      {doctor.name}
                    </h3>

                    <div className="flex items-center gap-[6px]">
                      <span className="flex items-center gap-[6px] text-headingColor text-[14px] leading-5 lg:text-[16px] lg:leading-6 font-semibold">
                        <img src={starIcon}></img>{doctor.averageRating}
                      </span>
                      <span className="flex items-center gap-[6px] text-headingColor text-[14px] leading-5 lg:text-[16px] lg:leading-6 font-semibold">
                        ({doctor.totalRating})
                      </span>
                    </div>
                    <p className="text__para font-[15px] leading-6 lg:max-w-[390px]">
                     {doctor?.bio}
                    </p>
                 
                  </div> 
                </div>
                <DoctorAbout key={doctor._id} doctor={doctor}/>
                </div>
              )}
              {tab === "app" && <Profile doctorData={doctor}/>}
              {tab === "setting" && <Appointment  appointment={doctor.appointments}/>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dasboard;
