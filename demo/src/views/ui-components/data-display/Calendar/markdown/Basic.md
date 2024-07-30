```jsx
import React, { useState } from 'react'
import { Calendar } from 'components/ui'

const Basic = () => {

	const [value, setValue] = useState()

	return (
		<div className="md:w-[260px] max-w-[260px] mx-auto">
			<Calendar value={value} onChange={setValue} />
		</div>
	)
}

export default Basic
```