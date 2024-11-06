import { useContext, useState } from 'react';
import { authContext} from '../../context/AuthContext.jsx';
import { useNavigate } from 'react-router-dom';

const Tab = ({tab,setTab}) => {
  
  const navigate = useNavigate()
  const {dispatch} = useContext(authContext)
  const handleLogout=()=>{
    dispatch({type:'LOGOUT'})
    navigate('/login')
  }
  return (
    
    <div className="">
      <span className="lg:hidden">BiMenu</span>
      <div className="rounded-md px-5  pt-[30px] bg-white lg:flex flex-col items-center h-max   shadow-lg" >

        <button
          onClick={() => setTab('overview')}
          aria-pressed={tab === 'overview'}
          className={`${tab === 'overview' ? "bg-indigo-50 text-primaryColor" : "bg-transparent text-headingColor"} mt-[0] btn  text-headingColor font-[18px] bg-irisBlueColor rounded-md w-full`}
        >
          Overview
        </button>
      </div>

      <div className="rounded-md  px-5 bg-white lg:flex flex-col items-center mt-[0] shadow-md">
        <button
          onClick={() => setTab('app')}
          aria-pressed={tab === 'app'}
          className={`${tab === 'app' ? "bg-indigo-50 text-primaryColor" : "bg-transparent text-headingColor"} mt-[0] btn  text-headingColor font-[18px] bg-irisBlueColor rounded-md w-full`}
        >
         Settings
        </button>
      </div>
      
      <div className="rounded-md pb-10 px-5 mt-[0] bg-white lg:flex flex-col items-center  shadow-md">
        <button
          onClick={() => setTab('setting')}
          aria-pressed={tab === 'setting'}
          className={`${tab === 'setting' ? "bg-indigo-50 text-primaryColor" : "bg-transparent text-headingColor"} mt-[0] btn  text-headingColor font-[18px] bg-irisBlueColor rounded-md w-full`}
        >
          Appointments
        </button>

        <div className="mt-[50px] w-full md:mt-[100px] flex flex-col justify-between px-5 h-[120px]">
              <button
                onClick={handleLogout}
                className="w-full bg-[#181A1E] p-3 text-[16px] leading-7 text-white rounded-md"
              >
                Logout
              </button>
              <button className="w-full bg-red-600 p-3 text-[16px] leading-7 text-white rounded-md">
                Delete Account
              </button>
            </div>
      </div>  
    </div>
  );
};

export default Tab;
