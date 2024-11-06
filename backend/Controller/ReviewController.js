
import Review from '../models/ReviewSchema.js'


import Doctor from '../models/DoctorSchema.js';

import User from '../models/UserSchema.js';

export const getAllReviews=async(req,res)=>{
    

    try{

        const review=await Review.find({})
        res.status(200).json({sucess:true,message:"Review Found",data:review})
        console.log(review)

    }catch(err){

        res.status(404).json({sucess:false,message:"Review not Found"})

    }
};


// create Review.....

export const createReview=async(req,res)=> {
   

    if( !req.body.doctor) req.params.userId
    
    if( !req.body.user) req.params.doctorId
    
    const doctor=await Doctor.findById(req.params.doctorId);
    const user=await User.findById(req.userId)
  
    // const newReview=new Review(req.body)
    const newReview = new Review({
        ...req.body,          // Spread the request body to include the review data
        doctor: req.params.doctorId ,
        user:req.userId,
      
        
        
        // Add the doctor ID to the review
      });
    try{
       
        const savedReview =await newReview.save()
        await Doctor.findByIdAndUpdate(
            req.params.doctorId,
            {
                $push: { reviews: savedReview._id }, // Push the review ID to reviews array
            }
        )
        const createdAtUTC = new Date(savedReview?.createdAt); // Replace with the actual date string
        const formattedDate = createdAtUTC.toLocaleString(); // Converts to local time
 
        const responseData = {
            reviewId: savedReview._id,
            reviewText: savedReview.reviewText,
            rating: savedReview.rating,
            createdAt:formattedDate,
            user: {
                userId: user._id,
                name: user.name, 
                photo: user.photo,
            },
        };
        res.status(200).json({sucess:true,message:"Review Submit",data:responseData})

    }catch(err){
        console.log(err)
        res.status(500).json({sucess:false,message:"submission failed"})
    }

    
}