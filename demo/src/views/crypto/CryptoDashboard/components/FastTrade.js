import React, { useState } from 'react'
import { Card, Dialog } from 'components/ui'
import TradeForm from 'views/crypto/TradeForm'
import ProceedTrade from 'views/crypto/ProceedTrade'
import { useDispatch, useSelector } from 'react-redux'
import { toggleTradeDialog } from '../store/stateSlice'
import { useNavigate } from 'react-router-dom'
import isEmpty from 'lodash/isEmpty'

const FastTrade = ({className}) => {

	const dispatch = useDispatch()

	const navigate = useNavigate()

	const tradeDialogOpen = useSelector((state) => state.cryptoDashboard.state.tradeDialogOpen)

	const [status, setStatus] = useState('')
	const [confirmLoading, setConfirmLoading] = useState(false)

	const [showProceed, setShowProceed] = useState({})

	const handleTrade = (values, setSubmitting, trade) => {
		setTimeout(() => {
			setSubmitting(false)
			dispatch(toggleTradeDialog(true))
			setShowProceed({...values, type: trade})
			setConfirmLoading(false)
			setStatus('')
		}, 500)
	}

	const onDialogClose = () => {
		dispatch(toggleTradeDialog(false))
		setTimeout(() => {
			setShowProceed({})
			setConfirmLoading(false)
			setStatus('')
		}, 300)
	}

	const hadleConfirm = () => {
		setConfirmLoading(true)
		setTimeout(() => {
			setStatus('SUCCESS')
		}, 1000)
	}

	const handleDone = (redirect) => {
		onDialogClose()
		if (redirect) {
			navigate('/app/crypto/wallets')
		}
	}

	return (
		<>
			<Card className={className}>
				<TradeForm 
					amount={29877.3} 
					symbol="BTC"
					onBuy={(values, setSubmitting) => handleTrade(values, setSubmitting, 'BUY')}
					onSell={(values, setSubmitting) => handleTrade(values, setSubmitting, 'SELL')}
				/>
			</Card>
			<Dialog
				isOpen={tradeDialogOpen}
				onRequestClose={onDialogClose}
				onClose={onDialogClose}
				width={400}
			>
				<h5 className="mb-4">
					{!isEmpty(showProceed) && !status && 'Order preview'}
				</h5>
				{
					!isEmpty(showProceed) && (
						<ProceedTrade 
							onConfirm={hadleConfirm}
							onDone={handleDone}
							loading={confirmLoading}
							status={status}
							{...showProceed} 
						/> 
					)
				}
			</Dialog>
		</>
	)
}

export default FastTrade