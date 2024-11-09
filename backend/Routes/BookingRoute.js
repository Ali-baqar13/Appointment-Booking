import express from 'express'
import { authenticate, restrict } from '../auth/verifyToken.js'
import {createAppointment, getAllAppointments} from '../Controller/BookingController.js'
const router = express.Router({mergeParams:true})
router.route('/').get(getAllAppointments).post(authenticate, createAppointment)
export default router