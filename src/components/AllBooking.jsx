
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteAppointment , editAppointment} from '../bookingd/bookingSlice';


const AllBooking = () => {
    const [rowId, setRowId] = useState('');
    const [editedName, setEditedName] = useState("");
    const [editedDate, setEditedDate] = useState("");


    const allBooking = useSelector((state) => state.booking.data)
    const dispatch = useDispatch();
    console.log(allBooking);


    const handleEditMode = (index, item) => {
        setRowId(index);
        console.log(item,"item")
        setEditedName(item.fullName);
        setEditedDate(item.appDate)
    }

    const sendUpdatedData =(id) =>{
        dispatch(editAppointment([id,editedName,editedDate]))
        setRowId("");
    }

    return (
  

        <div className="p-6 bg-white rounded-lg shadow-lg mt-10">
        <h2 className="text-2xl font-bold mb-4">Appointments:</h2>
  
        {allBooking.map((item, index) => (
          <div key={item.id} className="mb-4">
            {rowId !== index && (
              <div className="flex items-center justify-between bg-gray-100 p-4 rounded-lg">
                <div>
                  <span className="font-semibold"> </span> {item.fullName} on {item.appDate}
                </div>
                <div>
                  <button
                    onClick={() => handleEditMode(index, item)}
                    className="bg-blue-500 text-white px-2 py-1 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => dispatch(deleteAppointment(item.id))}
                    className="bg-red-500 text-white px-2 py-1 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            )}
  
            {rowId === index && (
              <div className="flex items-center justify-between bg-gray-100 p-4 rounded-lg">
                <span className="font-semibold">{index}</span>
                <input
                  type="text"
                  value={editedName}
                  onChange={(e) => setEditedName(e.target.value)}
                  className="w-1/3 px-2 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 mx-2"
                />
                <input
                  type="date"
                  value={editedDate}
                  onChange={(e) => setEditedDate(e.target.value)}
                  className="w-1/3 px-2 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 mx-2"
                />
                <button
                  onClick={() => sendUpdatedData(item.id)}
                  className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-600"
                >
                  Update
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    );
}

export default AllBooking;