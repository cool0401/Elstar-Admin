import React, { useState, useEffect } from 'react'
import { Button } from 'components/ui'
import { DataTable } from 'components/shared'
import axios from 'axios'

const Checkable = () => {

	const [data, setData] = useState([])
	const [loading, setLoading] = useState(false)
	const [selectedRows, setSelectedRows] = useState([])
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

	const handleBatchAction = () => {
		console.log('selectedRows', selectedRows)
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

	const handleRowSelect = (checked, row) => {
		console.log('row', row)
		if (checked) {
			setSelectedRows(prevData => {
				if(!prevData.includes(row.name)) {
					return [...prevData, ...[row.name]] 
				}
				return prevData
			})
		} else {
			setSelectedRows(prevData => {
				if(prevData.includes(row.name)) {
					return prevData.filter(id => id !== row.name)
				}
				return prevData
			})
		}
	}

	const handleAllRowSelect = (checked, rows) => {
		console.log('rows', rows)
		if (checked) {
			const originalRows = rows.map(row => row.original)
			const selectedIds = []
			originalRows.forEach(row => {
				selectedIds.push(row.name)
			})
			setSelectedRows(selectedIds)
		} else {
			setSelectedRows([])
		}
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
		<>
			{
				selectedRows.length > 0 && (
					<div className="flex justify-end mb-4">
						<Button
							size="sm"
							variant="solid"
							onClick={handleBatchAction}
						>
							Batch Action
						</Button>
					</div>
				)
			}
			<DataTable
				selectable
				columns={columns} 
				data={data}
				loading={loading}
				pagingData={tableData}
				onPaginationChange={handlePaginationChange}
				onSelectChange={handleSelectChange}
				onSort={handleSort}
				onCheckBoxChange={handleRowSelect}
				onIndeterminateCheckBoxChange={handleAllRowSelect}
			/>
		</>
		
	)
}

export default Checkable