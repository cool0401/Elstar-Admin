```jsx
import React, { useState } from 'react'
import { Button, Drawer } from 'components/ui'

const Footer = () => {
	const [isOpen, setIsOpen] = useState(false)

	const openDrawer = () => {
		setIsOpen(true)
	}

	const onDrawerClose = () => {
		setIsOpen(false)
	}

    const Footer = (
        <div className="text-right w-full">
            <Button size="sm" className="mr-2" onClick={() => onDrawerClose()}>Cancel</Button>
            <Button size="sm" variant="solid" onClick={() => onDrawerClose()}>Confirm</Button>
        </div>
    )

	return (
		<div>
			<Button variant="solid" onClick={() => openDrawer()}>Open Drawer</Button>
			<Drawer
				title="Drawer Title"
				isOpen={isOpen}
				onClose={onDrawerClose}
				onRequestClose={onDrawerClose}
                footer={Footer}
			>
				Drawer Content
			</Drawer>
		</div>
	)
}

export default Footer
```