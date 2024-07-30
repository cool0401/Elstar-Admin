import React, { useEffect } from 'react'
import { CalendarView, Container } from 'components/shared'
import EventDialog from './components/EventDialog'
import reducer from './store'
import { injectReducer } from 'store/index'
import { getEvents, updateEvent } from './store/dataSlice'
import { setSelected, openDialog } from './store/stateSlice'
import { useDispatch, useSelector } from 'react-redux'
import cloneDeep from 'lodash/cloneDeep'

injectReducer('crmCalendar', reducer)

const Calendar = () => {

	const dispatch = useDispatch()
	const events = useSelector((state) => state.crmCalendar.data.eventList)

	useEffect(() => {
		dispatch(getEvents())
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const onCellSelect = event => {
		const { start, end } = event
		dispatch(setSelected({
			type: 'NEW',
			start,
			end
		}))
		dispatch(openDialog())
	}

	const onEventClick = arg => {
		
		const { start, end, id, title, extendedProps } = arg.event
		
		dispatch(setSelected({
			type: 'EDIT',
			eventColor: extendedProps.eventColor,
			title,
			start,
			end,
			id,
		}))
		dispatch(openDialog())
	}

	const onSubmit = (data, type) => {
		let newEvents = cloneDeep(events)

		if (type === 'NEW') {
			newEvents.push(data)
		}

		if (type === 'EDIT') {
			newEvents = newEvents.map(event => {
				if (data.id === event.id) {
					event = data
				}
				return event
			})
		}
		dispatch(updateEvent(newEvents))
	}

	const onEventChange = (arg) => {
		const newEvents = cloneDeep(events).map(event => {
			if (arg.event.id === event.id) {
				const { id, extendedProps, start, end, title } = arg.event
				event = {
					id,
					start,
					end,
					title,
					eventColor: extendedProps.eventColor
				}
			}
			return event
		})
		dispatch(updateEvent(newEvents))
	}

	return (
		<Container className="h-full">
			<CalendarView 
				events={events} 
				eventClick={onEventClick}
				select={onCellSelect}
				editable
				selectable
				eventDrop={onEventChange}
			/>
			<EventDialog submit={onSubmit} />
		</Container>
	)
}

export default Calendar
