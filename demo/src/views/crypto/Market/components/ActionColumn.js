import React, { useCallback } from 'react'
import { Button } from 'components/ui'
import { useDispatch } from 'react-redux'
import { toggleTradeDialog, setSelectedRow } from '../store/stateSlice'

const ActionColumn = ({row}) => {
	const dispatch = useDispatch()

	const onTrade = useCallback(() => {
		dispatch(toggleTradeDialog(true))
		dispatch(setSelectedRow(row))
	}, [dispatch, row])
	
	
	return (
		<div className="ltr:text-right rtl:text-left">
			<Button size="sm" onClick={onTrade}>Trade</Button>
		</div>
	)
}

export default ActionColumn