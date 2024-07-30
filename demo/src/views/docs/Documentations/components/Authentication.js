import React from 'react'
import { SyntaxHighlighter } from 'components/shared'
import DemoComponentApi from 'components/docs/DemoComponentApi'

function range(start, end) {
	return Array(end - start + 1).fill().map((_, idx) => start + idx)
}

const Authentication = () => {
	return (
		<>
			<p>Elstar provides an implementation for JWT authorization that allows you to quickly link up your backend services.</p>
			<p>
				We are using <code>localStorage</code> & Redux to store authentication info. 
				As we mentioned in our <strong>Redux guide</strong>, we use <a href="https://github.com/rt2zz/redux-persist" target="_blank" rel="noreferrer">redux-persist</a> to
				maintain localStorage synchronize with some of our Redux state.
			</p>
			<div className="mt-10" id="useAuth">
				<h5>useAuth hook</h5>
				<p>We have created a hook that returns all the necessary method you might need to authenticate a user like <strong>signIn</strong>, <strong>signOut</strong>, <strong>signUp</strong> etc</p>
			</div>
			<DemoComponentApi hideApiTitle keyText="properties" api={
				[
					{
						api: [
							{
								propName: 'authenticated',
								type: `<code>boolean</code>`,
								default: `-`,
								desc: 'A state that define user whether authenticated, it will be true when token state has value & signedIn state is true in redux.'
							},
							{
								propName: 'signIn',
								type: `<code>(values: {userName: string, password: string}) => {status: 'success' | 'failed', message: string}</code>`,
								default: `-`,
								desc: `Function to sign in user.`
							},
							{
								propName: 'signUp',
								type: `<code>(values: {userName: string, email: string, password: string}) => {status: 'success' | 'failed', message: string}</code>`,
								default: `-`,
								desc: `Function to sign up user.`
							},
							{
								propName: 'signOut',
								type: `<code>() => void</code>`,
								default: `-`,
								desc: `Function to sign out user.`
							},
						]
					}
				]
			}/>

			<p>Let's take a look at the signIn logic implementation in the useAuth</p>

			<SyntaxHighlighter language="js">{`import { apiSignIn, apiSignOut } from 'services/AuthService'
...
const signIn = async (values) => {
	try {
		// fetching the signIn api from AuthService
		const resp = await apiSignIn(values)
		if (resp.data) {
			// Assuming your api response return a token,
			const { token } = resp.data
			
			// Dispatch onSignInSuccess with token, 
			// it will set to the token state & change signedIn state to true in redux
			dispatch(onSignInSuccess(token))

			// You can also set the user info to redux here as well, 
			// if it comes along with your sign in api
			if(resp.data.user) {
				dispatch(setUser(resp.data.user || { 
					avatar: '', 
					userName: 'Anonymous', 
					authority: ['USER'], 
					email: ''
				}))
			}

			const redirectUrl = query.get(REDIRECT_URL_KEY)
			navigate(redirectUrl ? redirectUrl : appConfig.authenticatedEntryPath)
			return {
				status: 'success',
				message: ''
			}
		}
	} catch (errors) {
		return {
			status: 'failed',
			message: errors?.response?.data?.message || errors.toString()
		}
	}
}`}</SyntaxHighlighter>

			<div className="mt-10" id="useAuth">
				<h5>AuthService</h5>
				<p>We also created a series of default authentication services under <code>src/services/AuthService.js</code>, each service method works coresponded <code>useAuth</code> fuction.</p>
				<SyntaxHighlighter language="js">{`import ApiService from "./ApiService"

export async function apiSignIn (data) {
    return ApiService.fetchData({
        url: '/sign-in',
        method: 'post',
        data
    })
}

export async function apiSignUp (data) {
    return ApiService.fetchData({
        url: '/sign-up',
        method: 'post',
        data
    })
}

export async function apiSignOut (data) {
    return ApiService.fetchData({
        url: '/sign-out',
        method: 'post',
        data
    })
}

...`}</SyntaxHighlighter>
			</div>
			<p>Here is an example for sign in implementation using useAuth hook:</p>
			<SyntaxHighlighter language="js">{`import React from 'react'
import { Input, Button, Checkbox, FormItem, FormContainer, Alert } from 'components/ui'
import { PasswordInput, ActionLink } from 'components/shared'
import useTimeOutMessage from 'utils/hooks/useTimeOutMessage'
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import useAuth from 'utils/hooks/useAuth'

const SignInForm = props => {

	const [message, setMessage] = useTimeOutMessage()

	const { signIn } = useAuth()

	const onSignIn = async (values, setSubmitting) => {
		const { userName, password } = values
		setSubmitting(true)
		
		const result = await signIn({ userName, password })

		if (result.status === 'failed') {
			setMessage(result.message)
		}

		setSubmitting(false)
	}

	return (
		<Formik
			onSubmit={(values, { setSubmitting }) => {
				onSignIn(values, setSubmitting)
			}}
			...
		>
		...
	)
`}</SyntaxHighlighter>
			<div className="mt-10" id="overview">
				<h5>Remove default authenticate implementation</h5>
				<p>If you feel the default Authenticate implementation incompatible with your case, you can remove the code as following</p>
			</div>
			<div className="mt-10" id="overview">
				<span>useAuth.js</span>
				<SyntaxHighlighter 
					language="js"
					wrapLines={true}
              		showLineNumbers={true}
					lineProps={lineNumber => {
						let style = { display: 'block' }
						if (range(21, 27).includes(lineNumber)) {
							style.backgroundColor = '#00ff002e'
						} else if ([...range(28, 53), ...[63]].includes(lineNumber)) {
							style.backgroundColor = '#ff00001f'
						}
						return { style }
					}}
				>{`import { useSelector, useDispatch } from 'react-redux'
import { setUser, initialState } from 'store/auth/userSlice'
import { apiSignIn, apiSignOut } from 'services/AuthService'
import { onSignInSuccess, onSignOutSuccess } from 'store/auth/sessionSlice'
import appConfig from 'configs/app.config'
import { REDIRECT_URL_KEY } from 'constants/app.constant'
import { useNavigate } from 'react-router-dom'
import useQuery from './useQuery'

function useAuth() {

	const dispatch = useDispatch()

	const navigate = useNavigate()

	const query = useQuery()

	const { signedIn } = useSelector((state) => state.auth.session)

	const signIn = async (values) => {
		dispatch(onSignInSuccess('exampleToken'))
		const redirectUrl = query.get(REDIRECT_URL_KEY)
		navigate(redirectUrl ? redirectUrl : appConfig.authenticatedEntryPath)
		return {
			status: 'success',
			message: ''
		}
		try {
			const resp = await apiSignIn(values)
			if (resp.data) {
				const { token } = resp.data
				dispatch(onSignInSuccess(token))
				if(resp.data.user) {
					dispatch(setUser(resp.data.user || { 
						avatar: '', 
						userName: 'Anonymous', 
						authority: ['USER'], 
						email: ''
					}))
				}
				const redirectUrl = query.get(REDIRECT_URL_KEY)
				navigate(redirectUrl ? redirectUrl : appConfig.authenticatedEntryPath)
				return {
					status: 'success',
					message: ''
				}
			}
		} catch (errors) {
			return {
				status: 'failed',
				message: errors?.response?.data?.message || errors.toString()
			}
		}
	}

	const handleSignOut = ()  => {
		dispatch(onSignOutSuccess())
		dispatch(setUser(initialState))
		navigate(appConfig.unAuthenticatedEntryPath)
	}

	const signOut = async () => {
		await apiSignOut()
		handleSignOut()
	}
	
	return {
		authenticated: signedIn,
		signIn,
		signOut
	}
}

export default useAuth`}</SyntaxHighlighter>
			</div>
		</>
	)
}

export default Authentication