import React, { useState } from 'react'
import { Calendar } from 'components/ui'

const MultipleDateView = () => {

	const [value, setValue] = useState()

	return (
		<div className="overflow-x-auto ">
			<div className="w-[520px] mx-auto">
				<Calendar value={value} onChange={setValue} dateViewCount={2} />
			</div>
		</div>
	)
}

export default MultipleDateView