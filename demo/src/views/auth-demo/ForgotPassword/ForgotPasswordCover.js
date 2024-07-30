import React from 'react'
import ForgotPasswordForm from 'views/auth/ForgotPassword/ForgotPasswordForm'
import Cover from 'components/layout/AuthLayout/Cover'

const ForgotPasswordCover = props => {
	return (
		<Cover>
			<ForgotPasswordForm disableSubmit={true} signInUrl="/auth/sign-in-cover" {...props}/>
		</Cover>
	)
}

export default ForgotPasswordCover