```jsx
import React from 'react'
import { Skeleton } from 'components/ui'

const Variant = () => {
	return (
		<div className="flex items-center gap-4">
			<div>
				<Skeleton variant="circle" />
			</div>
			<Skeleton />
		</div>
	)
}

export default Variant
```