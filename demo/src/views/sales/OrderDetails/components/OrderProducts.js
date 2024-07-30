import React, { useMemo, Fragment } from 'react'
import { AdaptableCard } from 'components/shared'
import { Table, Avatar } from 'components/ui'
import { useTable } from 'react-table'
import NumberFormat from 'react-number-format'
import isLastChild from 'utils/isLastChild'

const { Tr, Th, Td, THead, TBody } = Table

const ProductColumn = ({row}) => {
	return (
		<div className="flex">
			<Avatar size={90} src={row.img} />
			<div className="ltr:ml-2 rtl:mr-2">
				<h6 className="mb-2">{row.name}</h6>
				{
					
					Object.keys(row.details).map((key, i) => (
						<div className="mb-1" key={key + i} value={key}>
							<span className="capitalize">{key}: </span>
							{row.details[key].map((item, j) => (
								<Fragment key={item + j}>
									<span className="font-semibold">
										{item}
									</span>
									{!isLastChild(row.details[key], j) && <span>, </span>}
								</Fragment>
							))}
						</div>
					))
				}
			</div>
		</div>
	)
}

const PriceAmount = ({amount}) => {
	return (
		<NumberFormat
			displayType="text"
			value={(Math.round(amount * 100) / 100).toFixed(2)} 
			prefix={'$'} 
			thousandSeparator={true} 
		/>
	)
}

const OrderProducts = ({data}) => {

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
			Header: 'Price',
			accessor: 'price',
			Cell: props => {
				const row = props.row.original
				return <PriceAmount amount={row.price} />
			},
		},
		{
			Header: 'Quantity',
			accessor: 'quantity',
		},
		{
			Header: 'Total',
			accessor: 'total',
			Cell: props => {
				const row = props.row.original
				return <PriceAmount amount={row.price} />
			},
		},
	], [])

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
	} = useTable({ columns, data })

	return (
		<AdaptableCard className="mb-4">
			<Table {...getTableProps()}>
				<THead className="!bg-transparent">
					{headerGroups.map(headerGroup => (
						<Tr {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map(column => (
								<Th {...column.getHeaderProps()}>
									{column.render('Header')}
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
		</AdaptableCard>
	)
}

export default OrderProducts