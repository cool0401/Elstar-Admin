import React, { useMemo, useState } from 'react'
import { Table, Input } from 'components/ui'
import { useTable, useFilters, useGlobalFilter, useAsyncDebounce } from 'react-table'
import  { matchSorter } from 'match-sorter'
import { data10 } from './data'

const { Tr, Th, Td, THead, TBody } = Table

function FilterInput ({ preGlobalFilteredRows, globalFilter, setGlobalFilter }) {
	const count = preGlobalFilteredRows.length
	const [value, setValue] = useState(globalFilter)
	const onChange = useAsyncDebounce(value => {
		setGlobalFilter(value || undefined)
	}, 200)

	return (
		<div className="flex justify-end">
			<div className="flex items-center mb-4">
				<span className="mr-2">Search:</span>
				<Input
					size="sm"
					value={value || ""}
					onChange={e => {
						setValue(e.target.value)
						onChange(e.target.value)
					}}
					style={{maxWidth: 180}}
					placeholder={`${count} records...`}
				/>
			</div>
		</div>
	)
}

function fuzzyTextFilterFn(rows, id, filterValue) {
	return matchSorter(rows, filterValue, { keys: [row => row.values[id]] })
}

// Let the table remove the filter if the string is empty
fuzzyTextFilterFn.autoRemove = val => !val

const ReactTable = ({ columns, data }) => {
	const filterTypes = useMemo(() => ({
		// Add a new fuzzyTextFilterFn filter type.
		fuzzyText: fuzzyTextFilterFn,
		// Or, override the default text filter to use
		// "startWith"
		text: (rows, id, filterValue) => {
			return rows.filter(row => {
				const rowValue = row.values[id]
				return rowValue !== undefined ? String(rowValue).toLowerCase().startsWith(String(filterValue).toLowerCase()) : true
			})
		},
	}),[])

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
		state,
		preGlobalFilteredRows,
		setGlobalFilter,
			allColumns,
	} = useTable(
		{
			columns,
			data,
			// defaultColumn, // Be sure to pass the defaultColumn option
			filterTypes,
		},
		useFilters, // useFilters!
		useGlobalFilter // useGlobalFilter!
	)
	// We don't want to render all of the rows for this example, so cap
	// it for this use case
	const firstPageRows = rows.slice(0, 10)

	return (
		<>
			<FilterInput
				preGlobalFilteredRows={preGlobalFilteredRows}
				globalFilter={state.globalFilter}
				setGlobalFilter={setGlobalFilter}
			/>
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
					{firstPageRows.map((row, i) => {
						prepareRow(row)
						return (
						<Tr {...row.getRowProps()}>
							{row.cells.map(cell => {
							return <Td {...cell.getCellProps()}>{cell.render('Cell')}</Td>
							})}
						</Tr>
						)
					})}
					{firstPageRows.length === 0 && (
						<Tr>
							<Td className="text-center" colspan={allColumns.length}>No data found!</Td>
						</Tr>
					)}
				</TBody>
			</Table>
		</>
	)
}

function Filtering() {
	const columns = useMemo(() => [
		{ Header: 'First Name', accessor: 'firstName',},
		{ Header: 'Last Name', accessor: 'lastName', },
		{ Header: 'Email', accessor: 'email', },
	], [])

	return (
		<div>
			<ReactTable columns={columns} data={data10} />
		</div>
	)
}

export default Filtering
