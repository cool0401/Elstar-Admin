```jsx
import React, { useMemo } from 'react'
import { Table } from 'components/ui'
import { useTable, useExpanded } from 'react-table'
import { dataWithSubRows } from './data'
import { HiOutlinePlusCircle, HiOutlineMinusCircle } from 'react-icons/hi'

const { Tr, Th, Td, THead, TBody } = Table

function ReactTable({ columns: userColumns, data }) {
	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
	} = useTable(
		{
			columns: userColumns,
			data,
		},
		useExpanded // Use the useExpanded plugin hook
	)

	return (
		<>
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
					{rows.map((row, i) => {
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
		</>
	)
}

const Exapanding = () => {

	const columns  = useMemo(() => [
      {
			// Build our expander column
			id: 'expander', // Make sure it has an ID
			Header: ({ getToggleAllRowsExpandedProps, isAllRowsExpanded }) => {
				return (
					<span className="text-xl" {...getToggleAllRowsExpandedProps()}>
						{isAllRowsExpanded ? <HiOutlineMinusCircle /> : <HiOutlinePlusCircle />}
					</span>
				)
			},
			Cell: ({ row }) => {
				// Use the row.canExpand and row.getToggleRowExpandedProps prop getter
				// to build the toggle for expanding a row
				return row.canExpand ? (
					<span 
						className="text-xl"
						{...row.getToggleRowExpandedProps({
							style: {
								// We can even use the row.depth property
								// and paddingLeft to indicate the depth
								// of the row
								paddingLeft: `${row.depth * 2}rem`,
							},
						})}
					>
						{row.isExpanded ? <HiOutlineMinusCircle /> : <HiOutlinePlusCircle />}
					</span>
				) : null
			}
		},
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
		},
	], [])

	return (
		<div>
			<ReactTable columns={columns} data={dataWithSubRows} />
		</div>
	)
}

export default Exapanding
```