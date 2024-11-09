import Booking from "../models/BookingSchema.js";
import User from "../models/UserSchema.js";
import Doctor from "../models/DoctorSchema.js"; // Ensure Doctor is imported


export const getAllAppointments=async (req, res)=>{
    try{
        const appoint = await Booking.find({})
        res.status(200).json({sucess:true, message:"sucessfull found", data:appoint})

}catch(err){
    res.status(500).json({sucess:true, message:"Not found any appointment"})
}
}

// Exporting the createAppointment function
export const createAppointment = async (req, res) => {
    // Check for required parameters and assign them if missing
    const userId = req.body.user || req.params.userId;
    const doctorId = req.body.doctor || req.params.doctorId;

    // Find the user associated with the userId
    const user = await User.findById(req.userId);
    if (!user) {
        return res.status(404).json({ success: false, message: "User not found" });
    }

    // Create a new booking with the given details
    const booking = new Booking({
        ...req.body,
        user: req.userId,
        doctor: req.params.doctorId,
    });

    try {
        
        const savedBooking = await booking.save();
        await Doctor.findByIdAndUpdate(
            req.params.doctorId,
            {
                $push: { appointments: savedBooking._id }, // Assuming 'bookings' is the correct field name
            }
        );

        // Respond with relevant booking details
        const responseData = {
            bookingId: savedBooking._id,
            ticketPrice: savedBooking.ticketPrice,
            status: savedBooking.status,
            isPaid: savedBooking.isPaid,
        };
        res.status(200).json({ success: true, message: "Booking created successfully", data: responseData });
    } catch (error) {
        res.status(500).json({ success: false, message: "Submission failed", error: error.message });
    }
};
