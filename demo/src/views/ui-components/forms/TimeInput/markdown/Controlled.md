```jsx
import React, { useState } from 'react'
import { TimeInput } from 'components/ui'
import dayjs from 'dayjs'

const { TimeInputRange } = TimeInput

const Controlled = () => {

	const [timeValue, setTimeValue] = useState(new Date())

	const [timeRangeValue, setTimeRangeValue] = useState(
		[
			new Date(), 
			dayjs(new Date()).add(60, 'minutes').toDate()
		]
	)
	
	return (
		<div className="flex flex-col gap-5">
			<TimeInput value={timeValue} onChange={setTimeValue} />
			<TimeInputRange value={timeRangeValue} onChange={setTimeRangeValue} />
		</div>
	)
}

export default Controlled
```