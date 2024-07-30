import React, { useMemo, useCallback, useEffect, useState } from 'react'
import { Table, Spinner } from 'components/ui'
import { useTable, useExpanded } from 'react-table'
import { dataWithSubRows } from './data'
import { HiOutlineChevronRight, HiOutlineChevronDown } from 'react-icons/hi'

const { Tr, Th, Td, THead, TBody } = Table

function SubRows({ row, rowProps, visibleColumns, data, loading }) {
	if (loading) {
		return (
			<Tr>
				<Td/>
				<Td  colSpan={visibleColumns.length - 1}>
					<div className="flex justify-center">
						<Spinner size={30} />
					</div>
				</Td>
			</Tr>
		)
	}

	// error handling here :)

	return (
		<>
			{data.map((x, i) => {
				return (
					<Tr
						{...rowProps}
						key={`${rowProps.key}-expanded-${i}`}
					>
						{row.cells.map((cell) => {
							return (
							<Td {...cell.getCellProps()}>
								{cell.render(cell.column.SubCell ? 'SubCell' : 'Cell', {
									value:
										cell.column.accessor &&
										cell.column.accessor(x, i),
									row: { ...row, original: x }
								})}
							</Td>
							)
						})}
					</Tr>
				)
			})}
		</>
	)
}

function SubRowAsync({ row, rowProps, visibleColumns }) {
	const [loading, setLoading] = useState(true)
	const [data, setData] = useState([])

	useEffect(() => {
		const timer = setTimeout(() => {
			setData([
				{
						firstName: 'clouds',
						lastName: 'bread',
						age: 15,
						visits: 76,
						progress: 72,
						status: 'complicated'
				},
				{
						firstName: 'can',
						lastName: 'songs',
						age: 3,
						visits: 76,
						progress: 47,
						status: 'relationship'
				},
				{
						firstName: 'jail',
						lastName: 'speech',
						age: 10,
						visits: 35,
						progress: 57,
						status: 'relationship'
				}
			])
			setLoading(false)
		}, 500)

		return () => clearTimeout(timer)
	}, [])

	return (
		<SubRows
			row={row}
			rowProps={rowProps}
			visibleColumns={visibleColumns}
			data={data}
			loading={loading}
		/>
	)
}

// A simple way to support a renderRowSubComponent is to make a render prop
// This is NOT part of the React Table API, it's merely a rendering
// option we are creating for ourselves in our table renderer
function ReactTable({ columns: userColumns, data, renderRowSubComponent }) {
	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
		visibleColumns,
	} = useTable(
		{
			columns: userColumns,
			data
		},
		useExpanded // We can useExpanded to track the expanded state
		// for sub components too!
	)

	return (
		<>
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
						const rowProps = row.getRowProps()
						return (
							// Use a React.Fragment here so the table markup is still valid
							<React.Fragment key={rowProps.key}>
								<Tr {...rowProps}>
									{row.cells.map(cell => {
										return (
											<Td {...cell.getCellProps()}>{cell.render('Cell')}</Td>
										)
									})}
								</Tr>
								{/* We could pass anything into this */}
								{row.isExpanded &&
									renderRowSubComponent({ row, rowProps, visibleColumns })}
							</React.Fragment>
						)
					})}
				</TBody>
			</Table>
		</>
	)
}


const SubComponent = () => {

	const columns = useMemo(() => [
		{
			// Make an expander cell
			Header: () => null, // No header
			id: 'expander', // It needs an ID
			Cell: ({ row }) => (
				// Use Cell to render an expander for each row.
				// We can use the getToggleRowExpandedProps prop-getter
				// to build the expander.
				<span {...row.getToggleRowExpandedProps()}>
					{row.isExpanded ?  <HiOutlineChevronDown /> : <HiOutlineChevronRight />}
				</span>
			),
			// We can override the cell renderer with a SubCell to be used with an expanded row
			SubCell: () => null // No expander on an expanded row
		},
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
		{
			Header: 'Visits',
			accessor: 'visits',
		},
		{
			Header: 'Status',
			accessor: 'status',
		},
		{
			Header: 'Profile Progress',
			accessor: 'progress',
		},
	], [])

	const renderRowSubComponent = useCallback(
    ({ row, rowProps, visibleColumns }) => (
      <SubRowAsync
        row={row}
        rowProps={rowProps}
        visibleColumns={visibleColumns}
      />
    ),
    []
  )

	return (
		<div>
			<ReactTable columns={columns} data={dataWithSubRows} renderRowSubComponent={renderRowSubComponent} />
		</div>
	)
}

export default SubComponent
