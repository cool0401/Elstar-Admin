import React from 'react'
import ForgotPasswordForm from 'views/auth/ForgotPassword/ForgotPasswordForm'
import Simple from 'components/layout/AuthLayout/Simple'

const ForgotPasswordSimple = props => {
	return (
		<Simple>
			<ForgotPasswordForm disableSubmit={true} signInUrl="/auth/sign-in-simple" {...props}/>
		</Simple>
	)
}

export default ForgotPasswordSimple