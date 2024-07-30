import React from 'react'
import ActionBar from './components/ActionBar'
import ProjectListContent from './components/ProjectListContent'
import NewProjectDialog from './components/NewProjectDialog'
import { Container } from 'components/shared'
import reducer from './store'
import { injectReducer } from 'store/index'

injectReducer('projectList', reducer)

const ProjectList = () => {
	return (
		<Container className="h-full">
			<ActionBar />
			<ProjectListContent  />
			<NewProjectDialog />
		</Container>
	)
}

export default ProjectList
