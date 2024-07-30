import React, { useState } from 'react'
import { Calendar } from 'components/ui'

const MultipleSelection = () => {

	const [value, setValue] = useState([])

	return (
		<div className="md:w-[260px] max-w-[260px] mx-auto">
			<Calendar multipleSelection value={value} onChange={setValue} />
		</div>
	)
}

export default MultipleSelection