import React, { useState, useEffect } from 'react'
import { Button } from 'components/ui'
import { DataTable } from 'components/shared'
import axios from 'axios'

const Basic = () => {

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

	const handleSort = ({order, key}) => {
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
		// eslint-disable-next-line react-hooks/exhaustive-deps
	  }, [tableData.pageIndex, tableData.sort, tableData.pageSize])
	
	return (
		<DataTable
			columns={columns} 
			data={data}
			loading={loading}
			pagingData={tableData}
			onPaginationChange={handlePaginationChange}
			onSelectChange={handleSelectChange}
			onSort={handleSort}
		/>
	)
}

export default Basic