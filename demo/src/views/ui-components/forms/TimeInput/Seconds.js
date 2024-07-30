import React from 'react'
import { TimeInput } from 'components/ui'

const Seconds = () => {
	return (
		<TimeInput showSeconds defaultValue={new Date()} />
	)
}

export default Seconds