import React, { useState } from 'react'
import { Card, Segment } from 'components/ui'
import { Chart } from 'components/shared'
import NumberFormat from 'react-number-format'
import isEmpty from 'lodash/isEmpty'

const PortfolioStats = ({data = {}, className}) => {

	const [timeRange, setTimeRange] = useState(['month'])
	
	return (
		<Card className={className}>
			<div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
				<div>
					<p>Portfolio Balance</p>
					<h4 className="font-bold">
						{!isEmpty(data) && (
							<NumberFormat 
								displayType="text"
								value={data[timeRange[0]].series[0].data[data[timeRange[0]].series[0].data.length - 1]}
								prefix="$"
								thousandSeparator
							/>
						)}
					</h4>
				</div>
				<Segment 
					value={timeRange} 
					onChange={val => setTimeRange(val)} 
					size="sm"
				>
					<Segment.Item value="week">Week</Segment.Item>
					<Segment.Item value="month">Month</Segment.Item>
					<Segment.Item value="year">Year</Segment.Item>
				</Segment>
			</div>
			{
				!isEmpty(data) && (
					<Chart
						series={data[timeRange[0]].series} 
						xAxis={data[timeRange[0]].timeRange} 
						height="350px"
						customOptions={{legend: {show: false}}}
					/>
				)
			}
		</Card>
	)
}

export default PortfolioStats