import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAppointment } from '../bookingd/bookingSlice';





const AddBooking = () => {
    const [fullname, setFullname] = useState('');
    const [date, setDate] = useState('');

    const dispatch = useDispatch();




    const submitData = () => {
        // e.preventDefault();

        dispatch(addAppointment([fullname, date]))
        setFullname('');
        setDate('');

    }


    return (
 

        <div class="bg-white p-8 rounded-lg shadow-lg mt-10">
            <div class="mb-4">
                <label for="name" class="block text-gray-700 font-bold mb-2">Name:</label>
                <input type="text" id="name" onChange={(e) => setFullname(e.target.value)} value={fullname} class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
            </div>
            <div class="mb-4">
                <label for="date" class="block text-gray-700 font-bold mb-2">Date:</label>
                <input type="date" id="date" onChange={(e) => setDate(e.target.value)} value={date} class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
            </div>
            <button onClick={submitData} class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600">
                Add appointment
            </button>
        </div>
    )
}

export default AddBooking;
