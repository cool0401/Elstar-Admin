import { createSlice } from '@reduxjs/toolkit'

const stateSlice = createSlice({
    name: 'projectList/state',
    initialState: {
        view: 'grid',
        query: {
            order: 'asc',
            search: ''
        },
        newProjectDialog: false
    },
    reducers: {
        toggleView: (state, action) => {
            state.view = action.payload
        },
        toggleSort: (state, action) => {
            state.query.order = action.payload
        },
        setSearch: (state, action) => {
            state.query.search = action.payload
        },
        toggleNewProjectDialog: (state, action) => {
            state.newProjectDialog = action.payload
        }
    },
})

export const { toggleView, toggleSort, toggleNewProjectDialog, setSearch } = stateSlice.actions

export default stateSlice.reducer
