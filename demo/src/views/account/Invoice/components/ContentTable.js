import React, { useMemo, Fragment } from 'react'
import { Table } from 'components/ui'
import { useTable } from 'react-table'
import NumberFormat from 'react-number-format'
import isLastChild from 'utils/isLastChild'

const { Tr, Th, Td, THead, TBody, TFoot } = Table

const TFootRows = ({label, value}) => {
	return (
		<Tr>
			<Td className="!border-t-0" colSpan="2"></Td>
			<Td className="font-semibold !border-t-0">{label}</Td>
			<Td className="!py-5 !border-t-0">
				<PriceAmount amount={value} />
			</Td>
		</Tr>
	)
}

const ProductColumn = ({row}) => {
	return (
		<div className="flex">
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

const ContentTable = ({products = [], summary ={}}) => {
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
	} = useTable({ columns, data: products })

	return (
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
			<TFoot>
				<TFootRows label="Subtotal" value={summary.subTotal} />
				<TFootRows label="Delivery fee" value={summary.deliveryFees} />
				<TFootRows label="Tax(6%)" value={summary.tax} />
				<Tr>
					<Td className="!border-t-0" colSpan="2"></Td>
					<Td className="font-semibold text-base">Grand Total</Td>
					<Td className="font-semibold text-base !py-5">
						<PriceAmount amount={summary.total} />
					</Td>
				</Tr>
			</TFoot>
		</Table>
	)
}

export default ContentTable