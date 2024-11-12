import React, { useState } from 'react'
import Appointment from '../../Dashboard/Profile/Appointment'
import customHook from '../../hooks/customHook';
import { BASE_URL } from '../../../config';

const Timeslot = () => {
    const [appointments, setAppointments]=useState(false);
    const [check, setCheck] = useState(true)
    
  return (
    <>
    <div className="container w-0.6">
              <div className=" bg-while shadow-xl p-7 ">
                <div className="flex justify-between">
                <div className="text-[18px]">Ticket Price</div>
                <div className="text-[18px] font-semibold">500 BDT</div>
              </div>
              <div className="font-semibold mt-9 ">Available Time Slots:</div>
                
                <div className="flex justify-between mt-3">
                  <div>Sunday</div>
                  <div>4 PM - 9:30 AM</div>
                </div>
                <div className="flex justify-between mt-2">
                  <div>Tuesday</div>
                  <div>4 PM - 9:30 AM</div>
                </div>
                <div className="flex justify-between mt-2">
                  <div>Wednesday</div>
                  <div>4 PM - 9:30 AM</div>
                </div>
                {!appointments && check && <button className="btn w-full mt-19 rounded-md" onClick={()=>setAppointments(true)}>Book Appointment</button>}
                <div>
                {!check  &&
                <div>
                  <div className="w-full mt-20 rounded-md shadow-md bg-slate-400 p-3 text-center">Appointment Booked !</div> 
                  <button className="btn w-full bg-red-700 rounded-md">Cancel Appointment ?</button>
                </div>
            }
                </div>
                {appointments  &&  <Appointment setCheck={setCheck} setApp={setAppointments}/>}
            
              </div>
              
            </div>
    </>
  )
}

export default Timeslot