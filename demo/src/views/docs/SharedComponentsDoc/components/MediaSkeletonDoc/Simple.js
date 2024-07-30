import React from 'react'
import { MediaSkeleton } from 'components/shared'

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