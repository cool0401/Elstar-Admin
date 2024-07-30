import React from 'react'
import { Tooltip } from 'components/ui'

const DefaultOpen = () => {
	return (
		<div>
			<Tooltip title="Tooltip Message" isOpen={true} placement="right">
				<span>Default Open</span>
			</Tooltip>
		</div>
	)
}

export default DefaultOpen
