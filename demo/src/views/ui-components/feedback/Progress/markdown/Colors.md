```jsx
import React from 'react'
import { Progress } from 'components/ui'

const Colors = () => {
	return (
		<div>
			<Progress color="red-500" percent={20} className="mb-4" />
			<Progress color="green-500" percent={30} className="mb-4" />
		</div>
	)
}

export default Colors
```