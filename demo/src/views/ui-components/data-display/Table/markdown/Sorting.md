```jsx
import React from 'react'
import { Table } from 'components/ui'
import { useTable, useSortBy } from 'react-table'

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
	{
		Header: 'Visits',
		accessor: 'visits',
	},
	{
		Header: 'Status',
		accessor: 'status',
	},
	{
		Header: 'Profile Progress',
		accessor: 'progress',
	}
]

const data = [
	{ 
		firstName: 'Maria',
		lastName: 'Anders',
		age: 24,
		visits: 28,
		progress: 56,
		status: 'complicated',
		subRows: undefined
	},
	{
		firstName: 'Francisco',
		lastName: 'Chang',
		age: 9,
		visits: 90,
		progress: 77,
		status: 'single',
		subRows: undefined
	},
	{
		firstName: 'Roland',
		lastName: 'Mendel',
		age: 1,
		visits: 16,
		progress: 56,
		status: 'single',
		subRows: undefined
	},
	{
		firstName: 'Helen',
		lastName: 'Bennett',
		age: 43,
		visits: 94,
		progress: 53,
		status: 'single',
		subRows: undefined
	},
	{
		firstName: 'Yoshi ',
		lastName: 'Tannamuri',
		age: 37,
		visits: 85,
		progress: 28,
		status: 'single',
		subRows: undefined
	}
]

const { Tr, Th, Td, THead, TBody, Sorter } = Table

const Sorting = () => {

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
	} = useTable({ columns, data, }, useSortBy)

	return (
		<>
			<Table {...getTableProps()}>
				<THead>
				{headerGroups.map(headerGroup => (
					<Tr {...headerGroup.getHeaderGroupProps()}>
						{headerGroup.headers.map(column => (
							<Th {...column.getHeaderProps(column.getSortByToggleProps())}>
								{column.render('Header')}
								<span>
									<Sorter sort={column.isSortedDesc}/>
								</span>
							</Th>
						))}
					</Tr>
				))}
				</THead>
				<TBody {...getTableBodyProps()}>
					{rows.map(
						(row, i) => {
						prepareRow(row)
						return (
							<Tr {...row.getRowProps()}>
								{row.cells.map(cell => {
									return (
									<Td {...cell.getCellProps()}>{cell.render('Cell')}</Td>
									)
								})}
							</Tr>
						)}
					)}
				</TBody>
			</Table>
		</>
	)
}

export default Sorting
```