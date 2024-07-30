import React, { useEffect } from 'react'
import reducer from './store'
import { injectReducer } from 'store/index'
import { getCrmDashboardData } from './store/dataSlice'
import { Loading } from 'components/shared'
import Statistic from './components/Statistic'
import LeadByCountries from './components/LeadByCountries'
import EmailSent from './components/EmailSent'
import Leads from './components/Leads'
import { useDispatch, useSelector } from 'react-redux'

injectReducer('crmDashboard', reducer)

const CrmDashboard = () => {

	const dispatch = useDispatch()

	const { 
		statisticData,
		leadByRegionData,
		recentLeadsData,
		emailSentData
	} = useSelector((state) => state.crmDashboard.data.dashboardData)
	const loading = useSelector((state) => state.crmDashboard.data.loading)

	useEffect(() => {
		fetchData()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
	
	const fetchData = () => {
		dispatch(getCrmDashboardData())
	}

	return (
		<div className="flex flex-col gap-4 h-full">
			<Loading loading={loading}>
				<Statistic data={statisticData} />
				<div className="grid grid-cols-1 xl:grid-cols-7 gap-4">
					<LeadByCountries className="xl:col-span-5" data={leadByRegionData} />
					<EmailSent className="xl:col-span-2" data={emailSentData} />
				</div>
				<Leads data={recentLeadsData} />
			</Loading>
		</div>
	)
}

export default CrmDashboard