import React, { useState } from 'react'
import { DatePicker } from 'components/ui'

const DisabledCertainDate = () => {
	const [dateValue, setDateValue] = useState(new Date())

	const onCertainPeriodChange = date => {
		setDateValue(date)
	}

	const disableCertainDate = date => {
		const banDate = [7, 15, 21]
		return banDate.includes(date.getDate()) 
	}

	return (
		<DatePicker 
			value={dateValue}
			placeholder="Pick your date"
			onChange={onCertainPeriodChange}
			disableDate={disableCertainDate}
		/>
	)
}

export default DisabledCertainDate
