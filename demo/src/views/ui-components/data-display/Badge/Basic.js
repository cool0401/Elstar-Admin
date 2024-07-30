import React from 'react'
import { Avatar, Badge } from 'components/ui'
import { HiOutlineUser } from 'react-icons/hi'

const Basic = () => {
	return (
		<div className="flex items-center">
			<Badge className="mr-4" content={9}>
				<Avatar icon={<HiOutlineUser />} />
			</Badge>
			<Badge className="mr-4" content={'New'}>
				<Avatar icon={<HiOutlineUser />} />
			</Badge>
		</div>
	)
}

export default Basic
