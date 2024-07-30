```jsx
import React, { useState } from 'react'
import { Pagination, Select } from 'components/ui'

const options = [
	{ value: 5, label: '5 / page' },
	{ value: 10, label: '10 / page' },
	{ value: 20, label: '20 / page' },
	{ value: 50, label: '50 / page' },
]

const PageSize = () => {

	const [pageSize, setPageSize] = useState(options[0].value)

	const onPageSelect = ({value}) => {
		setPageSize(value)
	}

	return (
		<div className="flex items-center">
			<Pagination displayTotal pageSize={pageSize} total={100} />
			<div style={{minWidth: 120}}>
				<Select
					size="sm"
					isSearchable={false} 
					defaultValue={options[0]} 
					options={options}
					onChange={onPageSelect}
				/>
			</div>
		</div>
	)
}

export default PageSize
```