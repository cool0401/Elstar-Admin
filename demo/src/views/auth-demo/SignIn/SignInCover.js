import React from 'react'
import SignInForm from 'views/auth/SignIn/SignInForm'
import Cover from 'components/layout/AuthLayout/Cover'

const SignInCover = props => {
	return (
		<Cover
			content={
				<>
					<h3 className="mb-1">Welcome back!</h3>
					<p>Please enter your credentials to sign in!</p>
				</>
			}
		>
			<SignInForm 
				disableSubmit={true} 
				signUpUrl="/auth/sign-up-cover"  
				forgotPasswordUrl="/auth/forgot-password-cover" 
				{...props}
			/>
		</Cover>
	)
}

export default SignInCover