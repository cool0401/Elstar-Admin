import React from 'react'
import { Table, Badge } from 'components/ui'
import { useTable, useSortBy } from 'react-table'
import NumberFormat from 'react-number-format'
import { useSelector } from 'react-redux'
import dayjs from 'dayjs'

const { Tr, Th, Td, THead, TBody, Sorter } = Table

const statusColor = {
	paid: 'bg-emerald-500',
	pending: 'bg-amber-400',
}

const columns = [
	{
		Header: 'Reference',
		accessor: 'id',
		Cell: props => {
			const row = props.row.original
			return (
				<div>
					<span className="cursor-pointer">{row.id}</span>
				</div>
			)
		},
	},
	{
		Header: 'Product',
		accessor: 'item',
	},
	{
		Header: 'Status',
		accessor: 'status',
		Cell: props => {
			const row = props.row.original
			return (
				<div className="flex items-center">
					<Badge className={statusColor[row.status]} />
					<span className="ml-2 rtl:mr-2 capitalize">{row.status}</span>
				</div>
			)
		},
	},
	{
		Header: 'Date',
		accessor: 'date',
		Cell: props => {
			const row = props.row.original
			return (
				<div className="flex items-center">
					{dayjs.unix(row.date).format("MM/DD/YYYY")}
				</div>
			)
		},
	},
	{
		Header: 'Amount',
		accessor: 'amount',
		Cell: props => {
			const row = props.row.original
			return (
				<div className="flex items-center">
					<NumberFormat
						displayType="text"
						value={(Math.round(row.amount * 100) / 100).toFixed(2)} 
						prefix={'$'} 
						thousandSeparator={true} 
					/>
				</div>
			)
		},
	},
]

const PaymentHistory = () => {

	const data = useSelector((state) => state.crmCustomerDetails.data.paymentHistoryData)

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
	} = useTable({ columns, data }, useSortBy)

	return (
		<div className="mb-8">
			<h6 className="mb-4">Payment History</h6>
			<Table {...getTableProps()}>
				<THead>
					{headerGroups.map(headerGroup => (
						<Tr {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map(column => (
								<Th {...column.getHeaderProps(column.getSortByToggleProps())}>
									{column.render('Header')}
									<span>
										<Sorter sort={column.isSortedDesc}/>
									</span>
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
		</div>
	)
}

export default PaymentHistory
