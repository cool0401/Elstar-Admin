import React, { useEffect, useState, useCallback, useRef, Fragment } from 'react'
import { Button, Avatar, Tag, Timeline, Card, Input } from 'components/ui'
import { AdaptableCard, Loading, Container, RichTextEditor, IconText } from 'components/shared'
import { HiPencil, HiClock, HiCalendar, HiTag, HiTicket, HiUserCircle, HiLightningBolt } from 'react-icons/hi'
import { apiGetScrumBoardtTicketDetail } from 'services/ProjectService'
import ReactHtmlParser from 'html-react-parser'
import isLastChild from 'utils/isLastChild'
import debounce from 'lodash/debounce'
import cloneDeep from 'lodash/cloneDeep'

const TimelineAvatar = ({children, ...rest}) => {
	return (
		<Avatar 
			{...rest} 
			size={30} 
			shape="circle" 
		>
			{children}
		</Avatar>
	)
}

const TimelineAssign = ({timeline, ...rest}) => {
	return (
		<Timeline.Item
			className="w-full"
			media={
				<TimelineAvatar className="text-gray-700 bg-gray-200 dark:text-gray-100 dark:bg-gray-600">
					<span className="text-xl"><HiUserCircle /></span>
				</TimelineAvatar>
			}
			{...rest}
		>
			<p className="my-1 flex items-center">
				<span className="font-semibold text-gray-900 dark:text-gray-100">{timeline.name}</span>
				<span className="mx-2">assigned </span>
				{timeline.assignees?.map((assignee, index) => (
					<span key={assignee} className="font-semibold text-gray-900 dark:text-gray-100 mr-1 rtl:ml-1">
						{assignee}
						{!isLastChild(timeline.assignees, index) && <span>,</span>}
					</span>
				))}
				<span>{timeline.time}</span>
			</p>
		</Timeline.Item>
	)
}

const TimelineComment = ({timeline, ...rest}) => {
	return (
		<Timeline.Item
			className="w-full"
			media={
				<TimelineAvatar src={timeline.img} />
			}
			{...rest}
		>
			<p className="my-1 flex items-center">
				<span className="font-semibold text-gray-900 dark:text-gray-100">{timeline.name}</span>
				<span className="mx-2">added a comment </span>
				<span>{timeline.time}</span>
			</p>
			<Card bordered className="mt-4">
				<p>{timeline.comment}</p>
			</Card>
		</Timeline.Item>
	)
}

const TimelineTag = ({timeline, ...rest}) => {
	return (
		<Timeline.Item
			className="w-full"
			media={
				<TimelineAvatar className="text-gray-700 bg-gray-200 dark:text-gray-100 dark:bg-gray-600">
					<span className="text-xl"><HiTag /></span>
				</TimelineAvatar>
			}
			{...rest}
		>
			<div className="flex items-center">
				<span className="font-semibold text-gray-900 dark:text-gray-100">{timeline.name} </span>
				<span className="mx-2">added tags </span>
				{timeline.labels?.map(label => (
					<Tag
						className="mr-2 rtl:ml-2 cursor-pointer"
						prefix 
						prefixClass={label.class}
						key={label.title}
					>
						{label.title}
					</Tag>
				))}
				<span>{timeline.time}</span>
			</div>
		</Timeline.Item>
	)
}

