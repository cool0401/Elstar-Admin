import React from 'react'
import { Tooltip } from 'components/ui'

const Basic = () => {
	return (
		<div>
			<Tooltip title="Tooltip message">
				<span className="cursor-pointer">Hover me</span>
			</Tooltip>
		</div>
	)
}

export default Basic
