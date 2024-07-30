import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { apiGetSalesProduct, apiPutSalesProduct, apiDeleteSalesProducts } from 'services/SalesService'

export const getProduct = createAsyncThunk('salesProductEdit/data/getProducts', async (data) => {
    const response = await apiGetSalesProduct(data)
    return response.data
})

export const updateProduct = async (data) => {
    const response = await apiPutSalesProduct(data)
    return response.data
}

export const deleteProduct = async (data) => {
    const response = await apiDeleteSalesProducts(data)
    return response.data
}

const dataSlice = createSlice({
    name: 'salesProductEdit/data',
    initialState: {
        loading: false,
        productData: [],
        
    },
    reducers: {
    },
    extraReducers: {
        [getProduct.fulfilled]: (state, action) => {
            state.productData = action.payload
            state.loading = false
        },
        [getProduct.pending]: (state) => {
            state.loading = true
        },
    }
})

export default dataSlice.reducer
