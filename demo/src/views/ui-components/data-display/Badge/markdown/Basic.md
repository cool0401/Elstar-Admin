```jsx
import React from 'react'
import { Avatar, Badge } from 'components/ui'
import { HiOutlineUser } from 'react-icons/hi'

const Basic = () => {
	return (
		<div className="flex items-center">
			<Badge className="mr-4">
				<Avatar icon={<HiOutlineUser />} />
			</Badge>
			<Badge className="mr-4" content={99}>
				<Avatar icon={<HiOutlineUser />} />
			</Badge>
		</div>
	)
}

export default Basic
```