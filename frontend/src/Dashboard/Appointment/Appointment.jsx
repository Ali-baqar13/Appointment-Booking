import React from 'react'

const Appointment = ({ appointment }) => {

    return (
        <table className="w-full text-left text-sm text-gray-500">
            <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
                <tr>
                    <th score="col" classsName="px-6 py-3">Name</th>
                    <th score="col" classsName="px-6 py-3">Gender</th>
                    <th score="col" classsName="px-6 py-3">Payment</th>
                    <th score="col" classsName="px-6 py-3">price</th>
                    <th score="col" classsName="px-6 py-3">Booking</th>
                </tr>
            </thead>
            <tbody>
                {appointment?.map((items) => <tr key={items?._id}>
                    <th scope="row" className="flex items-center px-6 py-4ttext-gray-900 whitespace-nowrap">
                        <img src={items.user.photo} className="w-10 h-10 rounded-full "></img>
                        <div className="pl-3">
                            <div className="text-base font-semibold">{items.user.name}</div>
                            <div className="text-nor">{items.user.email}</div>
                        </div>
                    </th>
                    <td className="px-6 py-4 ">{items.user.gender}</td>
                    <td className="px-6 py-4 ">{items.isPaid && <div className="flex item-center"><div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2">Paid</div></div>}
                        {!items.isPaid && <div className="flex item-center"><div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2">unPaid</div></div>}
                    </td>
                </tr>)}
            </tbody>
        </table>
    )
}

export default Appointment