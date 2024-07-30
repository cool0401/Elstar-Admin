import React from 'react'
import { Card, Button, Timeline } from 'components/ui'
import Event from 'views/account/ActivityLog/components/Event'
import TimelineAvatar from 'views/account/ActivityLog/components/TimelineAvatar'
import { useNavigate } from 'react-router-dom'
import isEmpty from 'lodash/isEmpty'

const Activities = ({data = []}) => {

	const navigate = useNavigate()

	const onViewAllActivity = () => {
		navigate('/app/account/activity-log')
	}

	return (
		<Card>
			<div className="flex items-center justify-between mb-6">
				<h4>Activitiess</h4>
				<Button onClick={onViewAllActivity} size="sm">View All</Button>
			</div>
			<div className="mt-6">
				<Timeline>
					{
						isEmpty(data) 
						? 
						<Timeline.Item>No Activities</Timeline.Item>
						:
						data.map((event, index) => (
							<Timeline.Item 
								key={event.type + index} 
								media={
									<TimelineAvatar data={event} />
								}
							>
								<Event compact data={event} />
							</Timeline.Item>
						))
					}
				</Timeline>
			</div>
		</Card>
	)
}

export default Activities