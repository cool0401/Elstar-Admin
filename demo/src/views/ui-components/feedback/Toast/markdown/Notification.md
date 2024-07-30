```jsx
import React from 'react'
import { Notification, toast, Button} from 'components/ui'

const Basic = () => {

    const toastNotification = (
        <Notification title="Mesasge">
            The fat cat sat on the mat bat away with paws annoy owner.
        </Notification>
    )
    
    function openNotification () {
		toast.push(toastNotification)
	}

	return (
		<div>
			<Button onClick={openNotification} className="mr-2 mb-2" >Show toast</Button>
		</div>
	)
}

export default Basic
```