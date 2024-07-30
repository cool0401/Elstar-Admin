import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { apiGetCategorizedArticles } from 'services/KnowledgeBaseService'

export const getCategorizedArticles = createAsyncThunk('knowledgeBaseManageArticles/data/getCategorizedArticles',async () => {
    const response = await apiGetCategorizedArticles()
    return response.data
})

const dataSlice = createSlice({
    name: 'knowledgeBaseManageArticles/data',
    initialState: {
        loading: false,
        categorizedArticles: []
    },
    reducers: {
        setCategorizedArticles: (state, action) => {
            state.categorizedArticles = action.payload
        }
    },
    extraReducers: {
        [getCategorizedArticles.fulfilled]: (state, action) => {
            state.loading = false
            state.categorizedArticles = action.payload
        },
        [getCategorizedArticles.pending]: (state) => {
            state.loading = true
        },
    }
})

export const { setCategorizedArticles } = dataSlice.actions

export default dataSlice.reducer
