import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BASE_URL } from '../../config'
import { toast } from "react-toastify";
import { authContext } from '../context/AuthContext.jsx'
import Loading from '../Loader/Loading.jsx';
import HashLoader from 'react-spinners/HashLoader.js';
export const Login = () => {
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()
  const [FormData, setFormData] = useState({
    email: '',

    password: ''

  })
  const { dispatch } = useContext(authContext)
  const HandleInputChange = e => {
    setFormData({ ...FormData, [e.target.name]: e.target.value })
  }
  const submitHandler = async (event) => {
    console.log(FormData);
    event.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(FormData),
      });
      const result = await res.json();
      if (!res.ok) {
        throw new Error(result.message);
      }

      dispatch({
        type: "LOGIN_SUCCESS",
        payload: {
          user: result.data,
          token: result.token,
          role: result.role
        }
      })
      console.log("result", result)
      setLoading(false);
      toast.success(result.message);
      navigate("/home");
    } catch (err) {
      console.log(err);
      toast.error(err.message);
      setLoading(false);
    }
  };

  return (
    <section className='px-5 lg:px-0'>
      <div className='w-full max-w-[570px] mx-auto rounded-lg shadow-lg md:p-10'>

        <h3 className='text-headingColor text-[22px] leading-9 font-bold mb-10'> Hello <span className='text-primaryColor'> WELCOME </span>Back ! </h3>

        <form onSubmit={submitHandler} className='py-4 md:py-0'>

          <div className='mb-5'>
            <input type='email' placeholder='Email Address' name='email' value={FormData.email} onChange={HandleInputChange} className='w-full px-4 py-3 border-b border-solid border-[#1f478261] focus:outline-none focus:border-b-primaryColortext text-[22px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer rounded-md '></input>
          </div>

          <div className='mb-5'>
            <input type='password' placeholder='password' name='password' value={FormData.password} onChange={HandleInputChange} className='w-full px-4 py-3 border-b border-solid border-[#1f478261] focus:outline-none focus:border-b-primaryColortext text-[22px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer rounded-md '></input>
          </div>
          <div className='mt-7'>
            <button type='submit' className='btn w-full bg-primaryColor text-white text-[18px] rounded-lg'>{loading ? (
              <HashLoader size={35} color="#ffffff" />
            ) : (
              "Login"
            )}</button>
          </div>
          <p className='mt-5 text-center text-textColor'> Donnot have Acount? <Link to="/register" className='text-primaryColor font-medium ml-1'>SignUp</Link></p>
        </form>
      </div>
    </section>
  )
}
