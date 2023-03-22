import { createSlice } from "@reduxjs/toolkit";

const initialState = ''
const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        setNotification(state, action) {
            const notification = action.payload
            // console.log(JSON.parse(JSON.stringify(state)))
            return notification
        },
        removeNotification(state, action) {
            const notification = initialState
            return notification
        }
    }
})

export const { setNotification, removeNotification } = notificationSlice.actions
export default notificationSlice.reducer 