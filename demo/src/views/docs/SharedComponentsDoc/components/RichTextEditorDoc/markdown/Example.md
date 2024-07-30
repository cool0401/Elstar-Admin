```jsx
import React from 'react'
import { RichTextEditor } from 'components/shared'

const Example = () => {

	const handleChange = (val) => {
		console.log('value', val)
	}

	return (
		<RichTextEditor onChange={handleChange} />
	)
}

export default Example
```