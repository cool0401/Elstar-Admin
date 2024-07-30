import React, { useEffect } from 'react'
import { 
	getTransctionHistoryData, 
	setSelectedTab, 
	setTableData, 
	initialTableData,
	setTransactionHistoryData
} from '../store/dataSlice'
import { 
	Card, 
	Tabs
} from 'components/ui'
import OrderTable from './OrderTable'
import DepositWithdrawalTable from './DepositWithdrawalTable'
import { useDispatch, useSelector } from 'react-redux'

const { TabNav, TabList, TabContent } = Tabs

const TransactionHistory = () => {

	const dispatch = useDispatch()

	const data = useSelector((state) => state.cryptoWallets.data.transactionHistoryData)

	const loading = useSelector((state) => state.cryptoWallets.data.transactionHistoryLoading)

	const selectedTab = useSelector((state) => state.cryptoWallets.data.selectedTab)

	const tableData = useSelector((state) => state.cryptoWallets.data.tableData)

	useEffect(() => {
		dispatch(getTransctionHistoryData({tab: selectedTab, ...tableData}))	
	}, [dispatch, selectedTab, tableData])

	const handleTabChange = (val) => {
		dispatch(setTransactionHistoryData([]))
		dispatch(setSelectedTab(val))
		dispatch(setTableData(initialTableData))
	}

	return (
		<Card>
			<h4 className="mb-4">Transaction History</h4>
			<Tabs value={selectedTab} variant="pill" onChange={handleTabChange}>
				<TabList>
					<TabNav value="trade">Trade</TabNav>
					<TabNav value="deposit">Deposit</TabNav>
					<TabNav value="withdraw">Withdraw</TabNav>
				</TabList>
				<div className="mt-4">
					<TabContent value="trade">
						<OrderTable data={data} loading={loading} pagingData={tableData} />
					</TabContent>
					<TabContent value="deposit">
						<DepositWithdrawalTable data={data} loading={loading} pagingData={tableData} />
					</TabContent>
					<TabContent value="withdraw">
						<DepositWithdrawalTable data={data} loading={loading} pagingData={tableData} />
					</TabContent>
				</div>
			</Tabs>
		</Card>
	)
}

export default TransactionHistory