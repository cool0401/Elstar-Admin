import React from 'react'
import Chart from 'react-apexcharts'
import { COLORS } from 'constants/chart.constant'

const DashedLine = () => {

	const data = [
		{
			name: "Session Duration",
			data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
		},
		{
			name: "Page Views",
			data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
		},
		{
			name: 'Total Visits',
			data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
		}
	]

	return (
		<div></div>
	)
}

export default DashedLine