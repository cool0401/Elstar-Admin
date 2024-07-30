```jsx
import React from 'react'
import { DatePicker } from 'components/ui'

const { DatePickerRange } = DatePicker

const RangePicker = () => {
	return (
		<DatePickerRange placeholder="Select dates range" />
	)
}

export default RangePicker
```