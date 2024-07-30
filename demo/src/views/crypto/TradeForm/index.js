import React from 'react'
import { Tabs } from 'components/ui'
import BuyForm from './BuyForm'
import SellForm from './SellForm'

const { TabNav, TabList, TabContent } = Tabs

const TradeForm = (props) => {
	return (
		<Tabs defaultValue="buy">
			<TabList>
				<TabNav value="buy">Buy</TabNav>
				<TabNav value="sell">Sell</TabNav>
			</TabList>
			<div className="py-6">
				<TabContent value="buy">
					<BuyForm {...props} />
				</TabContent>
				<TabContent value="sell">
					<SellForm {...props} />
				</TabContent>
			</div>
		</Tabs>
	)
}

export default TradeForm