import { createSlice } from '@reduxjs/toolkit'

const stateSlice = createSlice({
    name: 'cryptoDashboard/state',
    initialState: {
        tradeDialogOpen: false,
    },
    reducers: {
        toggleTradeDialog: (state, action) => {
            state.tradeDialogOpen = action.payload
        },
    }
})

export const { toggleTradeDialog } = stateSlice.actions

export default stateSlice.reducer
