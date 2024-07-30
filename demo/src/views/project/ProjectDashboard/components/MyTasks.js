import React, { useMemo } from 'react'
import { Card, Button, Table, Tag } from 'components/ui'
import { useNavigate } from 'react-router-dom'
import { UsersAvatarGroup, ActionLink } from 'components/shared'
import { useTable } from 'react-table'

const { Tr, Th, Td, THead, TBody } = Table

const PriorityTag = ({priority}) => {
	switch (priority) {
		case 0:
			return <Tag className="text-red-600 bg-red-100 dark:text-red-100 dark:bg-red-500/20 rounded border-0">High</Tag>	
		case 1:
			return <Tag className="text-amber-600 bg-amber-100 dark:text-amber-100 dark:bg-amber-500/20 rounded border-0">Medium</Tag>
		case 2:
			return <Tag className="bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-100 rounded border-0">Low</Tag>	
		default:
			return null
	}
}

const MyTasks = ({data = []}) => {

	const navigate = useNavigate()

	const columns = useMemo(() => [
		{
			Header: 'Task ID',
			accessor: 'taskId',
			Cell: props => {
				const { taskId } = props.row.original
				return (
					<ActionLink 
						themeColor={false} 
						className="font-semibold" 
						to="/app/project/scrum-board"
					>
						{taskId}
					</ActionLink>
				)
			},
		},
		{
			Header: 'Subject',
			accessor: 'taskSubject',
		},
		{
			Header: 'Priority',
			accessor: 'priority',
			Cell: props => {
				const { priority } = props.row.original
				return (
					<PriorityTag priority={priority} />
				)
			},
		},
		{
			Header: 'Assignees',
			accessor: 'Assignees',
			Cell: props => {
				const { assignees } = props.row.original
				return (
					<UsersAvatarGroup users={assignees} />
				)
			},
		}
	], [])

	const { 
		getTableProps, 
		getTableBodyProps, 
		prepareRow,
		headerGroups, 
		rows 
	} = useTable( { columns, data, initialState: { pageIndex: 0 }, })

	const onViewAllTask = () => {
		navigate('/app/project/issue')
	}

	return (
		<Card>
			<div className="flex items-center justify-between mb-6">
				<h4>My Tasks</h4>
				<Button onClick={onViewAllTask} size="sm">View All</Button>
			</div>
			<Table compact {...getTableProps()}>
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

export default MyTasks