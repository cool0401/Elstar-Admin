import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { apiGetPortfolioData } from 'services/CryptoService'

export const getPortfolioData = createAsyncThunk('cryptoPortfolio/data/getPortfolioData',async () => {
    const response = await apiGetPortfolioData()
    return response.data
})

const dataSlice = createSlice({
    name: 'cryptoPortfolio/data',
    initialState: {
        loading: true,
        portfolioData: {}
    },
    reducers: {
        updateEvent: (state, action) => {
            state.eventList = action.payload
        },
    },
    extraReducers: {
        [getPortfolioData.fulfilled]: (state, action) => {
            state.loading = false
            state.portfolioData = action.payload
        },
        [getPortfolioData.pending]: (state) => {
            state.loading = true
        },
    }
})

export const { updateEvent } = dataSlice.actions

export default dataSlice.reducer
