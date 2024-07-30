import React, { useRef, useEffect } from 'react'
import { useTable, useRowSelect } from 'react-table'
import { Table, Checkbox } from 'components/ui'
import { data10 } from './data'

const { Tr, Th, Td, THead, TBody } = Table

const IndeterminateCheckbox = React.forwardRef(({ indeterminate, onChange, ...rest }, ref) => {
	const defaultRef = useRef()
	const resolvedRef = ref || defaultRef

	useEffect(() => {
		resolvedRef.current.indeterminate = indeterminate
	}, [resolvedRef, indeterminate])

	return <Checkbox ref={resolvedRef} onChange={(_, e) => onChange(e)} {...rest} />
})

function ReactTable({ columns, data }) {
	// Use the state and functions returned from useTable to build your UI
	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
		selectedFlatRows,
	} = useTable({ columns, data }, useRowSelect,
		hooks => {
			hooks.visibleColumns.push(columns => [
				// Let's make a column for selection
				{
					id: 'selection',
					// The header can use the table's getToggleAllRowsSelectedProps method
					// to render a checkbox
					Header: ({ getToggleAllRowsSelectedProps }) => (
						<div>
							<IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
						</div>
					),
					// The cell can use the individual row's getToggleRowSelectedProps method
					// to the render a checkbox
					Cell: ({ row }) => (
						<div>
							<IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
						</div>
					),
				},
				...columns,
			])
		}
	)

	console.log('selectedFlatRows', selectedFlatRows)

	// Render the UI for your table
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
					{rows.slice(0, 10).map((row, i) => {
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

const RowSelection = () => {

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
			Header: 'Email',
			accessor: 'email',
		},
	]

	return <ReactTable columns={columns} data={data10} />
}

export default RowSelection
