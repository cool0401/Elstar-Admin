import React, { useEffect } from 'react'
import { Loading } from 'components/shared'
import Statistic from './Statistic'
import SalesReport from './SalesReport'
import SalesByCategories from './SalesByCategories'
import LatestOrder from './LatestOrder'
import TopProduct from './TopProduct'
import { getSalesDashboardData } from '../store/dataSlice'
import { useDispatch, useSelector } from 'react-redux'

const SalesDashboardBody = () => {

	const dispatch = useDispatch()

	const { 
		statisticData, 
		salesReportData,
		topProductsData,
		latestOrderData,
		salesByCategoriesData
	} = useSelector((state) => state.salesDashboard.data.dashboardData)
	const loading = useSelector((state) => state.salesDashboard.data.loading)

	useEffect(() => {
		fetchData()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
	
	const fetchData = () => {
		dispatch(getSalesDashboardData())
	}

	return (
		<Loading loading={loading}>
			<Statistic data={statisticData} />
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
				<SalesReport data={salesReportData} className="col-span-2" />
				<SalesByCategories data={salesByCategoriesData} />
			</div>
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
				<LatestOrder data={latestOrderData} className="lg:col-span-2" />
				<TopProduct data={topProductsData}/>
			</div>
		</Loading>
	)
}

export default SalesDashboardBody