import React, { useMemo } from 'react'
import classNames from 'classnames'
import { Card, Button, Table, Avatar } from 'components/ui'
import growShrinkColor from 'utils/growShrinkColor'
import NumberFormat from 'react-number-format'
import { useNavigate } from 'react-router-dom'
import { useTable } from 'react-table'

const { Tr, Td, TBody, THead, Th } = Table

const MarketValue = ({data = [], className}) => {

	const navigate = useNavigate()

	const handleClick = () => {
		navigate('/app/crypto/market')
	}

	const columns = useMemo(() => [
		{
			Header: 'Name',
			accessor: 'name',
			sortable: true,
			Cell: props => {
				const { img, symbol, name } = props.row.original
				return (
					<div className="flex items-center gap-3">
						<Avatar src={img} size="sm" className="!bg-transparent" />
						<span className="font-bold heading-text">{symbol}</span>
						<span>{name}</span>
					</div>
				)
			},
		},
		{
			Header: 'Price',
			accessor: 'price',
			sortable: true,
			Cell: props => {
				const row = props.row.original
				return (
					<NumberFormat
						displayType="text"
						value={(Math.round(row.price * 100) / 100).toFixed(2)} 
						suffix={' USD'} 
						thousandSeparator={true} 
					/>
				)
			},
		},
		{
			Header: '24h Change',
			accessor: 'change',
			sortable: true,
			Cell: props => {
				const { change } = props.row.original
				return (
					<span className={classNames('font-semibold', growShrinkColor(change, 'text'))}>
						{change > 0 && '+'}{change}%
					</span>
				)
			},
		},
		{
			Header: '24h Volumn',
			accessor: 'volumn',
			sortable: true,
			Cell: props => {
				const { volumn } = props.row.original
				return (
					<span>{volumn}M</span>
				)
			},
		},
		{
			Header: 'Market Cap',
			accessor: 'marketCap',
			sortable: true,
			Cell: props => {
				const { marketCap } = props.row.original
				return (
					<span>${marketCap}M</span>
				)
			},
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
			<div className="flex items-center justify-between mb-6">
				<h4>Market values</h4>
				<Button size="sm" onClick={handleClick}>Details</Button>
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

export default MarketValue