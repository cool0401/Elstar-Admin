import React from 'react'
import { Card, Badge } from 'components/ui'
import { Chart } from 'components/shared'
import isEmpty from 'lodash/isEmpty'
import { COLORS } from 'constants/chart.constant'

const Assets = ({data = {}, className}) => {
	return (
		<Card className={className}>
			<h4>Assets</h4>
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
				{
					!isEmpty(data) && (
						<>
							<Chart
								donutTitle={`$${data.values.reduce((a, b) => a + b, 0)}`}
								donutText="Assets"
								series={data.values}
								customOptions={{labels: data.labels}}
								type="donut"
								height={230}
							/>
							<div>
								{(data.values.length === data.coinValues.length) && (
									<div className="mt-6">
										{
											data.values.map((value, index) => (
												<div key={index} className="flex justify-between mb-6">
													<div key={value} className="flex gap-1">
														<Badge className="mt-1.5" badgeStyle={{backgroundColor: COLORS[index]}} />
														<div>
															<h6 className="font-bold text-sm">{data.labels[index]}</h6>
															<p>{data.coinValues[index]} {data.coinSymbol[index]}</p>
														</div>
													</div>
													<span className="font-semibold self-end">${value}</span>
												</div>
											))
										}
									</div>
								)}
							</div>
						</>
					)
				}
			</div>
		</Card>
	)
}

export default Assets