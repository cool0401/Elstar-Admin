import { createSlice } from '@reduxjs/toolkit'

const dataSlice = createSlice({
    name: 'knowledgeBaseManageArticles/state',
    initialState: {
        articleDeleteConfirmation: false,
        categoryDeleteConfirmation: false,
        categoryRenameDialog: false,
        categoryAddDialog: false,
        selected: {
            id: '',
            categoryValue: ''
        }
    },
    reducers: {
        toggleArticleDeleteConfirmation: (state, action) => {
            state.articleDeleteConfirmation = action.payload
        },
        toggleCategoryDeleteConfirmation: (state, action) => {
            state.categoryDeleteConfirmation = action.payload
        },
        toggleCategoryRenameDialog: (state, action) => {
            state.categoryRenameDialog = action.payload
        },
        toggleAddCategoryDialog: (state, action) => {
            state.categoryAddDialog = action.payload
        },
        setSelected: (state, action) => {
            state.selected = action.payload
        },
    },
})

export const { 
    toggleArticleDeleteConfirmation,
    toggleCategoryDeleteConfirmation,
    toggleCategoryRenameDialog, 
    toggleAddCategoryDialog,
    setSelected 
} = dataSlice.actions

export default dataSlice.reducer
