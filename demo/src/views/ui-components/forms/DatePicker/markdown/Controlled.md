```jsx
import React, { useState } from 'react'
import { DatePicker } from 'components/ui'

const Controlled = () => {

	const [date, setDate] = useState(new Date())
	const [dateRange, setDateRange] = useState([
		new Date(2022, 11, 1),
		new Date(2022, 11, 5),
	])
	const [dateTime, setDateTime] = useState(new Date())

	const handleDatePickerChange = date => {
		console.log('Selected date', date)
		setDate(date)
	}

	const handleRangePickerChange = (date) => {
		console.log('Selected range date', date)
		setDateRange(date)
	}

	const handleDateTimeChange = val => {
		console.log('Selected date time: ', val)
		setDateTime(val)
	}

	return (
		<div className="flex flex-col gap-5">
			<DatePicker 
				placeholder="Pick a date" 
				value={date} 
				onChange={handleDatePickerChange} 
			/>
			<DatePicker.DatePickerRange
				placeholder="Select dates range"
				value={dateRange}
				onChange={handleRangePickerChange}
			/>
			<DatePicker.DateTimepicker
				placeholder="Pick date & time"
				value={dateTime}
				onChange={handleDateTimeChange}
			/>
		</div>
	)
}

export default Controlled
```