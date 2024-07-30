import React from 'react'
import TopSection from './components/TopSection'
import BodySection from './components/BodySection'
import { Container } from 'components/shared'
import reducer from './store'
import { injectReducer } from 'store/index'

injectReducer('knowledgeBaseHelpCenter', reducer)

const HelpCenter = () => {
	return (
		<>
			<TopSection />
			<Container>
				<div className="mt-8 px-4">
					<BodySection />
				</div>
			</Container>
		</>
	)
}

export default HelpCenter