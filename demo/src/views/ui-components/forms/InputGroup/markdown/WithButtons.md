```jsx
import React from 'react'
import { InputGroup, Input, Button } from 'components/ui'
import { HiOutlineMicrophone, HiOutlineSearch } from 'react-icons/hi'

const WithButtons = () => {
	return (
		<div>
			<InputGroup className="mb-4">
				<Input placeholder="Input text to search" />
				<Button>Search</Button>
			</InputGroup>
			<InputGroup className="mb-4">
				<Input placeholder="Input text to search" />
				<Button icon={<HiOutlineSearch className="text-xl" />} />
			</InputGroup>
			<InputGroup className="mb-4">
				<Button variant="solid" icon={<HiOutlineMicrophone className="text-xl" />} />
				<Input placeholder="Input text to search" />
			</InputGroup>
		</div>
	)
}

export default WithButtons
```