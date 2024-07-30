import React, { useState, useRef } from 'react'
import { Input, Avatar, ScrollBar, Button } from 'components/ui'
import wildCardSearch from 'utils/wildCardSearch'
import { updateBoardMembers } from './store/dataSlice'
import { closeDialog } from './store/stateSlice'
import { HiOutlineSearch } from 'react-icons/hi'
import { useSelector, useDispatch } from 'react-redux'
import debounce from 'lodash/debounce'
import cloneDeep from 'lodash/cloneDeep'

const AddNewMemberContent = () => {

	const inputRef = useRef()

	const dispatch = useDispatch()

	const allMembers = useSelector(state => state.scrumBoard.data.allMembers)
	const boardMembers = useSelector(state => state.scrumBoard.data.boardMembers)

	const [memberList, setMemberList] = useState(allMembers)

	const debounceFn = debounce(handleDebounceFn, 500)

	function handleDebounceFn(query) {
		const data = wildCardSearch(memberList, query)
		setMemberList(data)
	}

	const onSearch = (e) => {
		debounceFn(e.target.value)
	}

	const existingMember = (id) => {
		return boardMembers.some(member => member.id === id)
	}

	const onAddMember = (member) => {
		const data = cloneDeep(boardMembers)
		data.push(member)
		dispatch(updateBoardMembers(data))
	}

	const onRemoveMember = (id) => {
		const data = cloneDeep(boardMembers).filter(member => member.id !== id)
		dispatch(updateBoardMembers(data))
	}

	const onDone = () => {
		dispatch(closeDialog())
	}

	return (
		<div>
			<div className="text-center mb-6">
				<h4 className="mb-2">Add people</h4>
				<p>Invite existing team member to this project.</p>
			</div>
			<Input 
				ref={inputRef}
				prefix={<HiOutlineSearch className="text-lg" />} 
				onChange={onSearch}
				placeholder="Quick search member"
			/>
			<div className="mt-4">
				<p className="font-semibold uppercase text-xs mb-4">{memberList.length} members available</p>
				<div className="overflow-y-auto h-80 mb-6">
					<ScrollBar>
						{
							memberList.map(member => (
								<div key={member.id} className="py-3 pr-5 rounded-lg flex items-center justify-between">
									<div className="flex items-center gap-2">
										<Avatar shape="circle" src={member.img} />
										<div>
											<p className="heading-text font-bold">{member.name}</p>
											<p>{member.email}</p>
										</div>
									</div>
									{
										existingMember(member.id) ?
										<Button size="xs" onClick={() => onRemoveMember(member.id)}>
											<span className="text-red-500">Remove</span>
										</Button>
										:
										<Button size="xs" onClick={() => onAddMember(member)}>Add</Button>
									}
								</div>
							))
						}
					</ScrollBar>
				</div>
				<Button block variant="solid" onClick={onDone}>Done</Button>
			</div>
		</div>
	)
}

export default AddNewMemberContent