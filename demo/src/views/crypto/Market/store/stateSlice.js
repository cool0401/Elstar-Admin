import { createSlice } from '@reduxjs/toolkit'

const stateSlice = createSlice({
    name: 'cryptoMarket/state',
    initialState: {
        tradeDialogOpen: false,
        selectedRow: {}
    },
    reducers: {
        toggleTradeDialog: (state, action) => {
            state.tradeDialogOpen = action.payload
        },
        setSelectedRow: (state, action) => {
            state.selectedRow = action.payload
        },
    }
})

export const { toggleTradeDialog, setSelectedRow } = stateSlice.actions

export default stateSlice.reducer
