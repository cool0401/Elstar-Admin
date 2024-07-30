import React from 'react'
import SignUpForm from 'views/auth/SignUp/SignUpForm'
import Cover from 'components/layout/AuthLayout/Cover'

const SignUpCover = props => {
	return (
		<Cover
			content={
				<>
					<h3 className="mb-1">Sign Up</h3>
					<p>And lets get started with your free trial</p>
				</>
			}
		>
			<SignUpForm disableSubmit={true} signInUrl="/auth/sign-in-cover" {...props}/>
		</Cover>
	)
}

export default SignUpCover