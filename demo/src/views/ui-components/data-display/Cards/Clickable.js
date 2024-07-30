import React from 'react'
import { Card } from 'components/ui'

const Clickable = () => {

	const onClick = e => {
		console.log('Card Clickable', e)
	}

	return (
		<div className="max-w-xs">
			<Card clickable className="hover:shadow-lg transition duration-150 ease-in-out" onClick={onClick}>
				<h5>Card title</h5>
				<p className="mt-2">
					Some quick example text to build on the card title and 
					make up the bulk of the card's content.
				</p>
			</Card>
		</div>
	)
}

export default Clickable
