import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { 
    apiGetCrmMails,
    apiGetCrmMail,
} from 'services/CrmService'

export const getMails = createAsyncThunk('crmMail/data/getMails',async (params) => {
    const response = await apiGetCrmMails(params)
    return response.data
})

export const getMail = createAsyncThunk('crmMail/data/getMail',async (params) => {
    const response = await apiGetCrmMail(params)
    return response.data
})

const dataSlice = createSlice({
    name: 'crmMail/data',
    initialState: {
        mailListLoading: false,
        mailLoading: false,
        mailList: [],
        mail: {},
        selectedMailId: '',
    },
    reducers: {
        updateMailList: (state, action) => {
            state.mailList = action.payload
        },
        updateMail: (state, action) => {
            state.mail = action.payload
        },
        updateMailId: (state, action) => {
            if (action.payload) {
                state.mailLoading = true
            }
            state.selectedMailId = action.payload
        },
    },
    extraReducers: {
        [getMails.fulfilled]: (state, action) => {
            state.mailListLoading = false
            state.mailList = action.payload
        },
        [getMail.fulfilled]: (state, action) => {
            state.mailLoading = false
            state.mail = action.payload
        },
        [getMails.pending]: (state) => {
            state.mailListLoading = true
        },
        [getMail.pending]: (state) => {
            state.mailLoading = true
        },
    }
})

export const { updateMailList, updateMail, updateMailId } = dataSlice.actions

export default dataSlice.reducer
