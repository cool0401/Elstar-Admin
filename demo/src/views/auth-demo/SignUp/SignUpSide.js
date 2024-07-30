import React from 'react'
import SignUpForm from 'views/auth/SignUp/SignUpForm'
import Side from 'components/layout/AuthLayout/Side'

const SignUpSide = props => {
	return (
		<Side 
			content={
				<>
					<h3 className="mb-1">Sign Up</h3>
					<p>And lets get started with your free trial</p>
				</>
			}
		>
			<SignUpForm disableSubmit={true} signInUrl="/auth/sign-in-side" {...props}/>
		</Side>
	)
}

export default SignUpSide