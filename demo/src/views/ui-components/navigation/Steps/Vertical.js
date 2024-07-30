import React from 'react'
import { Steps } from 'components/ui'

const Vertical = () => {
	return (
		<div>
			<Steps current={1} vertical>
				<Steps.Item title="Login" />
				<Steps.Item title="Order Placed" />
				<Steps.Item title="In Review" />
				<Steps.Item title="Approved" />
			</Steps>
		</div>
	)
}

export default Vertical
