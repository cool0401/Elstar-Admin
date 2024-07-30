```jsx
import React, { useState, useMemo } from 'react'
import { Table, Switcher, Avatar } from 'components/ui'
import { TableRowSkeleton } from 'components/shared'
import { useTable } from 'react-table'

const AVATAR_SIZE = 30

const data = [
	{ 
		firstName: 'Maria',
		lastName: 'Anders',
		age: 24,
		avatar: '/img/avatars/thumb-1.jpg',
		status: 'complicated',
	},
	{
		firstName: 'Francisco',
		lastName: 'Chang',
		age: 9,
		avatar: '/img/avatars/thumb-2.jpg',
		status: 'single',
	},
	{
		firstName: 'Roland',
		lastName: 'Mendel',
		age: 1,
		avatar: '/img/avatars/thumb-3.jpg',
		status: 'single',
	},
	{
		firstName: 'Helen',
		lastName: 'Bennett',
		age: 43,
		avatar: '/img/avatars/thumb-4.jpg',
		status: 'married',
	},
	{
		firstName: 'Yoshi ',
		lastName: 'Tannamuri',
		age: 37,
		avatar: '/img/avatars/thumb-5.jpg',
		status: 'single',
	}
]

const { Tr, Th, Td, THead, TBody } = Table

const WithAvatar = () => {

	const [isLoading, setIsLoading] = useState(true)

	const columns = useMemo(() => [
		{
			Header: 'Name',
			accessor: 'firstName',
			Cell: props => {
				const row = props.row.original
				return (
					<div className="flex items-center gap-2">
						<div>
							<Avatar size={AVATAR_SIZE} src={row.avatar} shape="circle" />
						</div>
						<span>{row.firstName} {row.lastName} </span>
					</div>
				)
			},
		},
		{
			Header: 'Status',
			accessor: 'status',
		},
		{
			Header: 'Age',
			accessor: 'age',
		},
	], [])

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
							avatarInColumns={[0]}
							columns={3}
							rows={5}
							avatarProps={{
								width: AVATAR_SIZE,
								height: AVATAR_SIZE
							}}
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

export default WithAvatar
```