import React from 'react'
import { Button } from 'components/ui'
import RecentAcivity from 'views/crypto/Portfolio/components/RecentAcivity'
import { useNavigate } from 'react-router-dom'

const RecentActivities = props => {

	const navigate = useNavigate()

	const handleClick = () => {
		navigate('/app/crypto/wallets')
	}

	return (
		<RecentAcivity 
			title="Recent Activities"
			extra={
				<Button size="sm" onClick={handleClick}>Details</Button>
			}
			{...props} 
		/>
	)
}

export default RecentActivities