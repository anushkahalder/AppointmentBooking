import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [ ]
}

export const bookingSlice = createSlice({
    name: "booking",
    initialState,
    reducers: {
        addAppointment: (state, action) => {
            const [fullName, appDate] = action.payload
            console.log(fullName, appDate, "data")
            console.log(action.payload, "action")
            const newBooking = {
                id: state.data.length + 1,
                fullName: fullName,
                appDate: appDate

            }
            state.data.push(newBooking);

        },
        editAppointment: (state, action) => {
            const [id,editedName, editedData] = action.payload;
            const editedIndex= state.data.findIndex(i=>i.id ===id)
            let editedBooking = {
                id: id,
                fullName: editedName,
                appDate: editedData
            }
            state.data[editedIndex] = editedBooking
        },
        deleteAppointment: (state, action) => {
            state.data = state.data.filter(i => i.id !== action.payload)

        }

    }
})


export const { addAppointment, editAppointment, deleteAppointment } = bookingSlice.actions

export default bookingSlice.reducer