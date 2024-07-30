import { createSlice } from '@reduxjs/toolkit'

const stateSlice = createSlice({
    name: 'accountDetailForm/state',
    initialState: {
        currentStep: 0,
    },
    reducers: {
        setCurrentStep: (state, action) => {
            state.currentStep = action.payload
        },
    }
})

export const { setCurrentStep } = stateSlice.actions

export default stateSlice.reducer
