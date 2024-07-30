import React from 'react'
import { Button, Dropdown } from 'components/ui'

const CustomToggle = () => {

    const Toggle = (
        <Button>Toggle as Button</Button>
    )

	return (
		<div>
			<Dropdown renderTitle={Toggle}>
				<Dropdown.Item eventKey="a">Item A</Dropdown.Item>
				<Dropdown.Item eventKey="b">Item B</Dropdown.Item>
				<Dropdown.Item eventKey="c">Item C</Dropdown.Item>
				<Dropdown.Item eventKey="d">Item D</Dropdown.Item>
			</Dropdown>
		</div>
	)
}

export default CustomToggle
