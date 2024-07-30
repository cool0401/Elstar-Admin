```jsx
import React from 'react'
import { MediaSkeleton, Loading } from 'components/shared'

const Example = () => {
	return (
		<MediaSkeleton 
			avatarProps={
				{
					width: 45,
					height: 45
				}
			} 
		/>
	)
}

export default Example
```