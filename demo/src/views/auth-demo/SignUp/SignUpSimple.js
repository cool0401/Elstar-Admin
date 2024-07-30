import React from 'react'
import SignUpForm from 'views/auth/SignUp/SignUpForm'
import Simple from 'components/layout/AuthLayout/Simple'

const SignUpSimple = props => {
	return (
		<Simple 
			content={
				<div className="mb-4">
					<h3 className="mb-1">Sign Up</h3>
					<p>And lets get started with your free trial</p>
				</div>
			}
		>
			<SignUpForm disableSubmit={true} signInUrl="/auth/sign-in-simple" {...props}/>
		</Simple>
	)
}

export default SignUpSimple