const Issue = () => {

	const [data, setData] = useState({})
	const [loading, setLoading] = useState(false)
	const [editMode, setEditMode] = useState(false)

	const commentInput = useRef()

	const debounceFn = debounce(handleDebounceFn, 1000)

	function handleDebounceFn(val) {
		setData( prevState => ({...prevState, ...{description: val}}))
	}

	useEffect(() => {
		fetchData()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const fetchData = useCallback(async () => {
		setLoading(true)
		const resp = await apiGetScrumBoardtTicketDetail()
		setData(resp.data)
		setLoading(false)
	}, [])

	const onEditModeActive = useCallback(() => {
		setEditMode(true)
	}, [])

	const onEditComplete = useCallback(() => {
		setEditMode(false)
	}, [])

	const onEdit = (val) => {
		debounceFn(val)
	}

	const submitComment = () => {
		const message = commentInput.current.value
		const comment = {
			type: 'COMMENT',
			name: 'Carolyn Perkins',
			img: '/img/avatars/thumb-1.jpg',
			time: 'now',
			comment: message
		}
		const activity = cloneDeep(data.activity)
		activity.push(comment)
		setData( prevState => ({...prevState, ...{activity: activity}}))
		commentInput.current.value = ''
	}

	const getTimelineItem = (timeline, isLast) => {

		switch (timeline.type) {
			case 'COMMENT':
				return <TimelineComment timeline={timeline} isLast={isLast} />
			case 'ASSIGN':
				return <TimelineAssign timeline={timeline} isLast={isLast} />
			case 'TAG':
				return <TimelineTag timeline={timeline} isLast={isLast} />
			default:
				return <></>;
		}
	}

	return (
		<Container className="h-full">
			<Loading loading={loading}>
				<div className="grid md:grid-cols-1 lg:grid-cols-3 gap-4">
					<div className="lg:col-span-2">
						<AdaptableCard bodyClass="p-5" rightSideBorder>
							<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
								<div>
									<h3 className="mb-2 font-bold">{data.title}</h3>
									<p>
										{data.ticketId} created by  
										<span className="font-semibold text-gray-900 dark:text-gray-100 mx-1 cursor-pointer">
											{data.createdBy}
										</span>
									</p>
								</div>
								<div>
									{
										editMode
										?
										<Button block onClick={onEditComplete} variant="solid">Done</Button>
										:
										<Button block onClick={onEditModeActive} icon={<HiPencil />}>Edit</Button>
									}
								</div>
							</div>
							<hr className="my-6" />
							<div className="text-base">
								{
									editMode 
									? 
									<RichTextEditor value={data.description} onChange={onEdit} />
									: 
									<div className="prose dark:prose-invert max-w-none">
										{ReactHtmlParser(data.description || '')}
									</div> 
								}
							</div>
							<div className="mt-12">
								<h4>Activity</h4>
								<hr className="my-6" />
								<Timeline>
									{data.activity?.map((item, index) => (
										<Fragment key={item.type + index}>
											{getTimelineItem(item, isLastChild(data.activity, index))}
										</Fragment>
									))}
								</Timeline>
								<div className="mt-6 mb-3 flex flex-auto">
									<TimelineAvatar  src="/img/avatars/thumb-1.jpg" />
									<div className="ml-4 rtl:mr-4 w-full">
										<Input
											ref={commentInput}
											placeholder="Leave a comment"
											textArea 
										/>
									</div>
								</div>
								<div className="text-right">
									<Button variant="solid" onClick={() => submitComment()} >Comment</Button>
								</div>
							</div>
						</AdaptableCard>
					</div>
					<div>
						<AdaptableCard bodyClass="p-5">
							<h4 className="mb-6">Details</h4>
							<IconText 
								className="mb-4 text-emerald-500" 
								icon={<HiClock className="text-lg" />}
							>
								<span className="font-semibold">In Progress</span>
							</IconText>
							<IconText
								className="mb-4" 
								icon={<HiTag className="text-lg opacity-70" />}
							>
								<span className="font-semibold">{data.underProject}</span>
							</IconText>
							<IconText
								className="mb-4" 
								icon={<HiTicket className="text-lg opacity-70" />}
							>
								<span className="font-semibold cursor-pointer">Linked tickets</span>
							</IconText>
							<IconText
								className="mb-4" 
								icon={<HiLightningBolt className="text-lg opacity-70" />}
							>
								<span className="font-semibold cursor-pointer">5 story point</span>
							</IconText>
							<IconText
								className="mb-4" 
								icon={<HiCalendar className="text-lg opacity-70" />}
							>
								<span className="font-semibold">Created on {data.date}</span>
							</IconText>
							<hr className="my-6" />
							<p className="font-semibold mb-4">Assignees</p>
							{data.assignees?.map(assignee => (
								<IconText
									key={assignee.id}
									className="mb-4" 
									icon={<Avatar size={20} shape="circle" src={assignee.img} />}
								>
									<span className="font-semibold text-gray-700 dark:text-gray-100">{assignee.name}</span>
								</IconText>
							))}
							<p className="font-semibold mb-4 mt-8">Tags</p>
							{data.labels?.map(label => (
								<Tag 
									key={label.title} 
									className="mr-2 rtl:ml-2 cursor-pointer"
									prefix 
									prefixClass={label.class}
								>{label.title}</Tag>
							))}
						</AdaptableCard>
					</div>
				</div>
			</Loading>
		</Container>
	)
}

export default Issue
