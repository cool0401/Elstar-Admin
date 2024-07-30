```jsx
import React, { useMemo} from 'react'
import { Table } from 'components/ui'
import { useTable, useFlexLayout, useResizeColumns } from 'react-table'
import { data10 } from './data'

const { Tr, Th, Td, THead, TBody } = Table

const getStyles = (props, align = 'left') => [
	props,
	{
		style: {
			justifyContent: align === 'right' ? 'flex-end' : 'flex-start',
			alignItems: 'flex-start',
			display: 'flex',
		},
	},
]

const headerProps = (props, { column }) => getStyles(props, column.align)

const cellProps = (props, { cell }) => getStyles(props, cell.column.align)

function ReactTable({ columns, data }) {
	const defaultColumn = React.useMemo(() => ({
		minWidth: 30,
		width: 150,
		maxWidth: 400,
	}), [])

	const {
		getTableProps,
		headerGroups,
		rows,
		prepareRow,
	} = useTable(
		{
			columns,
			data,
			defaultColumn,
		},
		useFlexLayout,
		useResizeColumns
	)

return (
	<Table asElement="div" {...getTableProps()}>
		<THead asElement="div">
			{headerGroups.map(headerGroup => (
				<Tr asElement="div" {...headerGroup.getHeaderGroupProps()}>
					{headerGroup.headers.map(column => (
						<Th asElement="div" {...column.getHeaderProps(headerProps)}>
							{column.render('Header')}
							{/* Use column.getResizerProps to hook up the events correctly */}
							{column.canResize && (
								<div
									{...column.getResizerProps()}
									className={`table-resizer ${
									column.isResizing ? 'resizing' : ''
									}`}
								/>
							)}
						</Th>
					))}
				</Tr>
			))}
		</THead>
		<TBody asElement="div">
			{rows.map(row => {
				prepareRow(row)
				return (
					<Tr asElement="div" {...row.getRowProps()}>
						{row.cells.map(cell => {
							return (
								<Td asElement="div" {...cell.getCellProps(cellProps)}>
									{cell.render('Cell')}
								</Td>
							)
						})}
					</Tr>
				)
			})}
		</TBody>
	</Table>
)
}

const Resizable = () => {

	const columns = useMemo(() => [
		{ Header: 'First Name', accessor: 'firstName' },
		{ Header: 'Last Name', 	accessor: 'lastName' },
		{ Header: 'Email', accessor: 'email' },
		{ Header: 'Gender', accessor: 'gender' },
	], [])

	return (
		<div>
			<ReactTable columns={columns} data={data10} />
		</div>
	)
}

export default Resizable
```