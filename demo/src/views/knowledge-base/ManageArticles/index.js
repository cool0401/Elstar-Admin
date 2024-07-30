import React from 'react'
import { Container, AdaptableCard } from 'components/shared'
import Articles from './components/Articles'
import reducer from './store'
import { injectReducer } from 'store/index'

injectReducer('knowledgeBaseManageArticles', reducer)

const ManageArticles = () => {
	return (
		<Container>
			<AdaptableCard>
				<Articles />
			</AdaptableCard>
		</Container>
	)
}

export default ManageArticles