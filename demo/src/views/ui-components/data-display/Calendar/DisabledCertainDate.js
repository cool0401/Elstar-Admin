import React, { useState } from 'react'
import { Calendar } from 'components/ui'

const DisabledCertainDate = () => {

	const [value, setValue] = useState()

    const disableCertainDate = date => {
        const banDate = [7, 15, 21]
        return banDate.includes(date.getDate()) 
    }

	return (
		<div className="md:w-[260px] max-w-[260px] mx-auto">
			<Calendar 
                value={value} 
                onChange={setValue}
                disableDate={disableCertainDate}
            />
		</div>
	)
}

export default DisabledCertainDate