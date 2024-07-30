import React, { useCallback } from 'react'
import classNames from 'classnames'
import { Checkbox } from 'components/ui'
import Affix from 'components/shared/Affix'
import { useDispatch, useSelector } from 'react-redux'
import { setSelected } from '../store/stateSlice'
import { setActivityIndex, filterLogs } from '../store/dataSlice'
import {
	UPDATE_TICKET, 
	COMMENT, 
	COMMENT_MENTION, 
	ASSIGN_TICKET,
	ADD_TAGS_TO_TICKET, 
	ADD_FILES_TO_TICKET,
	CREATE_TICKET
} from '../constants'


const commentCheckboxes = [
	{label: 'Comment on post', value: COMMENT},
	{label: 'Mentioned you', value: COMMENT_MENTION}
]

const ticketCheckboxes = [
	{label: 'Ticket status', value: UPDATE_TICKET},
	{label: 'Assign ticket', value: ASSIGN_TICKET},
	{label: 'New ticket', value: CREATE_TICKET},
	{label: 'Add tags', value: ADD_TAGS_TO_TICKET},
	{label: 'Add files', value: ADD_FILES_TO_TICKET}
]

const CategoryTitle = ({children, className}) => {
	return (
		<h6 className={classNames(
			'text-gray-900 uppercase tracking-wide font-semibold text-sm lg:text-xs',
			className
		)}>
			{children}
		</h6>
	)
}

const LogFilter = () => {

	const dispatch = useDispatch()
	const selectedType = useSelector((state) => state.accountActivityLog.state.selectedType)
	const activityIndex = useSelector((state) => state.accountActivityLog.data.activityIndex)

	const onFilterChange = useCallback((selected) => {
		dispatch(filterLogs({filter: selected, activityIndex: 1}))
		if(activityIndex !== 1) {
			dispatch(setActivityIndex(1))
		}
		dispatch(setSelected(selected))
	}, [dispatch, activityIndex])

	return (
		<div>
			<Affix className="hidden lg:block" offset={80}>
				<h5 className="mb-4">Filter Activity</h5>
				<Checkbox.Group onChange={onFilterChange} vertical value={selectedType}>
					<CategoryTitle className="mb-3">Ticket</CategoryTitle>
					{ticketCheckboxes.map(checkbox => (
						<Checkbox
							className="mb-4"
							key={checkbox.value}
							value={checkbox.value}
						>
							{checkbox.label} 
						</Checkbox>
					))}
					<CategoryTitle className="mt-4 mb-3">Comment</CategoryTitle>
					{commentCheckboxes.map(checkbox => (
						<Checkbox
							className="mb-4"
							key={checkbox.value}
							value={checkbox.value}
						>
							{checkbox.label} 
						</Checkbox>
					))}
				</Checkbox.Group>
			</Affix>
		</div>
	)
}

export default LogFilter