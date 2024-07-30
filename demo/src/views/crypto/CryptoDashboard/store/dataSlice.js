import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { apiGetCryptoDashboardData } from 'services/CryptoService'

export const getCryptoDashboardData = createAsyncThunk('cryptoDashboard/data/getCryptoDashboardData',async (data) => {
    const response = await apiGetCryptoDashboardData(data)
    return response.data
})

const dataSlice = createSlice({
    name: 'cryptoDashboard/data',
    initialState: {
        loading: true,
        dashboardData: {},
    },
    reducers: {
        
    },
    extraReducers: {
        [getCryptoDashboardData.fulfilled]: (state, action) => {
            state.loading = false
            state.dashboardData = action.payload
        },
        [getCryptoDashboardData.pending]: (state) => {
            state.loading = true
        },
    }
})

export default dataSlice.reducer
