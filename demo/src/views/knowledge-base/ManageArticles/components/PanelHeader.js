import React from 'react'
import { Button } from 'components/ui'
import { toggleAddCategoryDialog } from '../store/stateSlice'
import { useDispatch } from 'react-redux'

const PanelHeader = () => {

	const dispatch = useDispatch()

	const onAddCategory = () => {
		dispatch(toggleAddCategoryDialog(true))
	}

	return (
		<div className="flex items-center">
			<Button 
				onClick={onAddCategory} 
				size="sm" 
				variant="solid"
			>
				Add category
			</Button>
		</div>
	)
}

export default PanelHeader