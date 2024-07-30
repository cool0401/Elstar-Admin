import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { apiGetCrmCalendar } from 'services/CrmService'

export const getEvents = createAsyncThunk('crmCalendar/data/getEvents',async (data) => {
	const response = await apiGetCrmCalendar(data)
	return response.data
})

const dataSlice = createSlice({
	name: 'crmCalendar/data',
	initialState: {
		loading: false,
		eventList: []
	},
	reducers: {
		updateEvent: (state, action) => {
			state.eventList = action.payload
		},
	},
	extraReducers: {
		[getEvents.fulfilled]: (state, action) => {
			state.eventList = action.payload
		},
	}
})

export const { updateEvent } = dataSlice.actions

export default dataSlice.reducer
