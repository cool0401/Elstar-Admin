import React, { useMemo, useCallback } from 'react'
import { Table } from 'components/ui'
import { useTable, useFlexLayout } from 'react-table'
import { FixedSizeList } from 'react-window'
import { data100 } from './data'

const { Tr, Th, Td, THead, TBody } = Table

function ReactTable({ columns, data }) {
	// Use the state and functions returned from useTable to build your UI

	const defaultColumn = useMemo(() => ({ width: 150 }), [])

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
	} = useTable(
		{
			columns,
			data,
			defaultColumn,
		},
		useFlexLayout
	)

	const RenderRow = useCallback(
		({ index, style }) => {
			const row = rows[index]
			prepareRow(row)
			return (
				<Tr asElement="div" {...row.getRowProps({ style })}>
					{row.cells.map(cell => {
						return (
							<Td asElement="div" {...cell.getCellProps()}>
								{cell.render('Cell')}
							</Td>
						)
					})}
				</Tr>
			)
		},
		[prepareRow, rows]
	)

	// Render the UI for your table
	return (
		<Table asElement="div" {...getTableProps()}>
			<THead asElement="div">
				{headerGroups.map(headerGroup => (
					<Tr asElement="div" {...headerGroup.getHeaderGroupProps()}>
						{headerGroup.headers.map(column => (
							<Th asElement="div" {...column.getHeaderProps()}>
								{column.render('Header')}
							</Th>
						))}
					</Tr>
				))}
			</THead>

			<TBody asElement="div" {...getTableBodyProps()}>
				<FixedSizeList
					height={400}
					itemCount={rows.length}
					itemSize={52}
					className="table-virtual"
					>
					{RenderRow}
				</FixedSizeList>
			</TBody>
		</Table>
	)
}

const VirtualizedRows = () => {
	const columns = useMemo(() => [
		{ Header: 'First Name', accessor: 'firstName' },
		{ Header: 'Last Name', 	accessor: 'lastName' },
		{ Header: 'Email', accessor: 'email' },
		{ Header: 'Gender', accessor: 'gender' },
	], [])

	return (
		<div>
			<ReactTable columns={columns} data={data100} />
		</div>
	)
}

export default VirtualizedRows
