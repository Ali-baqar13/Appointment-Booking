import React from 'react'
import customHook from '../../hooks/customHook'
import { BASE_URL } from '../../../config'

const Appointment = ({ appointment }) => {
    console.log(appointment.user)

    return (
        <table className="w-full text-center text-sm text-gray-500">
            <thead className='text-xs text-gray-700 uppercase  bg-gray-50'>
                <tr>
                    <th score="col" classsName="px-6 py-3">Name</th>
                    <th score="col" classsName="px-6 py-3">Gender</th>
                    <th score="col" classsName="px-6 py-3">Payment</th>
                    <th score="col" classsName="px-6 py-3">price</th>
                    <th score="col" classsName="px-6 py-3 pl-6">Booking</th>
                </tr>
            </thead>
            <tbody className="text-center">
                {appointment?.map((items) => <tr key={items?._id}>
                    <th scope="row" className="flex items-center  py-4 text-gray-900 whitespace-nowrap">
                        <img src={items.user.photo} className="w-10 h-10 rounded-full "></img>
                        <div className="text-center">
                            <div className="text-base font-semibold">{items.user.name}</div>
                            <div className="text-nor">{items.user.email}</div>
                        </div>
                    </th>
                    <td className="px-6 py-4 ">{items.user.gender}</td>
                    <td className="px-6  py-4 ">{items.isPaid && 
                        <div className="flex align-middle justify-center text-center">
                            <div className="h-2.5 w-2.5 rounded-full bg-green-500 pl-2"></div>
                            <span className='pl-2'>paid</span>
                            </div>}
                        {!items.isPaid && <div className="flex item-center"><div className="h-2.5  w-2.5 rounded-full bg-red-500 mr-2">unPaid</div></div>}
                    </td>
                    <td className="px-6 py-4 ">{items.ticketPrice}</td>
                    <td className="px-6 py-4 ">{items.status}</td>
                </tr>)}
            </tbody>
        </table>
    )
}

export default Appointment