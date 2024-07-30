import React from 'react'
import { Badge } from 'components/ui'

const Inline = () => {
	return (
		<div className="flex items-center">
			<Badge className="mr-4" />
            <Badge className="mr-4" content={9} />
            <Badge className="mr-4" content={99} />
            <Badge content={'New'} />
		</div>
	)
}

export default Inline
