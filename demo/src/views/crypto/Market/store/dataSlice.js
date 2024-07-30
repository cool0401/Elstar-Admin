import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { apiGetMarketyData } from 'services/CryptoService'

export const getMarketData = createAsyncThunk('cryptoMarket/data/getMarketData',async (data) => {
    const response = await apiGetMarketyData(data)
    return response.data
})

export const initialTableData = {
    total: 0,
    pageIndex: 1,
    pageSize: 10,
    query: '',
    sort: {
        order: '',
        key: ''
    }
}

const dataSlice = createSlice({
    name: 'cryptoMarket/data',
    initialState: {
        loading: true,
        marketData: [],
        tableData: initialTableData,
        selectedTab: 'all'
    },
    reducers: {
        setSelectedTab: (state, action) => {
            state.selectedTab = action.payload
        },
        setTableData: (state, action) => {
            state.tableData = action.payload
        },
        setMarketData: (state, action) => {
            state.marketData = action.payload
        },
    },
    extraReducers: {
        [getMarketData.fulfilled]: (state, action) => {
            state.loading = false
            state.tableData.total = action.payload.total
            state.marketData = action.payload.data
        },
        [getMarketData.pending]: (state) => {
            state.loading = true
        },
    }
})

export const { setSelectedTab, setTableData, setMarketData } = dataSlice.actions

export default dataSlice.reducer
