import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { 
    apiGetScrumBoards, 
    apiGetScrumBoardtMembers,
} from 'services/ProjectService'

export const getBoards = createAsyncThunk('scrumBoard/getBoards', async () => {
    const response = await apiGetScrumBoards()
    return response.data
})

export const getMembers = createAsyncThunk('scrumBoard/getMembers', async () => {
    const response = await apiGetScrumBoardtMembers()
    return response.data
})

const dataSlice = createSlice({
    name: 'scrumBoard/data',
    initialState: {
        loading: false,
        columns: {},
        ordered: [],
        boardMembers: [],
        allMembers: []
    },
    reducers: {
        updateOrdered: (state, action) => {
            state.ordered = action.payload
        },
        updateColumns: (state, action) => {
            state.columns = action.payload
        },
        updateBoardMembers: (state, action) => {
            state.boardMembers = action.payload
        },
    },
    extraReducers: {
        [getBoards.fulfilled]: (state, { payload }) => {
            state.columns = payload
            state.ordered = Object.keys(payload)
            state.loading = false
        },
        [getBoards.pending]: (state) => {
            state.loading = true
        },
        [getMembers.fulfilled]: (state, action) => {
            state.boardMembers = action.payload.participantMembers
            state.allMembers = action.payload.allMembers
        },
    }
})

export const { updateOrdered, updateColumns, updateBoardMembers } = dataSlice.actions

export default dataSlice.reducer
