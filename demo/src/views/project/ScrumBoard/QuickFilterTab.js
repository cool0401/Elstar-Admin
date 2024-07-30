import React from 'react'
import { Tabs } from 'components/ui'
import { labelList } from './utils'
import { setSelectedTab } from './store/stateSlice'
import { useSelector, useDispatch } from 'react-redux'

const { TabNav, TabList } = Tabs

const QuickFilterTab = () => {

	const dispatch = useDispatch()

	const selectedTab = useSelector(state => state.scrumBoard.state.selectedTab)

	const handleTabChange = val => {
		dispatch(setSelectedTab(val))
	}
	
	return (
		<Tabs value={selectedTab} variant="pill" onChange={handleTabChange}>
			<TabList>
				<TabNav value="All">All</TabNav>
				{labelList.map((tab, index) => (
					<TabNav key={`${tab}-${index}`} value={tab}>{tab}</TabNav>
				))}
			</TabList>
		</Tabs>
	)
}

export default QuickFilterTab