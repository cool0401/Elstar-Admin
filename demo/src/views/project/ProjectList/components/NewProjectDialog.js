import React from 'react'
import { Dialog } from 'components/ui'
import NewProjectForm from './NewProjectForm'
import { toggleNewProjectDialog } from '../store/stateSlice'
import { useDispatch, useSelector } from 'react-redux'

const NewProjectDialog = () => {

	const dispatch = useDispatch()

	const newProjectDialog = useSelector((state) => state.projectList.state.newProjectDialog)
	
	const onDialogClose = () => {
		dispatch(toggleNewProjectDialog(false))
	}

	return (
		<Dialog
			isOpen={newProjectDialog}
			onClose={onDialogClose}
			onRequestClose={onDialogClose}
		>
			<h4>Add new project</h4>
			<div className="mt-4">
				<NewProjectForm />
			</div>
		</Dialog>
	)
}

export default NewProjectDialog