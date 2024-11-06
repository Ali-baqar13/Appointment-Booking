import mongoose from "mongoose";

const DoctorSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  phone: { type: Number },
  photo: { type: String },
  ticketPrice: { type: Number },
  role: {
    type: String,
    required:true
  },

  // Fields for doctors only
  specialization: { type: String
     
  },
  qualifications: {
    type: Array,
    
  },

  experiences: {
    type: Array,
  },

  bio: { type: String, maxLength: 50 },
  about: { type: String },
  timeSlots: { type: Array },
  reviews: [
    {
       type: mongoose.Schema.Types.ObjectId,
       ref:"Review"
    }
  ],
  averageRating: {
    type: Number,
    default: 0,
  },
  totalRating: {
    type: Number,
   
    default: 0,
  },
  isApproved: {
    type: String,
    enum: ["pending", "approved", "cancelled"],
    default: "approved",
  },
  appointments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Appointment" }],
});

export default mongoose.model("Doctor", DoctorSchema);
