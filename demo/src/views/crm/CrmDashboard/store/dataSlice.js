import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { apiGetCrmDashboardData } from 'services/CrmService'

export const getCrmDashboardData = createAsyncThunk('crmDashboard/data/getCrmDashboardData',async () => {
    const response = await apiGetCrmDashboardData()
    return response.data
})

export const initialFilterData = {
    status: '',
}

const dataSlice = createSlice({
    name: 'crmDashboard/data',
    initialState: {
        loading: true,
        dashboardData: {},
    },
    reducers: {
    },
    extraReducers: {
        [getCrmDashboardData.fulfilled]: (state, action) => {
            state.dashboardData = action.payload
            state.loading = false
        },
        [getCrmDashboardData.pending]: (state) => {
            state.loading = true
        }
    }
})

export default dataSlice.reducer
