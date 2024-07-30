import React from 'react'
import { Notification, toast, Button} from 'components/ui'

const Duration = () => {

	function notificationNeverClose() {
		toast.push(
            <Notification closable type="success" duration={0}>Success</Notification>
        )
	}

	function closeAfter2000ms() {
		toast.push(
			<Notification closable type="success" duration={2000} >Success</Notification>
        )
	}

	return (
		<div>
			<Button onClick={notificationNeverClose} className="mr-2">Persist</Button>
			<Button onClick={closeAfter2000ms} className="mr-2">Close after 2s</Button>
		</div>
	)
}

export default Duration
