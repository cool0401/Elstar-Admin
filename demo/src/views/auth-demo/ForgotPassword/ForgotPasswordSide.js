import React from 'react'
import ForgotPasswordForm from 'views/auth/ForgotPassword/ForgotPasswordForm'
import Side from 'components/layout/AuthLayout/Side'

const ForgotPasswordCover = props => {
	return (
		<Side>
			<ForgotPasswordForm disableSubmit={true} signInUrl="/auth/sign-in-side" {...props}/>
		</Side>
	)
}

export default ForgotPasswordCover