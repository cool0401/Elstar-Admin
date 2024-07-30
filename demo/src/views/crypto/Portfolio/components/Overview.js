import React from 'react'
import { Card } from 'components/ui'
import { Chart } from 'components/shared'

const Overview = ({data = {}, className}) => {
	return (
		<Card className={className}>
			<h4>Statistic</h4>
			<div className="mt-4">
				<Chart
					series={data.series} 
					xAxis={data.date}
					height="350px"
				/>
			</div>
		</Card>
	)
}

export default Overview