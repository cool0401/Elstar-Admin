import { createSlice } from '@reduxjs/toolkit'

const stateSlice = createSlice({
    name: 'crmCustomers/state',
    initialState: {
        drawerOpen: false,
        selectedCustomer: {},
        sortedColumn: () => {},
    },
    reducers: {
        setSelectedCustomer: (state, action) => {
            state.selectedCustomer = action.payload
        },
        setSortedColumn: (state, action) => {
            state.sortedColumn = action.payload
        },
        setDrawerOpen: (state) => {
            state.drawerOpen = true
        },
        setDrawerClose: (state) => {
            state.drawerOpen = false
        },
    },
})

export const { 
    setSelectedCustomer, 
    setDrawerOpen, 
    setDrawerClose,
    setSortedColumn
} = stateSlice.actions

export default stateSlice.reducer
