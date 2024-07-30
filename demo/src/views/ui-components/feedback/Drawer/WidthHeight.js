import React, { useState } from 'react'
import { Button, Drawer } from 'components/ui'

const WidthHeight = () => {
	const [verticalOpen, setVerticalOpen] = useState(false)
    const [horizontalOpen, setHorizontalOpen] = useState(false)

	const onVerticalOpen = () => {
		setVerticalOpen(true)
	}

    const onHorizontalOpen = () => {
		setHorizontalOpen(true)
	}

	const onDrawerClose = () => {
		setVerticalOpen(false)
        setHorizontalOpen(false)
	}

	return (
		<div>
			<Button variant="twoTone" className="mx-2" onClick={() => onVerticalOpen()}>Vertical Drawer</Button>
            <Button variant="twoTone" onClick={() => onHorizontalOpen()}>Horizontal Drawer</Button>
			<Drawer
				title="Vertical Drawer"
				isOpen={verticalOpen}
				onClose={onDrawerClose}
				onRequestClose={onDrawerClose}
                placement="right"
                width={600}
			>
				Drawer Content
			</Drawer>
            <Drawer
				title="Horizontal Drawer"
				isOpen={horizontalOpen}
				onClose={onDrawerClose}
				onRequestClose={onDrawerClose}
                placement="bottom"
                height={300}
			>
				Drawer Content
			</Drawer>
		</div>
	)
}

export default WidthHeight
