import React from 'react'

const DemoBoxContent = ({children, className}) => {
	return (
		<div className={`p-4 rounded-lg text-center font-semibold text-white ${className}`}>
			{children}
		</div>
	)
}

export default DemoBoxContent