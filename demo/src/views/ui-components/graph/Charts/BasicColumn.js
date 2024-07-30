import React from 'react'
import Chart from 'react-apexcharts'
import { COLORS } from 'constants/chart.constant'

const BasicColumn = () => {

	const data = [{
		name: 'Net Profit',
		data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
	}, {
		name: 'Revenue',
		data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
	}, {
		name: 'Free Cash Flow',
		data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
	}]

	return (
		<div></div>
	)
}

export default BasicColumn