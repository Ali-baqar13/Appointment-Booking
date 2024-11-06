import React, { useContext, useEffect, useState } from 'react'
import { AiFillStar } from 'react-icons/ai'
import { toast } from "react-toastify";
import { BASE_URL } from "../../../config";
import { useParams } from 'react-router-dom';
import { authContext } from '../../context/AuthContext';
import HashLoader from 'react-spinners/HashLoader';

const FeedbackForm = ({ addReview,rate , addName,totalRating}) => {
    const [rating, setRating] = useState(0)
    const [hover, sethover] = useState(0)
    const [reviewText, setReview] = useState("")
    const { token } = useContext(authContext);
    const [loading, setLoading] = useState(false)
    
    const { doctorId } = useParams()
   

    const handleSubmitReview = async e => {
        e.preventDefault()
        //........API..................
        setLoading(true)

        try {
            if (!reviewText || !rating) {
                setLoading(false)
                return toast.error("error")
            }
            const res = await fetch(`${BASE_URL}/doctor/${doctorId}/reviews`, {
                method: "post",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
                 body: JSON.stringify({ reviewText, rating })
            })

            const result = await res.json();
            
            console.log(result, "result")
            if (!res.ok) {
                throw new Error(result.message)
            }
            
            addReview(result?.data)
            // console.log("result.data.user.name", result?.data?.user)
            addName(result?.data?.user?.name)
            totalRating(rate+1)
            setRating(0)
            setLoading(false)
            toast.success("woooow")
        } catch (e) {
            setLoading(false)
            toast.error("errored")
        }
    }
    return (
        <>
            <form action='' >
                <h3 className='text-headingColor text-[16px] leading-6 font-semibold mb-4'> How would you like to rank our serviced mention below

                </h3>
                <div>
                    {
                        [...Array(5).keys()].map((_, index) => {

                            index += 1;

                            return <button key={index} type='button'
                                onClick={() => setRating(index)} onMouseEnter={() => sethover(index += 1)} onDoubleClick={() => { setRating(0); sethover(0) }} onMouseLeave={() => sethover(rating + 1)} className={`${index < (rating && hover) ? 'text-yellowColor' : 'text-gray-400'} bg-transparent border-none outline-none text-[22px] cursor-pointer `

                                }><span><AiFillStar /></span></button>
                        })
                    }
                </div>
                <div className='mt-[30px]'>
                    <h3 className='text-headingColor text-[16px] leading-6 font-semibold '>Show Your FeedBack Here</h3>

                    <textarea className='border border-solid border-[#0066ff34] focus:outline outline-primaryColor w-full px-4 py-3 rounded-md' placeholder='write you feedback' onChange={(e) => setReview(e.target.value)} rows='5'></textarea>
                    <button type='submit' onClick={handleSubmitReview} className='btn'>{loading ? <HashLoader size={25} color='white' /> : 'submit Review'}</button>
                </div>
            </form>

        </>
    )
}

export default FeedbackForm
