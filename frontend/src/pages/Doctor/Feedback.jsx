import React, { useEffect, useState } from 'react'
import avator from '../../assets/images/avatar-icon.png'
import { AiFillStar } from 'react-icons/ai'
import FeedbackForm from './FeedbackForm'
const Feedback = ({ totalRating, reviews }) => {


  const [showFeedbackForm, setShowFeedbackForm] = useState(false)
  const [showReview, setShowReview] = useState([...reviews])
  const [total, setTotal]=useState(totalRating)
  const [name, setName] = useState('')
  const addReview = (review) => {
    setShowReview((perReview) => [...perReview, review])
  }
  const addName=(nam)=>{setName(nam)}
  
  return (
    <div>
      <div className='mb-[50px] '>
        <h4 className='text-[20px] leading-[30px] font-bold text-headingColor mb-[30px]'>All Reviews {total}</h4>
        {showReview.map((review, index) => <div key={index} className='flex justify-between gap-10 mb-[30px]'>

          <div className='flex flex-col'>
            <div className='flex gap-5 '>
              <figure className='w-10 h-10 rounded-full'><img src={review?.user?.photo} className='w-full rounded-full'></img></figure>

              <h5 className='text-primaryColor font-bold text-[16px] leading-9'>{review?.user?.name}</h5>
              <p>
      {review?.createdAt
        ? new Date(review.createdAt).toLocaleString()
        : 'No date available'}
    </p>
            </div>
            <div>
              <p className=' text__para text-[15px] font-medium'>{review.reviewText}</p>
            </div>

          </div>
          <div className='flex gap-1'>{[...Array(review?.rating).keys().map((_, index) => <AiFillStar key={index} color='#0067FF' />)]}
          </div>
        </div>)}
      </div>
      {!showFeedbackForm && <div className='text-center'><button className='btn' onClick={() => setShowFeedbackForm(true)}>Give FeedBack</button>
      </div>}
      {showFeedbackForm && <FeedbackForm totalRating={setTotal} rate={total} addReview={addReview} addName={addName}/>}


    </div>
  )
}

export default Feedback