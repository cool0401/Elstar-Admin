import React, { useState }  from 'react'
import { Button, Dialog } from 'components/ui'

const Size = () => {
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
			<Button variant="solid" onClick={() => openDialog()}>Custom Size Dialog</Button>
			<Dialog
				isOpen={dialogIsOpen}
				onClose={onDialogClose}
				onRequestClose={onDialogClose}
				width={1000}
                height={250}
			>
                <div className="flex flex-col h-full justify-between">
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
                </div>
			</Dialog>
		</div>
	)
}

export default Size
