import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { apiGetCategoriesData, apiQueryArticleList } from 'services/KnowledgeBaseService'

export const getCategories = createAsyncThunk('knowledgeBaseHelpCenter/data/getCategories',async () => {
    const response = await apiGetCategoriesData()
    return response.data
})

export const queryArticles = createAsyncThunk('knowledgeBaseHelpCenter/data/queryArticles',async (data) => {
    const response = await apiQueryArticleList(data)
    return response.data
})

const dataSlice = createSlice({
    name: 'knowledgeBaseHelpCenter/data',
    initialState: {
        loading: false,
        isSearchResult: false,
        searchCategory: '',
        queryText: '',
        categories: [],
        articles: []
    },
    reducers: {
        setSearchCategory: (state, action) => {
            state.searchCategory = action.payload
        },
        setQueryText: (state, action) => {
            state.queryText = action.payload
        },
        setSearch: (state, action) => {
            state.isSearchResult = action.payload
        },
    },
    extraReducers: {
        [getCategories.fulfilled]: (state, action) => {
            state.loading = false
            state.categories = action.payload
        },
        [getCategories.pending]: (state) => {
            state.loading = true
        },
        [queryArticles.fulfilled]: (state, action) => {
            state.loading = false
            state.articles = action.payload
        },
        [queryArticles.pending]: (state) => {
            state.loading = true
        },
    }
})

export const { setSearchCategory, setQueryText, setSearch } = dataSlice.actions

export default dataSlice.reducer
