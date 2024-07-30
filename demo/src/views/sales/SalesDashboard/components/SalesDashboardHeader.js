import React from 'react'
import { DatePicker, Button } from 'components/ui'
import { setStartDate, setEndDate } from '../store/stateSlice'
import { getSalesDashboardData } from '../store/dataSlice'
import { HiOutlineFilter } from 'react-icons/hi'
import { useDispatch, useSelector } from 'react-redux'

const dateFormat = 'MMM DD, YYYY'

const { DatePickerRange } = DatePicker

const SalesDashboardHeader = () => {

	const dispatch = useDispatch()
		
	const startDate = useSelector((state) => state.salesDashboard.state.startDate)
	const endDate = useSelector((state) => state.salesDashboard.state.endDate)

	const handleDateChange = (value) => {
		dispatch(setStartDate(value[0]))
		dispatch(setEndDate(value[1]))
	}

	const onFilter = () => {
		dispatch(getSalesDashboardData())
	}

	return (
		<div className="lg:flex items-center justify-between mb-4 gap-3">
			<div className="mb-4 lg:mb-0">
				<h3>Sales Overview</h3>
				<p>View your current sales & summary</p>
			</div>
			<div className="flex flex-col lg:flex-row lg:items-center gap-3">
				<DatePickerRange 
					value={[startDate, endDate]}
					onChange={handleDateChange}
					inputFormat={dateFormat}
					size="sm"
				/>
				<Button 
					size="sm" 
					icon={<HiOutlineFilter />}
					onClick={onFilter}
				>
					Filter
				</Button>
			</div>
		</div>
	)
}

export default SalesDashboardHeader