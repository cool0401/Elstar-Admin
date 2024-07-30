import React from 'react'
import { Menu } from 'components/ui'

const CollapsableMenuItem = () => {

	const handleToggle = (expanded, e) => {
		console.log('expanded', expanded)
		console.log('event', e)
	}

	return (
		<div className="border rounded-md p-2" style={{maxWidth: 250}}>
			<Menu>
				<Menu.MenuItem eventKey="item-1">Item 1</Menu.MenuItem>
				<Menu.MenuItem eventKey="item-2">Item 2</Menu.MenuItem>
				<Menu.MenuCollapse eventKey="item-3" label="Item 3" onToggle={handleToggle}>
					<Menu.MenuItem eventKey="item-3-1">Item 3.1</Menu.MenuItem>
					<Menu.MenuItem eventKey="item-3-2">Item 3.2</Menu.MenuItem>
				</Menu.MenuCollapse>
			</Menu>
		</div>
	)
}

export default CollapsableMenuItem