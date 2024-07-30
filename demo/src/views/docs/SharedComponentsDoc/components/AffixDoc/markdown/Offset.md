```jsx
import React from 'react'
import { Affix } from 'components/shared'
import { Button } from 'components/ui' 

const Offset = () => {
	return (
		<div className="flex flex-col justify-between">
			<Affix offset={80} className="z-50">
				<Button variant="solid">This will stick to top with 80px offset</Button>
			</Affix>
		</div>
	)
}

export default Offset
```