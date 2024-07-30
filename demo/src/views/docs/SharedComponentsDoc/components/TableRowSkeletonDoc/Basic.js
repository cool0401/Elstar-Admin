import React, { useState } from 'react'
import { Table, Switcher } from 'components/ui'
import { TableRowSkeleton } from 'components/shared'
import { useTable } from 'react-table'

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

const data = [
	{ 
		firstName: 'Maria',
		lastName: 'Anders',
		age: 24,
	},
	{
		firstName: 'Francisco',
		lastName: 'Chang',
		age: 9,
	},
	{
		firstName: 'Roland',
		lastName: 'Mendel',
		age: 1,
	},
	{
		firstName: 'Helen',
		lastName: 'Bennett',
		age: 43,
	},
	{
		firstName: 'Yoshi ',
		lastName: 'Tannamuri',
		age: 37,
	}
]

const { Tr, Th, Td, THead, TBody } = Table

const Basic = () => {

	const [isLoading, setIsLoading] = useState(true)

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
	} = useTable({ columns, data, })

	return (
		<>
			<div className="flex items-center mb-4 gap-2">
				<span>Loading State: </span>
				<Switcher 
					checked={isLoading}
					onChange={checked => setIsLoading(!checked)}
				/>
			</div>
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
				{
					isLoading
					?
					(
						<TableRowSkeleton 
							columns={3}
							rows={5}
						/>
					)
					:
					(
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
					)
				}
			</Table>
		</>
	)
}

export default Basic