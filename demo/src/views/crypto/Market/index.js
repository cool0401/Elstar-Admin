import React, { useEffect, useRef } from 'react'
import { Tabs } from 'components/ui'
import { AdaptableCard } from 'components/shared'
import { 
	getMarketData, 
	setSelectedTab, 
	setTableData, 
	setMarketData, 
	initialTableData 
} from './store/dataSlice'
import { useDispatch, useSelector } from 'react-redux'
import reducer from './store'
import { injectReducer } from 'store/index'
import cloneDeep from 'lodash/cloneDeep'
import AllTable from './components/AllTable'
import SpotTable from './components/SpotTable'
import FuturesTable from './components/FuturesTable'
import TradeDialog from './components/TradeDialog'
import QueryInput from './components/QueryInput'

injectReducer('cryptoMarket', reducer)

const { TabNav, TabList, TabContent } = Tabs

const Market = () => {

	const dispatch = useDispatch()

	const inputRef = useRef()

	const data = useSelector((state) => state.cryptoMarket.data.marketData)

	const loading = useSelector((state) => state.cryptoMarket.data.loading)

	const selectedTab = useSelector((state) => state.cryptoMarket.data.selectedTab)

	const tableData = useSelector((state) => state.cryptoMarket.data.tableData)

	useEffect(() => {
		fetchData()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [dispatch, selectedTab, tableData])
	
	const fetchData = () => {
		dispatch(getMarketData({tab: selectedTab, ...tableData}))
	}

	const handleTabChange = (val) => {
		dispatch(setMarketData([]))
		dispatch(setSelectedTab(val))
		dispatch(setTableData(initialTableData))
	}

	const handleInputChange = (val) => {
		const newTableData = cloneDeep(tableData)
		newTableData.query = val
		newTableData.pageIndex = 1
		if(typeof val === 'string' && val.length > 1) {
			dispatch(setTableData(newTableData))
		}

		if(typeof val === 'string' && val.length === 0) {
			dispatch(setTableData(newTableData))
		}
	}

	return (
		<>
			<AdaptableCard>
				<Tabs value={selectedTab} variant="pill" onChange={handleTabChange}>
					<div className="flex lg:items-center justify-between flex-col lg:flex-row gap-4">
						<TabList>
							<TabNav value="all">All</TabNav>
							<TabNav value="spot">Spot</TabNav>
							<TabNav value="futures">Futures</TabNav>
						</TabList>
						<QueryInput ref={inputRef} onInputChange={handleInputChange} />
					</div>
					<div className="mt-4">
						<TabContent value="all">
							<AllTable {...{data, loading, tableData}} />
						</TabContent>
						<TabContent value="spot">
							<SpotTable {...{data, loading, tableData}} />
						</TabContent>
						<TabContent value="futures">
							<FuturesTable {...{data, loading, tableData}} />
						</TabContent>
					</div>
				</Tabs>
			</AdaptableCard>
			<TradeDialog />
		</>
	)
}

export default Market