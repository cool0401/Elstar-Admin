import React, { useMemo} from 'react'
import { Table } from 'components/ui'
import { useTable } from 'react-table'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { MdDragIndicator } from 'react-icons/md'
import { data10 } from './data'

const { Tr, Th, Td, THead, TBody } = Table

const ReactTable = ({ columns, data, onChange }) => {

	const reorderData = (startIndex, endIndex) => {
		const newData = [...data]
		const [movedRow] = newData.splice(startIndex, 1)
		newData.splice(endIndex, 0, movedRow)
		onChange(newData)
	}

	const table = useTable({ columns, data })

	const { getTableProps, headerGroups, prepareRow, rows } = table

	const handleDragEnd = (result) => {
		const { source, destination } = result
		if (!destination) return
		reorderData(source.index, destination.index)
	}

	return (
		<Table {...getTableProps()} className="w-full">
			<THead>
				{headerGroups.map((headerGroup) => (
				<Tr {...headerGroup.getHeaderGroupProps()}>
					{headerGroup.headers.map((column) => (
						<Th {...column.getHeaderProps()}>
							{column.render("Header")}
						</Th>
					))}
				</Tr>
			))}
			</THead>
			<DragDropContext onDragEnd={handleDragEnd}>
				<Droppable droppableId="table-body">
					{(provided, _snapshot) => (
						<TBody ref={provided.innerRef} {...provided.droppableProps}>
							{rows.map((row, _index) => {
								prepareRow(row)
								return (
									<Draggable
										draggableId={row.original.id.toString()}
										key={row.original.id}
										index={row.index}
									>
										{(provided, snapshot) => {
											const { style } = provided.draggableProps
											return (
												<Tr
													{...row.getRowProps()}
													{...provided.draggableProps}
													ref={provided.innerRef}
													className={snapshot.isDragging ? 'table' : ''}
													style={style}
												>
													{row.cells.map((cell) => (
														<Td {...cell.getCellProps((_, meta) => {
															return {...meta?.cell.getCellProps()}
														})}>
															{cell.render("Cell", {
																dragHandleProps: provided.dragHandleProps
															})}
														</Td>
													))}
												</Tr>
											)
										}}
									</Draggable>
								)
							})}
							{provided.placeholder}
						</TBody>
					)}
				</Droppable>
			</DragDropContext>
		</Table>
	)
}

const DragAndDrop = () => {

	const columns = useMemo(() => [
		{
			id: 'dragger',
			Header: '',
			accessor: (row) => row,
			Cell: props => <span {...props.dragHandleProps}><MdDragIndicator /></span>
		},
		{ Header: 'First Name', accessor: 'firstName' },
		{ Header: 'Last Name', 	accessor: 'lastName' },
		{ Header: 'Email', accessor: 'email' },
	], [])

	const [data, setData] = React.useState(data10)

	return (
		<div>
			<ReactTable columns={columns} onChange={(newList) => setData(newList)} data={data} />
		</div>
	)
}

export default DragAndDrop
