import { createSlice } from '@reduxjs/toolkit'
import {
	UPDATE_TICKET, 
	COMMENT, 
	COMMENT_MENTION, 
	ASSIGN_TICKET,
	ADD_TAGS_TO_TICKET, 
	ADD_FILES_TO_TICKET,
	CREATE_TICKET
} from '../constants'

const stateSlice = createSlice({
    name: 'accountActivityLog/state',
    initialState: {
        selectedType: [
            UPDATE_TICKET, 
            COMMENT, 
            COMMENT_MENTION, 
            ASSIGN_TICKET,
            ADD_TAGS_TO_TICKET, 
            ADD_FILES_TO_TICKET,
            CREATE_TICKET
        ],
    },
    reducers: {
        setSelected: (state, action) => {
            state.selectedType = action.payload
        },
    },
})

export const { setSelected } = stateSlice.actions

export default stateSlice.reducer
