import React from 'react'
import { Alert } from 'components/ui'

const Type = () => {
	return (
		<div>
			<Alert className="mb-4" type="info" showIcon>
				Additional description and information about copywriting.
			</Alert>
            <Alert className="mb-4" showIcon>
				Additional description and information about copywriting.
			</Alert>
            <Alert className="mb-4" type="success" showIcon>
				Additional description and information about copywriting.
			</Alert>
            <Alert className="mb-4" type="danger" showIcon>
				Additional description and information about copywriting.
			</Alert>
		</div>
	)
}

export default Type
