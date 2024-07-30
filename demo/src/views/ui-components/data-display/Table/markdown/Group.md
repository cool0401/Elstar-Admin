```jsx
import React, { useMemo } from 'react'
import { Table } from 'components/ui'
import { useTable } from 'react-table'
import { data10 } from './data'

const { Tr, Th, Td, THead, TBody } = Table

const ReactTable = ({ columns, data }) => {

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
	} = useTable({ columns, data, })

	return (
		<div>
			<Table {...getTableProps()}>
				<THead>
					{headerGroups.map((headerGroup, index) => (
						<Tr {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map(column => (
								<Th className={index === 0 ? '!text-center':''} {...column.getHeaderProps()}>{column.render('Header')}</Th>
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
		</div>
	)
}

const Group = () => {

	const columns = useMemo(() => [
		{
			Header: 'Name',
			columns: [
			{
				Header: 'First Name',
				accessor: 'firstName',
			},
			{
				Header: 'Last Name',
				accessor: 'lastName',
			},
			],
		},
		{
			Header: 'Info',
			columns: [
			{
				Header: 'Email',
				accessor: 'email',
				width: 50,
			},
			{
				Header: 'Visits',
				accessor: 'gender',
				width: 60,
			},
			],
		},
	], [])

	return <ReactTable columns={columns} data={data10} />
}

export default Group
```