import React from 'react'
import ResetPasswordForm from 'views/auth/ResetPassword/ResetPasswordForm'
import Cover from 'components/layout/AuthLayout/Cover'

const ResetPasswordCover = props => {
	return (
		<Cover>
			<ResetPasswordForm disableSubmit={true} signInUrl="/auth/sign-in-cover" {...props}/>
		</Cover>
	)
}

export default ResetPasswordCover