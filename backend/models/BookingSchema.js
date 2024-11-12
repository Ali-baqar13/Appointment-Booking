import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    doctor: {
      type: mongoose.Types.ObjectId,
      ref: "Doctor",
      required: true,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    ticketPrice: { type: String, required: true },
    appointmentDate: {
      type: Date,
      // required: true,
    },
    status: {
      type: String,
      enum: ["pending", "approved", "cancelled"],
      default: "approved",
    },
    isPaid: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

bookingSchema.pre(/^find/, function(next) {
  this.populate({
    path: "user",
    select: "name photo gender", 
  });
  next();
});

export default mongoose.model("Booking", bookingSchema);
