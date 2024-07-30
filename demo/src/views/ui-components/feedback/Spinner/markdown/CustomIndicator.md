```jsx
import React from 'react'
import { Spinner } from 'components/ui'
import { ImSpinner9 } from 'react-icons/im'

const CustomIndicator = () => {
	return (
		<div>
			<Spinner size={40} indicator={ImSpinner9} />
		</div>
	)
}

export default CustomIndicator
```