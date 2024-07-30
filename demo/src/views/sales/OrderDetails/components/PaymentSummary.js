import React from 'react'
import { Card } from 'components/ui'
import NumberFormat from 'react-number-format'

const PaymentInfo = ({label, value, isLast}) => {
	return (
		<li className={`flex items-center justify-between${!isLast ? ' mb-3' : ''}`}>
			<span>{label}</span>
			<span className="font-semibold">
				<NumberFormat
					displayType="text"
					value={(Math.round(value * 100) / 100).toFixed(2)} 
					prefix={'$'} 
					thousandSeparator={true} 
				/>
			</span>
		</li>
	)
}

const PaymentSummary = ({data}) => {
	return (
		<Card className="mb-4">
			<h5 className="mb-4">Payment Summary</h5>
			<ul>
				<PaymentInfo label="Subtotal" value={data.subTotal} />
				<PaymentInfo label="Delivery fee" value={data.deliveryFees} />
				<PaymentInfo label="Tax(6%)" value={data.tax} />
				<hr className="mb-3" />
				<PaymentInfo label="Total" value={data.total} isLast />
			</ul>
		</Card>
	)
}

export default PaymentSummary