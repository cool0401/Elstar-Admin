```jsx
import React from 'react'
import { DoubleSidedImage} from 'components/shared'

const Example = () => {
	return (
		<DoubleSidedImage
			src="/img/logo/logo-light-full.png"
			darkModeSrc="/img/logo/logo-dark-full.png"
			alt="elstar"
		/>
	)
}

export default Example
```