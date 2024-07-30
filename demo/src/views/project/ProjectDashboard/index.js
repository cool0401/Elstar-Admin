import React, { useEffect } from 'react'
import reducer from './store'
import { injectReducer } from 'store/index'
import { getProjectDashboardData } from './store/dataSlice'
import { Loading } from 'components/shared'
import ProjectDashboardHeader from './components/ProjectDashboardHeader'
import TaskOverview from './components/TaskOverview'
import MyTasks from './components/MyTasks'
import Projects from './components/Projects'
import Schedule from './components/Schedule'
import Activities from './components/Activities'
import { useDispatch, useSelector } from 'react-redux'

injectReducer('projectDashboard', reducer)

const ProjectDashboard = () => {

	const dispatch = useDispatch()

	const {
		userName,
		taskCount,
		projectOverviewData,
		myTasksData,
		scheduleData,
		projectsData,
		activitiesData,
	} = useSelector((state) => state.projectDashboard.data.dashboardData)
	const loading = useSelector((state) => state.projectDashboard.data.loading)

	useEffect(() => {
		fetchData()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
	
	const fetchData = () => {
		dispatch(getProjectDashboardData())
	}

	return (
		<div className="flex flex-col gap-4 h-full">
			<Loading loading={loading}>
				<ProjectDashboardHeader data={{userName, taskCount}} />
				<div className="flex flex-col xl:flex-row gap-4">
					<div className="flex flex-col gap-4 flex-auto">
						<TaskOverview data={projectOverviewData} />
						<MyTasks data={myTasksData} />
						<Projects data={projectsData} />
					</div>
					<div className="flex flex-col gap-4">
						<div className="xl:w-[380px]">
							<Schedule data={scheduleData} />
							<Activities data={activitiesData} />
						</div>
					</div>
				</div>
			</Loading>
		</div>
	)
}

export default ProjectDashboard