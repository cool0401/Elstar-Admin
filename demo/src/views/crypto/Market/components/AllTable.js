import React, { useMemo } from 'react'
import classNames from 'classnames'
import { Avatar } from 'components/ui'
import { DataTable } from 'components/shared'
import { setTableData } from '../store/dataSlice'
import ActionColumn from './ActionColumn'
import growShrinkColor from 'utils/growShrinkColor'
import cloneDeep from 'lodash/cloneDeep'
import NumberFormat from 'react-number-format'
import { useDispatch } from 'react-redux'

const AllTable = ({data, loading, tableData}) => {

	const dispatch = useDispatch()

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
		{
			Header: '',
			id: 'action',
			Cell: props => {
				const row = props.row.original
				return (
					<ActionColumn row={row} />
				)
			},
		},
	], [])

	const onPaginationChange = page => {
		const newTableData = cloneDeep(tableData)
		newTableData.pageIndex =  page
		dispatch(setTableData(newTableData))
	}

	const onSelectChange = value => {
		const newTableData = cloneDeep(tableData)
		newTableData.pageSize =  Number(value)
		newTableData.pageIndex = 1
		dispatch(setTableData(newTableData))
	}

	const onSort = (sort) => {
		const newTableData = cloneDeep(tableData)
		newTableData.sort = sort
		dispatch(setTableData(newTableData))
	}

	return (
		<DataTable
			columns={columns} 
			data={data}
			skeletonAvatarColumns={[0]}
			skeletonAvatarProps={{ size: 'sm', className: 'rounded-md' }}
			loading={loading}
			pagingData={tableData}
			onPaginationChange={onPaginationChange}
			onSelectChange={onSelectChange}
			onSort={onSort}
		/>
	)
}

export default AllTable