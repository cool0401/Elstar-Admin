import React from 'react'
import ProceedBuy from './ProceedBuy'
import ProceedSell from './ProceedSell'

const ProceedTrade = props => {

	const { type } = props
	
	return (
		<>
			{type === 'BUY' && <ProceedBuy {...props} />}
			{type === 'SELL' && <ProceedSell {...props} />}
		</>
	)
}

export default ProceedTrade