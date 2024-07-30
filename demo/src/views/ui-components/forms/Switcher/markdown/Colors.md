```jsx
import React from 'react'
import { Switcher } from 'components/ui'

const Colors = () => {
	return (
		<div>
			<div className="mb-4">
				<Switcher defaultChecked color="green-500" />
			</div>
			<div className="mb-4">
				<Switcher defaultChecked color="blue-500" />
			</div>
		</div>
	)
}

export default Colors
```