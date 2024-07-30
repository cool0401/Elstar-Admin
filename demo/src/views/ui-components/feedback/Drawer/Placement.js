import React, { useState } from 'react'
import { Button, Drawer, Radio } from 'components/ui'

const placementList = [
    { name: 'Top', value: 'top'},
    { name: 'Right', value: 'right'},
    { name: 'Bottom', value: 'bottom'},
    { name: 'Left', value: 'left'}
]

const Placement = () => {
	const [isOpen, setIsOpen] = useState(false)
    const [placement, setPlacement] = useState(placementList[1].value)

	const openDrawer = () => {
		setIsOpen(true)
	}

	const onDrawerClose = e => {
		console.log('onDrawerClose', e)
		setIsOpen(false)
	}

    const onPlacementChange = val => {
        setPlacement(val)
    }

	return (
		<div className="flex-wrap inline-flex xl:flex items-center gap-2">
            <Radio.Group value={placement} onChange={onPlacementChange}>
                {
                    placementList.map(item => (
                        <Radio 
                            value={item.value} 
                            id={item.value}
                            key={item.value}
                        >
                            {item.name}
                        </Radio>
                    ))
                }
            </Radio.Group>
			<Button onClick={() => openDrawer()}>Open Drawer</Button>
			<Drawer
				title="Drawer Title"
				isOpen={isOpen}
				onClose={onDrawerClose}
				onRequestClose={onDrawerClose}
                placement={placement}
			>
				Drawer Content
			</Drawer>
		</div>
	)
}

export default Placement
