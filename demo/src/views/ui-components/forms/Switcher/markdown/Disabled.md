```jsx
import React from 'react'
import { Switcher } from 'components/ui'

const Disabled = () => {
	return (
		<div>
			<div className="mb-4">
				<Switcher disabled />
			</div>
			<div className="mb-4">
				<Switcher disabled defaultChecked />
			</div>
		</div>
	)
}

export default Disabled
```