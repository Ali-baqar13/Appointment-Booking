import React, { useContext, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import HashLoader from 'react-spinners/HashLoader'
import { toast } from 'react-toastify'
import { BASE_URL } from '../../../config'
import { authContext } from '../../context/AuthContext'

const Appointment = ({ setCheck, setApp }) => {
  const menuRef = useRef(null)
  const [loading, setLoading] = useState(false)
  const { doctorId } = useParams()
  const { token } = useContext(authContext);
 
  const [form, setForm] = useState({
    ticketPrice: "",
    date: "",
  })
  const submitHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  const toggle = (e) => {
    e.preventDefault()
    menuRef.current.classList.toggle("show__rem")
    setApp(false)
  }
  const submit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/doctor/${doctorId}/appointment`, {
        method: "post",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      const result = await res.json();
      if (!res.ok) {
        throw new Error(result.message);
      }
      setLoading(false);
      setApp(false);
      setCheck(false)
      toast.success(result.message);

    } catch (err) {
      setApp(false);
      setCheck(true)
      toast.error(err.message);
      setLoading(false);
    };
  }
  return (
    <section className="navi" ref={menuRef}>
      <div className="remi w-[55%] md:h-[65%]  ml-[23%] mt-[50px]">
        <div className="w-full max-w-[570px] mx-auto rounded-lg  md:p-10">
          <span onClick={toggle} className="cursor-pointer font-bold top-5 right-5 absolute hover:bg-red-500 hover:text-white w-10 h-10 px-4 py-1">X</span>
          <h3 className='text-headingColor text-[22px] leading-9 font-bold mb-10'> Hello Want to <span className='text-primaryColor'> Book </span> An Appointment ? </h3>
          <form onSubmit={submit} className="w-full pt-10">
            <div className="w-full mb-5">
              <input name="ticketPrice" value={form.ticketPrice} onChange={submitHandler} className="w-full px-4 py-3 border-b border-solid border-[#1f478261] focus:outline-none focus:border-b-primaryColortext text-[22px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer rounded-md" placeholder="Ticket Price" />
            </div>
            <div className="w-full mb-5">
              <input name="date" value={form.date} onChange={submitHandler} className="w-full px-4 py-3 border-b border-solid border-[#1f478261] focus:outline-none focus:border-b-primaryColortext text-[22px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer rounded-md" placeholder="Appointment Date" />
            </div>
            <div className="w-full mb-5">
              <input className="w-full px-4 py-3 border-b border-solid border-[#1f478261] focus:outline-none focus:border-b-primaryColortext text-[22px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer rounded-md" placeholder="Payment" />
            </div>
            <button className='btn w-full'> {loading ? (
              <HashLoader size={35} color="#ffffff" />
            ) : (
              "Request an Appointment"
            )}</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Appointment