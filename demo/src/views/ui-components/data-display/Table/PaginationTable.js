import React from 'react'
import { Table, Pagination, Select } from 'components/ui'
import { useTable, usePagination } from 'react-table'

const columns = [
	{
		Header: 'First Name',
		accessor: 'firstName',
	},
	{
		Header: 'Last Name',
		accessor: 'lastName',
	},
	{
		Header: 'Age',
		accessor: 'age',
	},
]

const { Tr, Th, Td, THead, TBody } = Table

const data = () => {
	const arr = []
	for (let i = 0; i < 100; i++) {
		arr.push({
			firstName: `Maria ${i}`,
			lastName: `Anders ${i}`,
			age: i,
		})
	}
	return arr
}

const totalData = data().length

const pageSizeOption = [
	{ value: 10, label: '10 / page'},
	{ value: 20, label: '20 / page'},
	{ value: 30, label: '30 / page'},
	{ value: 40, label: '40 / page'},
	{ value: 50, label: '50 / page'},
]

const ReactTable = props => {

	const { data, dataLength } = props

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		prepareRow,
		page,
		gotoPage,
		setPageSize,
		state: { pageIndex, pageSize },
	} = useTable(
		{
			columns,
			data,
			initialState: { pageIndex: 0 },
			manualPagination: false,
		},
		usePagination
	)

	const onPaginationChange = page => {
		console.log('page', page)
		gotoPage(page - 1)
	}

	const onSelectChange = value => {
		setPageSize(Number(value))
	}

	return (
		<div>
			<Table {...getTableProps()}>
				<THead>
					{headerGroups.map(headerGroup => (
						<Tr {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map(column => (
								<Th {...column.getHeaderProps()}>{column.render('Header')}</Th>
							))}
						</Tr>
					))}
				</THead>
				<TBody {...getTableBodyProps()}>
					{page.map((row, i) => {
						prepareRow(row)
						return (
							<Tr {...row.getRowProps()}>
								{row.cells.map(cell => {
									return <Td {...cell.getCellProps()}>{cell.render('Cell')}</Td>
								})}
							</Tr>
						)
					})}
				</TBody>
			</Table>
			<div className="flex items-center justify-between mt-4">
				<Pagination
					pageSize={pageSize}
					currentPage={pageIndex + 1}
					total={dataLength}
					onChange={onPaginationChange}
				/>
				<div style={{minWidth: 130}}>
					<Select
						size="sm"
						isSearchable={false} 
						value={pageSizeOption.filter(option => option.value === pageSize)} 
						options={pageSizeOption}
						onChange={option => onSelectChange(option.value)}
					/>
				</div>
			</div>
		</div>
	)
}

const PaginationTable = () => {
	return (<ReactTable data={data()} dataLength={totalData}/>)
}


export default PaginationTable
