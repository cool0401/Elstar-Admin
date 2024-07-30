import { createSlice } from '@reduxjs/toolkit'

const stateSlice = createSlice({
    name: 'crmCalendar/state',
    initialState: {
        dialogOpen: false,
        selected: {
            type: ''
        }
    },
    reducers: {
        openDialog: (state) => {
            state.dialogOpen = true
        },
        closeDialog: (state) => {
            state.dialogOpen = false
        },
        setSelected: (state, action) => {
            state.selected = action.payload
        },
    },
})

export const { openDialog, closeDialog, setSelected } = stateSlice.actions

export default stateSlice.reducer
