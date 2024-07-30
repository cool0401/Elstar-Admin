```jsx
import React, { useState, useEffect, useRef, useCallback } from 'react'
import { Button, Input } from 'components/ui'
import { DataTable } from 'components/shared'
import debounce from 'lodash/debounce'
import axios from 'axios'

const Query = () => {

	const [data, setData] = useState([])
	const [loading, setLoading] = useState(false)
	const [tableData, setTableData] = useState(
		{
			total: 0,
			pageIndex: 1,
			pageSize: 10,
			query: '',
			sort: {
				order: '',
				key: ''
			}
		}
	)

	const inputRef = useRef()

	const debounceFn = useCallback(debounce(handleDebounceFn, 500), [])

	function handleDebounceFn(val) {
		if(typeof val === 'string' && (val.length > 1 || val.length === 0)) {
			setTableData(prevData => ({...prevData, ...{query: val, pageIndex: 1}}))
		}
	}

	const handleChange = (e) => {
		debounceFn(e.target.value)
	}


	const handleAction = (cellProps) => {
		console.log('Action clicked', cellProps)
	}

	const columns = [
		{
			Header: 'Name',
			accessor: 'name',
			sortable: true,
		},
		{
			Header: 'Email',
			accessor: 'email',
			sortable: true,
		},
		{
			Header: '',
			id: 'action',
			accessor: (row) => row,
			Cell: props => <Button size="xs" onClick={() => handleAction(props)}>Action</Button>
		},
	]

	const handlePaginationChange = pageIndex => {
		setTableData(prevData => ({...prevData, ...{pageIndex}}))
	}

	const handleSelectChange = pageSize => {
		setTableData(prevData => ({...prevData, ...{pageSize}}))
	}

	const handleSort = ({order, key}, aaa) => {
		console.log({order, key})
		console.log(aaa)
		setTableData(prevData => ({...prevData, ...{sort: {order, key}}}))
	}

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true)
			const response = await axios.post('/api/crm/customers', tableData)
			if (response.data) {
				setData(response.data.data)
				setLoading(false)
				setTableData(prevData => ({...prevData, ...{total: response.data.total}}))
			}
		}
		fetchData()
	}, [tableData.pageIndex, tableData.sort, tableData.pageSize, tableData.query])
	
	return (
		<>
			<div className="flex justify-end mb-4">
				<Input
					ref={inputRef} 
					placeholder="Search..."
					size="sm" 
					className="lg:w-52"
					onChange={handleChange}
				/>
			</div>
			<DataTable
				columns={columns} 
				data={data}
				loading={loading}
				pagingData={tableData}
				onPaginationChange={handlePaginationChange}
				onSelectChange={handleSelectChange}
				onSort={handleSort}
			/>
		</>
	)
}

export default Query
```