```jsx
import React, { useState } from 'react'
import { Input } from 'components/ui'

const ControlledInput = () => {

	const [value, setValue] = useState('')
	const handleChange = (e) => setValue(e.target.value)

	return (
		<div>
			<Input
				value={value}
				onChange={handleChange}
				placeholder="Sample placeholder"
			/>
		</div>
	)
}

export default ControlledInput
```