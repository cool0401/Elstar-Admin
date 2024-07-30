import React from 'react'
import { InputGroup, Input, Button } from 'components/ui'

const Sizes = () => {
	return (
		<div>
			<InputGroup size="sm" className="mb-4">
				<InputGroup.Addon>@</InputGroup.Addon>
				<Input placeholder="Small Input" />
				<Button variant="solid">Submit</Button>
			</InputGroup>
			<InputGroup size="lg" className="mb-4">
				<InputGroup.Addon>@</InputGroup.Addon>
				<Input placeholder="Small Input" />
				<Button variant="solid">Submit</Button>
			</InputGroup>
		</div>
	)
}

export default Sizes
