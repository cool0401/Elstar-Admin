```jsx
import React from 'react'
import { Notification, toast, Button} from 'components/ui'

const CustomClose = () => {

	function closeNotification (key) {
		toast.remove(key)
	}

	function openNotification () {
		const notificationKey = toast.push(
			<Notification title="Mesasge" duration={0}>
				<div>The fat cat sat on the mat bat away with paws annoy owner.</div>
				<div className="text-right mt-3">
					<Button onClick={() => closeNotification(notificationKey)} size="xs" variant="solid" className="mr-2">Confirm</Button>
					<Button onClick={() => closeNotification(notificationKey)} size="xs">Close</Button>
				</div>
			</Notification>
		)
	}

	return (
		<Button onClick={openNotification}>Show toast</Button>
	)
}

export default CustomClose
```