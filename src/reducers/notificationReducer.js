import { createSlice } from "@reduxjs/toolkit"
import anecdoteService from '../services/anecdotes'

const initialState = ''
const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        showNotification(state, action) {
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

export const { showNotification, removeNotification } = notificationSlice.actions
export default notificationSlice.reducer

export const setNotification = (content, time) => {
    return dispatch => {
        dispatch(showNotification(content))
        setTimeout(() => dispatch(removeNotification('')), time * 1000)
    }
}