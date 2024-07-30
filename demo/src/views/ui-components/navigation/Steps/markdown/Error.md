```jsx
import React from 'react'
import { Steps } from 'components/ui'

const Error = () => {
	return (
		<div>
			<Steps current={1} status="error">
				<Steps.Item title="Login" />
				<Steps.Item title="Order Placed" />
				<Steps.Item title="In Review" />
				<Steps.Item title="Approved" />
			</Steps>
		</div>
	)
}

export default Error
```