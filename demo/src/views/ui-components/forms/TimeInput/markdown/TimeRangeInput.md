```jsx
import React from 'react'
import { TimeInput } from 'components/ui'
import dayjs from 'dayjs'

const TimeRangeInput = () => {

	return (
		<TimeInput.TimeInputRange 
			defaultValue={[new Date(), dayjs(new Date()).add(60, 'minutes').toDate()]} 
			clearable 
		/>
	)
}

export default TimeRangeInput
```