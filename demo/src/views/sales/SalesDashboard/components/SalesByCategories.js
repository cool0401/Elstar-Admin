import React from 'react'
import { Card, Badge } from 'components/ui'
import { Chart } from 'components/shared'
import { COLORS } from 'constants/chart.constant'
import isEmpty from 'lodash/isEmpty'

const SalesByCategories = ({data = {}}) => {
	return (
		<Card>
			<h4>Categories</h4>
			<div className="mt-6">
				{
					!isEmpty(data) && (
						<>
							<Chart
								donutTitle={`${data.data.reduce((a, b) => a + b, 0)}`}
								donutText="Product Sold"
								series={data.data}
								customOptions={{labels: data.labels}}
								type="donut"
							/>
							{(data.data.length === data.labels.length) && (
								<div className="mt-6 grid grid-cols-2 gap-4 max-w-[180px] mx-auto">
									{
										data.labels.map((value, index) => (
											<div key={value} className="flex items-center gap-1">
												<Badge badgeStyle={{backgroundColor: COLORS[index]}} />
												<span className="font-semibold">{value}</span>
											</div>
										))
									}
								</div>
							)}
						</>
					)
				}
			</div>
		</Card>
	)
}

export default SalesByCategories