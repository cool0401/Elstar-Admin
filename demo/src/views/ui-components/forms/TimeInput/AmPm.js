import React from 'react'
import { TimeInput } from 'components/ui'

const AmPm = () => {
	return (
		<TimeInput format="12" defaultValue={new Date()} />
	)
}

export default AmPm