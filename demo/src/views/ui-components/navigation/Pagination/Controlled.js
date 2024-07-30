import React, { useState } from 'react'
import { Pagination } from 'components/ui'

const Controlled = () => {

	const [page, setPage] = useState(60)

	const onPaginationChange = val => {
        setPage(val)
    }

	return (
		<div>
			<Pagination 
				total={100} 
				currentPage={page} 
				onChange={onPaginationChange} 
			/>
		</div>
	)
}

export default Controlled
