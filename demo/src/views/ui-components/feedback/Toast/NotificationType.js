import React from 'react'
import { Notification, toast, Button} from 'components/ui'

const NotificationType = () => {

	const openNotification = (type) => {
		toast.push(
			<Notification title={type.charAt(0).toUpperCase() + type.slice(1)} type={type}>
				The fat cat sat on the mat bat away with paws annoy owner.
			</Notification>
		)
	}

	return (
		<div>
			<Button onClick={() => openNotification('success')} className="mr-2 mb-2">Success</Button>
			<Button onClick={() => openNotification('info')} className="mr-2 mb-2">Info</Button>
			<Button onClick={() => openNotification('danger')} className="mr-2 mb-2">Danger</Button>
			<Button onClick={() => openNotification('warning')} className="mr-2 mb-2">Warning</Button>
		</div>
	)
}

export default NotificationType
