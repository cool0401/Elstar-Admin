```jsx
import React, { useState }  from 'react'
import { Button, Dialog } from 'components/ui'

const CloseWithEscBackdrop = () => {
	const [dialogIsOpen, setIsOpen] = useState(false)

	const openDialog = () => {
		setIsOpen(true)
	}

	const onDialogClose = e => {
		console.log('onDialogClose', e)
		setIsOpen(false)
	}

	const onDialogOk = e => {
		console.log('onDialogOk', e)
		setIsOpen(false)
	}

	return (
		<div>
			<Button variant="solid" onClick={() => openDialog()}>Open Dialog</Button>
			<Dialog
				isOpen={dialogIsOpen}
                onClose={onDialogClose}
				onRequestClose={onDialogClose}
                shouldCloseOnOverlayClick={false}
				shouldCloseOnEsc={false}
			>
				<h5 className="mb-4">Dialog Title</h5>
				<p>
					There are many variations of passages of Lorem Ipsum available, 
					but the majority have suffered alteration in some form, by injected humour,
					 or randomised words which don't look even slightly believable.
				</p>
				<div className="text-right mt-6">
					<Button className="ltr:mr-2 rtl:ml-2" variant="plain" onClick={onDialogClose}>Cancel</Button>
					<Button variant="solid" onClick={onDialogOk}>Okay</Button>
				</div>
			</Dialog>
		</div>
	)
}

export default CloseWithEscBackdrop
```