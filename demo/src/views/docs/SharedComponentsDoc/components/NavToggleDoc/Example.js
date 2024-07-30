import React, { useState } from 'react'
import { Button } from 'components/ui'
import { NavToggle } from 'components/shared'

const Example = () => {

	const [collapsed, setCollapsed] = useState(false)

	return (
		<Button
			shape="circle" 
			variant="plain"
			onClick={() => setCollapsed(!collapsed)}
			icon={<NavToggle toggled={collapsed} />}
		/>
	)
}

export default Example