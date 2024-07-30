import React, { useState, useEffect } from 'react'
import { Card, Segment, Badge } from 'components/ui'
import { Loading } from 'components/shared'
import { Chart } from 'components/shared'
import { COLORS } from 'constants/chart.constant'
import isEmpty from 'lodash/isEmpty'
import { useSelector } from 'react-redux'

const ChartLegend = ({label, value, badgeClass, showBadge = true}) => {

	return (
		<div className="flex gap-2">
			{showBadge && <Badge className="mt-2.5" innerClass={badgeClass}/>}
			<div>
				<h5 className="font-bold">{value}</h5>
				<p>{label}</p>
			</div>
		</div>
	)
}

const TaskOverview = ({data = {}, className}) => {

	const [timeRange, setTimeRange] = useState(['weekly'])

	const [repaint, setRepaint] = useState(false)

	const sideNavCollapse = useSelector(state => state.theme.layout.sideNavCollapse)

	useEffect(() => {
		setRepaint(true)
		const timer1 = setTimeout(() => setRepaint(false), 300)

		return () => {
		  	clearTimeout(timer1)
		}
	}, [data, sideNavCollapse])
	

	return (
		<Card className={className}>
			<div className="flex sm:flex-row flex-col md:items-center justify-between mb-6 gap-4">
				<h4>Task Overview</h4>
				<Segment 
					value={timeRange} 
					onChange={val => setTimeRange(val)} 
					size="sm"
				>
					<Segment.Item value="monthly">Monthly</Segment.Item>
					<Segment.Item value="weekly">Weekly</Segment.Item>
					<Segment.Item value="daily">Daily</Segment.Item>
				</Segment>
			</div>
			{
				(!isEmpty(data) && !repaint) && (
					<>
						<div className="flex items-center justify-between mb-4">
							<div>
								<ChartLegend 
									showBadge={false}
									label="Total Tasks"
									value={data.chart[timeRange[0]].total}
								/>
							</div>
							<div className="flex gap-x-6">
								<ChartLegend
									badgeClass="bg-indigo-600"
									label={data.chart[timeRange[0]].series[0].name}
									value={data.chart[timeRange[0]].onGoing}
								/>
								<ChartLegend
									badgeClass="bg-emerald-500"
									label={data.chart[timeRange[0]].series[1].name}
									value={data.chart[timeRange[0]].finished}
								/>
							</div>
						</div>
						<div>
							<Chart 
								series={data.chart[timeRange[0]].series} 
								xAxis={data.chart[timeRange[0]].range}
								type="bar"
								customOptions={{colors: [COLORS[0], COLORS[2]], legend: {show: false}}}
							/>
						</div>
					</>
				)
			}
			<Loading loading={repaint} type="cover" >
				{repaint && <div className="h-[300px]" />}
			</Loading>
		</Card>
	)
}

export default TaskOverview