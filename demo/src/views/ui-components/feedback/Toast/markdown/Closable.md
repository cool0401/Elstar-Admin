```jsx
import React from 'react'
import { Notification, toast, Button} from 'components/ui'

const Closable = () => {

	const toastNotification = (
		<Notification title="Mesasge" closable>
			The fat cat sat on the mat bat away with paws annoy owner.
		</Notification>
	)

	function openNotification () {
		toast.push(toastNotification)
	}

	return (
		<div>
			<Button onClick={openNotification}>Show toast</Button>
		</div>
	)
}

export default Closable
```