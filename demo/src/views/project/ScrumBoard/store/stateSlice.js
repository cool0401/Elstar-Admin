import { createSlice } from '@reduxjs/toolkit'

const stateSlice = createSlice({
    name: 'scrumBoard/state',
    initialState: {
        dialogOpen: false,
        dialogView: '',
        ticketId: '',
        board: '',
        selectedTab: 'All'
    },
    reducers: {
        openDialog: (state) => {
            state.dialogOpen = true
        },
        closeDialog: (state) => {
            state.dialogOpen = false
            state.ticketId = ''
            state.board = ''
            state.dialogView = ''
        },
        updateDialogView: (state, action) => {
            state.dialogView = action.payload
        },
        setSelectedTicketId: (state, action) => {
            state.ticketId = action.payload
        },
        setSelectedBoard: (state, action) => {
            state.board = action.payload
        },
        setSelectedTab: (state, action) => {
            state.selectedTab = action.payload
        },
    },
})

export const { 
    openDialog, 
    updateDialogView, 
    closeDialog, 
    setSelectedTicketId, 
    setSelectedBoard,
    setSelectedTab
} = stateSlice.actions

export default stateSlice.reducer
