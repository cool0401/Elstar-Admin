```jsx
import React from 'react'
import { GrowShrinkTag } from 'components/shared'

const Example = () => {
	return (
		<div className="flex gap-4">
			<GrowShrinkTag value={21.12} suffix="%" />
			<GrowShrinkTag value={-0.48} prefix="$" />
		</div>
	)
}

export default Example
```