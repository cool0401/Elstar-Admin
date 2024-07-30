import React from 'react'
import { Alert } from 'components/ui'

const Closable = () => {

    const onCloseClick = () => {
        console.log('Alert closed!')
    }
    
	return (
		<div>
			<Alert type="success" closable onClose={onCloseClick}>
                Thanks for submitting your application. Our team will get back to you soon.
			</Alert> 
		</div>
	)
}

export default Closable
