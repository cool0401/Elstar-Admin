import React from 'react'
import { Pagination } from 'components/ui'

const Basic = () => {

	const onPaginationChange = page => {
        console.log('onPaginationChange', page)
    }

	return (
		<div>
			<Pagination onChange={onPaginationChange} />
		</div>
	)
}

export default Basic
