```jsx
import React from 'react'
import { Steps } from 'components/ui'

const Basic = () => {
	return (
		<div>
			<Steps current={1}>
				<Steps.Item />
				<Steps.Item />
				<Steps.Item />
				<Steps.Item />
			</Steps>
		</div>
	)
}

export default Basic
```