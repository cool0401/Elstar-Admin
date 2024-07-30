```jsx
import React, { useState } from 'react'
import { Switcher } from 'components/ui'

const Controlled = () => {

	const [checked, setChecked] = useState(false)

	const onSwitcherToggle = (val) => {
		console.log('value', val)
		setChecked(!val)
	}

	return (
		<div>
			<Switcher 
				checked={checked}
				onChange={onSwitcherToggle}
			/>
		</div>
	)
}

export default Controlled
```