import React, { useState } from 'react'
import { Switcher, Alert } from 'components/ui'
import { Loading } from 'components/shared'

const Cover = () => {

	const [isLoading, setIsLoading] = useState(true)

	return (
		<>
			<div className="flex items-center mb-4 gap-2">
				<span>Loading State: </span>
				<Switcher 
					checked={isLoading}
					onChange={checked => setIsLoading(!checked)}
				/>
			</div>
			<Loading loading={isLoading} type="cover">
				<Alert type="info" title="Alert!" showIcon>
					Additional description and information about copywriting.
				</Alert> 
			</Loading>
		</>
		
	)
}

export default Cover