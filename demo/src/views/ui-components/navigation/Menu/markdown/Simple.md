```jsx
import React from 'react'
import { Menu } from 'components/ui'

const Simple = () => {

	const handleSelect = (key, e) => {
		console.log('key', key)
		console.log('event', e)
	}

	return (
		<div className="border rounded-md p-2" style={{maxWidth: 250}}> 
			<Menu onSelect={handleSelect}>
				<Menu.MenuItem eventKey="settings">Settings</Menu.MenuItem>
				<Menu.MenuItem eventKey="message">Message</Menu.MenuItem>
				<Menu.MenuItem eventKey="gallery">Gallery</Menu.MenuItem>
			</Menu>
		</div>
	)
}

export default Simple
```