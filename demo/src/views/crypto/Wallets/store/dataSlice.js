import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { apiGetWalletData, apiGetTransctionHistoryData } from 'services/CryptoService'

export const getWalletData = createAsyncThunk('cryptoWallets/data/getWalletData',async () => {
    const response = await apiGetWalletData()
    return response.data
})

export const getTransctionHistoryData = createAsyncThunk('cryptoWallets/data/getTransctionHistoryData',async (data) => {
    const response = await apiGetTransctionHistoryData(data)
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
    name: 'cryptoWallets/data',
    initialState: {
        loading: true,
        walletsData: [],
        transactionHistoryLoading: true,
        transactionHistoryData: [],
        tableData: initialTableData,
        selectedTab: 'trade'
    },
    reducers: {
        setSelectedTab: (state, action) => {
            state.selectedTab = action.payload
        },
        setTableData: (state, action) => {
            state.tableData = action.payload
        },
        setTransactionHistoryData: (state, action) => {
            state.transactionHistoryData = action.payload
        },
    },
    extraReducers: {
        [getWalletData.fulfilled]: (state, action) => {
            state.loading = false
            state.walletsData = action.payload
        },
        [getWalletData.pending]: (state) => {
            state.loading = true
        },
        [getTransctionHistoryData.fulfilled]: (state, action) => {
            state.transactionHistoryLoading = false
            state.tableData.total = action.payload.total
            state.transactionHistoryData = action.payload.data
        },
        [getTransctionHistoryData.pending]: (state) => {
            state.transactionHistoryLoading = true
        },
    }
})

export const { setSelectedTab, setTableData, setTransactionHistoryData } = dataSlice.actions

export default dataSlice.reducer
