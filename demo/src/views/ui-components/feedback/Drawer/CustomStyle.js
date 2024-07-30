import React, { useState } from 'react'
import { Button, Drawer } from 'components/ui'

const CustomStyle = () => {
	const [isOpen, setIsOpen] = useState(false)

	const openDrawer = () => {
		setIsOpen(true)
	}

	const onDrawerClose = () => {
		setIsOpen(false)
	}

    const Footer = (
        <div className="flex w-full items-start">
            <Button className="mx-2" block onClick={() => onDrawerClose()}>Cancel</Button>
            <Button className="mx-2" variant="solid" block onClick={() => onDrawerClose()}>Confirm</Button>
        </div>
    )

    const Title = (
        <div>
            <h4 className="mb-2">Drawer Title</h4>
            <p>To iterate is human, to recurse divine.</p>
        </div>
    )

	return (
		<div>
			<Button onClick={() => openDrawer()}>Open Drawer</Button>
			<Drawer
				title={Title}
				isOpen={isOpen}
				onClose={onDrawerClose}
				onRequestClose={onDrawerClose}
                footer={Footer}
                headerClass="!items-start !bg-gray-100 dark:!bg-gray-700"
                footerClass="!border-t-0 !p-3"
			>
				Drawer Content
			</Drawer>
		</div>
	)
}

export default CustomStyle
