```jsx
import React, { useState } from 'react'
import { Menu, Radio } from 'components/ui'

const Variants = () => {

	const [variant, setvariant] = useState('light')

	const handleChange = (value) => {
		setvariant(value)
	}

	return (
		<div className="flex flex-col gap-4">
			<Radio.Group value={variant} name="menuVariants" onChange={handleChange}>
				<Radio value={'light'}>Light</Radio>
				<Radio value={'dark'}>Dark</Radio>
				<Radio value={'themed'}>Themed</Radio>
				<Radio value={'transparent'}>Transparent</Radio>
			</Radio.Group>
			<Menu variant={variant} className="border rounded-md p-2" style={{maxWidth: 250}}>
				<Menu.MenuItem eventKey="settings">Settings</Menu.MenuItem>
				<Menu.MenuItem eventKey="message">Message</Menu.MenuItem>
				<Menu.MenuItem eventKey="gallery">Gallery</Menu.MenuItem>
			</Menu>
		</div>
	)
}

export default Variants
```