import React from 'react'
import { Button } from 'components/ui'
import NumberFormat from "react-number-format"
import Success from './Success'
import Failed from './Failed'
import InfoItem from './InfoItem'

const ProceedSell = (props) => {

	const { price, cryptoSymbol, amount, status, loading, onConfirm } = props
 
	return (
		
		<div className="mt-4">
			{status === 'SUCCESS' && <Success {...props} />}
			{status === 'FAILED' && <Failed {...props} />}
			{!status && (
				<>
					<div className="text-center my-8">
						<p className="mb-2">You will get</p>
						<h3 className="font-bold">
							<NumberFormat
									value={amount - (amount * 0.05)}
									displayType="text"
									suffix=" USD"
									thousandSeparator={true}
									allowNegative={true}
									decimalScale={2}
									fixedDecimalScale={true} 
								/>
						</h3>
					</div>
					<InfoItem
						label="Price"
						value={
							<NumberFormat
								value={price}
								displayType="text"
								suffix={` ${cryptoSymbol}`}
								thousandSeparator={true}
								allowNegative={true}
								decimalScale={2}
								fixedDecimalScale={true} 
							/>
						}
					/>
					<InfoItem
						label="Transaction Fees (0.05%)"
						value={
							<NumberFormat
								value={amount * 0.05}
								displayType="text"
								suffix=" USD"
								thousandSeparator={true}
								allowNegative={true}
								decimalScale={2}
								fixedDecimalScale={true} 
							/>
						}
					/>
					<Button 
						className="mt-6" 
						block 
						variant="solid"
						onClick={onConfirm}
						loading={loading}
					>
						Confirm
					</Button>
				</>
			)}
			
		</div>
	)
}

export default ProceedSell