import React from 'react'
import { Notification, toast, Button, Avatar } from 'components/ui'
import { HiOutlineGift } from 'react-icons/hi'

const CustomIcon = () => {

	const notificationWithIcon = (
		<Notification 
			title="You received a Gift!" 
			customIcon={<HiOutlineGift className="text-2xl text-indigo-600" />}
		 >
			Something you may like.
		</Notification>
	)

	const notificationWithAvatar = (
		<Notification 
			title="Emily Gale" 
			customIcon={<Avatar shape="circle" src="/img/avatars/thumb-1.jpg" />}
		 >
			Sent you a friend request.
		</Notification>
	)

	function openNotification (type) {
		toast.push(type === 'icon' ? notificationWithIcon : notificationWithAvatar)
	}

	return (
		<div>
			<Button onClick={() => openNotification('icon')} className="mr-2" >Custom icon</Button>
			<Button onClick={() => openNotification('avatar')}>Avatar</Button>
		</div>
	)
}

export default CustomIcon
