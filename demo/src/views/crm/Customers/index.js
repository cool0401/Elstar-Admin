import React from 'react'
import { AdaptableCard } from 'components/shared'
import CustomersTable from './components/CustomersTable'
import CustomersTableTools from './components/CustomersTableTools'
import CustomerStatistic from './components/CustomerStatistic'
import { injectReducer } from 'store/index'
import reducer from './store'

injectReducer('crmCustomers', reducer)

const Customers = () => {
	return (
		<>
			<CustomerStatistic />
			<AdaptableCard className="h-full" bodyClass="h-full">
				<CustomersTableTools />
				<CustomersTable />
			</AdaptableCard>
		</>
	)
}

export default Customers
