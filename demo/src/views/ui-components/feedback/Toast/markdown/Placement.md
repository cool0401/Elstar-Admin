```jsx
import React from 'react'
import { Notification, toast, Button} from 'components/ui'

const Placement = () => {

	const openNotification = (placement) => {
		toast.push(
			<Notification type="success" title="Message" />,
			{
				placement: placement
			}
		)
	}

	return (
		<div className="grid grid-cols-3 gap-4 max-w-xl">
			<Button onClick={() => openNotification('top-start')} className="mb-2">Top Start</Button>
			<Button onClick={() => openNotification('top-center')} className="mb-2">Top Center</Button>
			<Button onClick={() => openNotification('top-end')} className="mb-2">Top End</Button>
			<Button onClick={() => openNotification('bottom-start')} className="mb-2">Bottom Start</Button>
			<Button onClick={() => openNotification('bottom-center')} className="mb-2">Bottom Center</Button>
			<Button onClick={() => openNotification('bottom-end')} className="mb-2">Bottom End</Button>
		</div>
	)
}

export default Placement
```