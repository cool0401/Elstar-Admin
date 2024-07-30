import React from 'react'
import classNames from 'classnames'
import { 
	Input,
	Button,
	Tag,
	Notification, 
	toast,
	FormContainer 
} from 'components/ui'
import FormDesription from './FormDesription'
import FormRow from './FormRow'
import { Field, Form, Formik } from 'formik'
import isLastChild from 'utils/isLastChild'
import { 
	HiOutlineDesktopComputer,
	HiOutlineDeviceMobile,
	HiOutlineDeviceTablet
} from 'react-icons/hi'
import dayjs from 'dayjs'
import * as Yup from 'yup'

const LoginHistoryIcon = ({type}) => {

	switch (type) {
		case 'Desktop':
			return <HiOutlineDesktopComputer />
		case 'Mobile':
			return <HiOutlineDeviceMobile />
		case 'Tablet':
			return <HiOutlineDeviceTablet />	
		default:
			return <HiOutlineDesktopComputer />
	}
}

const validationSchema = Yup.object().shape({
	password: Yup.string().required('Password Required'),
	newPassword: Yup.string().required('Enter your new password').min(8, 'Too Short!').matches(/^[A-Za-z0-9_-]*$/, 'Only Letters & Numbers Allowed'),
	confirmNewPassword: Yup.string().oneOf([Yup.ref('newPassword'), null], 'Password not match')
})

const Password = ({data}) => {

	const onFormSubmit = (values, setSubmitting) => {
		toast.push(
			<Notification title={"Password updated"} type="success" />
		,{
			placement: 'top-center'
		})
		setSubmitting(false)
	}

	return (
		<>
			<Formik
				initialValues={{ 
					password: '', 
					newPassword: '',
					confirmNewPassword: ''
				}}
				validationSchema={validationSchema}
				onSubmit={(values, { setSubmitting }) => {
					setSubmitting(true)
					setTimeout(() => {
						onFormSubmit(values, setSubmitting)
					}, 1000)
				}}
			>
				{({values, touched, errors, isSubmitting, resetForm}) => {
					const validatorProps = {touched, errors}
					return (
						<Form>
							<FormContainer>
								<FormDesription 
									title="Password"
									desc="Enter your current & new password to reset your password"
								/>
								<FormRow name="password" label="Current Password" {...validatorProps} >
									<Field 
										type="password" 
										autoComplete="off" 
										name="password" 
										placeholder="Current Password" 
										component={Input}
									/>
								</FormRow>
								<FormRow name="newPassword" label="New Password" {...validatorProps} >
									<Field 
										type="password"
										autoComplete="off"
										name="newPassword"
										placeholder="New Password"
										component={Input}
									/>
								</FormRow>
								<FormRow name="confirmNewPassword" label="Confirm Password" {...validatorProps} >
									<Field 
										type="password"
										autoComplete="off"
										name="confirmNewPassword"
										placeholder="Confirm Password"
										component={Input}
									/>
								</FormRow>							
								<div className="mt-4 ltr:text-right">
									<Button className="ltr:mr-2 rtl:ml-2" type="button" onClick={resetForm}>Reset</Button>
									<Button variant="solid" loading={isSubmitting} type="submit">
										{isSubmitting ? 'Updating' : 'Update Password'}
									</Button>
								</div>
							</FormContainer>
						</Form>
					)
				}}
			</Formik>
			<div className="mt-6">
				<FormDesription 
					title="Where you're signed in"
					desc="You're signed in to your account on these devices."
				/>
				{data && (
					<div className="rounded-lg border border-gray-200 dark:border-gray-600 mt-6">
						{data.map((log, index) => (
							<div 
								key={log.deviceName} 
								className={classNames(
									'flex items-center px-4 py-6',
									!isLastChild(data, index) && 'border-b border-gray-200 dark:border-gray-600'
								)}
							>
								<div className="flex items-center">
									<div className="text-3xl">
										<LoginHistoryIcon type={log.type}/>
									</div>
									<div className="ml-3 rtl:mr-3">
										<div className="flex items-center">
											<div className="text-gray-900 dark:text-gray-100 font-semibold">
												{log.deviceName}
											</div>
											{index === 0 && (
												<Tag className="bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-100 rounded-md border-0 mx-2">
													<span className="capitalize"> Current </span>
												</Tag>
											)}
										</div>
										<span>{log.location} • {dayjs.unix(log.time).format('DD-MMM-YYYY, hh:mm A')}</span>
									</div>
								</div>
							</div>
						))}
					</div>
				)}
			</div>
		</>
	)
}

export default Password