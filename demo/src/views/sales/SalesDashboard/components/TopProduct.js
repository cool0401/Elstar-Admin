import React, { useMemo } from 'react'
import { Card, Button, Table, Avatar } from 'components/ui'
import { useTable } from 'react-table'
import { FiPackage } from 'react-icons/fi'

const { Tr, Td, TBody, THead, Th } = Table

const ProductColumn = ({row}) => {
	
	const avatar = row.img ? <Avatar src={row.img} /> : <Avatar icon={<FiPackage />} />

	return (
		<div className="flex items-center gap-2">
			{avatar}
			<span className="font-semibold">
				{row.name}
			</span>
		</div>
	)
}

const TopProduct = ({data = [], className}) => {

	const columns = useMemo(() => [
		{
			Header: 'Product',
			accessor: 'name',
			Cell: props => {
				const row = props.row.original
				return <ProductColumn row={row} />
			},
		},
		{
			Header: 'Sold',
			accessor: 'sold',
		},
	], [])

	const { 
		getTableProps, 
		getTableBodyProps, 
		prepareRow,
		headerGroups, 
		rows 
	} = useTable( { columns, data, initialState: { pageIndex: 0 }, })
	
	return (
		<Card className={className}>
			<div className="flex items-center justify-between mb-4">
				<h4>Top Selling</h4>
				<Button size="sm">View Products</Button>
			</div>
			<Table {...getTableProps()}>
				<THead className="!bg-transparent">
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
		</Card>
	)
}

export default TopProduct