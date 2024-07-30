import React, { useEffect } from 'react'
import { Timeline, Button } from 'components/ui'
import { Loading } from 'components/shared'
import Event from './Event'
import TimelineAvatar from './TimelineAvatar'
import { getLogs, filterLogs, setActivityIndex } from '../store/dataSlice'
import { useDispatch, useSelector } from 'react-redux'
import isEmpty from 'lodash/isEmpty'
import dayjs from 'dayjs'

const Log = () => {

	const dispatch = useDispatch()
	const logs = useSelector((state) => state.accountActivityLog.data.logs)
	const loading = useSelector((state) => state.accountActivityLog.data.loading)
	const loadMoreLoading = useSelector((state) => state.accountActivityLog.data.loadMoreLoading)
	const loadable = useSelector((state) => state.accountActivityLog.data.loadable)
	const selectedType = useSelector((state) => state.accountActivityLog.state.selectedType)
	const activityIndex = useSelector((state) => state.accountActivityLog.data.activityIndex)

	useEffect(() => {
		dispatch(filterLogs({filter: selectedType, activityIndex}))
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const onLoadMore = () => {
		const nextIndex = activityIndex + 1
		dispatch(setActivityIndex(nextIndex))
		dispatch(getLogs({filter: selectedType, activityIndex: nextIndex}))
	}

	return (
		<Loading loading={loading}>
			<div className="max-w-[900px]">
				{logs.map(log => (
					<div className="mb-8" key={log.id}>
						<div className="mb-4 font-semibold uppercase">
							{dayjs.unix(log.date).format('dddd, DD MMMM')}
						</div>
						<Timeline>
							{
								isEmpty(log.events) 
								? 
								<Timeline.Item>No Activities</Timeline.Item>
								:
								log.events.map((event, index) => (
									<Timeline.Item key={event.type + index} media={
										<TimelineAvatar data={event} />
									}>
										<div className="mt-1">
											<Event data={event} />
										</div>
									</Timeline.Item>
								))
							}
						</Timeline>
					</div>
				))}
				<div className="text-center">
					{
						loadable 
						? 
						<Button loading={loadMoreLoading} onClick={onLoadMore}>Load More</Button> 
						: 
						'No more activity to load'
					}
				</div>
			</div>
		</Loading>
	)
}

export default Log