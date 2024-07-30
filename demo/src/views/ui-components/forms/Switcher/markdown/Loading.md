```jsx
import React, { useState } from 'react'
import { Switcher } from 'components/ui'

const Loading = () => {

	const [checked, setChecked] = useState(false)
	const [isLoading, setIsLoading] = useState(false)

	const onSwitcherToggle = (val, e) => {
		setIsLoading(true)
		setTimeout(() => {
			setChecked(checked => !checked)
			setIsLoading(false)
		}, 1000)
	}

	return (
		<div>
			<Switcher 
				checked={checked}
				isLoading={isLoading}
				onChange={onSwitcherToggle}
			 />
		</div>
	)
}

export default Loading
```