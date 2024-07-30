```jsx
import React from 'react'
import { Alert, toast, Button} from 'components/ui'

const AlertToast = () => {

	function blockAlert() {
		toast.push(<Alert showIcon closable type="success" rounded={false}>Success</Alert>, {
			offsetX: 0,
			offsetY: 0,
			transitionType: 'fade',
			block: true
		})
	}

	return (
		<div>
			<Button onClick={blockAlert} className="mr-2">Show Alert</Button>
		</div>
	)
}

export default AlertToast
```