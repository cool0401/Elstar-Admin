import React, { useMemo, useEffect, useState } from 'react'
import { Table, Input, Button } from 'components/ui'
import { useTable, usePagination } from 'react-table'
import { data10 } from './data'

const { Tr, Th, Td, THead, TBody } = Table

const EditableCell = ({
		value: initialValue,
		row: { index },
		column: { id },
		updateMyData, // This is a custom function that we supplied to our table instance
	}) => {
	// We need to keep and update the state of the cell normally
	const [value, setValue] = useState(initialValue)

	const onChange = e => {
		setValue(e.target.value)
	}

	// We'll only update the external data when the input is blurred
	const onBlur = () => {
		updateMyData(index, id, value)
	}

	// If the initialValue is changed external, sync it up with our state
	useEffect(() => {
		setValue(initialValue)
	}, [initialValue])

	return (
		<Input 
			className="border-transparent bg-transparent hover:border-gray-300 focus:bg-white" 
			size="sm"
			value={value} 
			onChange={onChange}
			onBlur={onBlur}
		/>
	)
	
}

// Set our editable cell renderer as the default Cell renderer
const defaultColumn = {
	Cell: EditableCell,
}

// Be sure to pass our updateMyData and the skipPageReset option
function ReactTable({ columns, data, updateMyData, skipPageReset }) {
	// For this example, we're using pagination to illustrate how to stop
	// the current page from resetting when our data changes
	// Otherwise, nothing is different here.
	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		prepareRow,
		page,
	} = useTable(
		{
			columns,
			data,
			defaultColumn,
			// use the skipPageReset option to disable page resetting temporarily
			autoResetPage: !skipPageReset,
			// updateMyData isn't part of the API, but
			// anything we put into these options will
			// automatically be available on the instance.
			// That way we can call this function from our
			// cell renderer!
			updateMyData,
		},
		usePagination
	)

	// Render the UI for your table
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
					{page.map((row, i) => {
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
		</>
	)
}

const Editable = () => {
	const columns = useMemo( () => [
		{ Header: 'First Name', accessor: 'firstName' },
		{ Header: 'Last Name', 	accessor: 'lastName' },
		{ Header: 'Email', accessor: 'email' },
	], [])

	const [data, setData] = useState(() => data10)
	const [originalData] = useState(data)
	const [skipPageReset, setSkipPageReset] = useState(false)

	// We need to keep the table from resetting the pageIndex when we
	// Update data. So we can keep track of that flag with a ref.

	// When our cell renderer calls updateMyData, we'll use
	// the rowIndex, columnId and new value to update the
	// original data
	const updateMyData = (rowIndex, columnId, value) => {
		// We also turn on the flag to not reset the page
		setSkipPageReset(true)
		setData(old =>
			old.map((row, index) => {
				if (index === rowIndex) {
					return {
						...old[rowIndex],
						[columnId]: value,
					}
				}
				return row
			})
		)
	}

	// After data chagnes, we turn the flag back off
	// so that if data actually changes when we're not
	// editing it, the page is reset
	useEffect(() => {
		setSkipPageReset(false)
	}, [data])

  // Let's add a data resetter/randomizer to help
  // illustrate that flow...
	const resetData = () => setData(originalData)

	return (
		<>
			<div className="mb-4 text-right">
				<Button onClick={resetData}>Reset Data</Button>
			</div>
			<ReactTable
				columns={columns}
				data={data}
				updateMyData={updateMyData}
				skipPageReset={skipPageReset}
			/>
		</>
	)
}

export default Editable
