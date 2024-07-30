import React from 'react'
import { 
	Button,
	Segment,
	Notification, 
	toast,
	FormContainer 
} from 'components/ui'
import FormDesription from './FormDesription'
import FormRow from './FormRow'
import { Field, Form, Formik } from 'formik'
import isLastChild from 'utils/isLastChild'
import { 
	HiMail,
	HiGlobeAlt,
	HiOutlineDeviceMobile
} from 'react-icons/hi'

const generalNotificationForm = [
	{label: 'News', name: 'news'},
	{label: 'Account activity', name: 'accountActivity'},
	{label: 'New device used to sign in', name: 'signIn'},
	{label: 'Reminders', name: 'reminders'},
]

const projectNotificationForm = [
	{label: 'Somone mentions you', name: 'mentioned'},
	{label: 'Somone replies to your message', name: 'replies'},
	{label: 'Task status updated', name: 'taskUpdate'},
	{label: 'Task assigned to you', name: 'assigned'},
]

const salesNotificationForm = [
	{label: 'New product', name: 'newProduct'},
	{label: 'New order placed', name: 'newOrder'},
]

const Selector = ({ field, form, values, name }) => {

	const onSelected = (selected, setFieldValue, name) => {
		setFieldValue(name, selected)
	}

	return (
		<Segment 
			value={values[name]} 
			selectionType="multiple"
			onChange={selected => onSelected(selected, form.setFieldValue, field.name)}
		>
			<Segment.Item className="flex items-center justify-center" type="button" value="email">
				<HiMail className="text-xl" />
				<span className="hidden sm:block ltr:ml-2 rtl:mr-2">Email</span>
			</Segment.Item>
			<Segment.Item className="flex items-center justify-center" type="button" value="browser">
				<HiGlobeAlt className="text-xl" />
				<span className="hidden sm:block  ltr:ml-2 rtl:mr-2">Browser</span>
			</Segment.Item>
			<Segment.Item className="flex items-center justify-center" type="button" value="app">
				<HiOutlineDeviceMobile className="text-xl" />
				<span className="hidden sm:block  ltr:ml-2 rtl:mr-2">App</span>
			</Segment.Item>
		</Segment>
	)
}

const Rows = ({rows, validators, values}) => {
	return (
		rows.map((row, index) => (
			<FormRow 
				key={row.name} 
				name={row.name} 
				label={row.label}
				{...validators}
				border={!isLastChild(rows, index)}
			>
				<Field name={row.name}>
					{({ field, form }) => (
						<Selector 
							field={field} 
							form={form} 
							values={values}
							name={row.name}
						/>
					)}
				</Field>
			</FormRow>
		))
	)
}

const NotificationSetting = ({data = {
	news: [],
	accountActivity: [],
	signIn: [],
	reminders: [],
	mentioned: [],
	replies: [],
	taskUpdate: [],
	assigned: [],
	newProduct: [],
	newOrder: []
}}) => {

	const onFormSubmit = (values, setSubmitting) => {
		toast.push(
			<Notification title={"Notification setting updated"} type="success" />
		,{
			placement: 'top-center'
		})
		setSubmitting(false)
	}

	return (
		<Formik
			initialValues={data}
			enableReinitialize
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
								title="General Notification"
								desc="Select how you'll be notified when the following changes occur."
							/>
							<Rows 
								rows={generalNotificationForm}
								validators={validatorProps}
								values={values}
							/>
							<FormDesription
								className="mt-6"
								title="Project Notification"
								desc="Select how you'll be notified when the project related events happended."
							/>
							<Rows 
								rows={projectNotificationForm}
								validators={validatorProps}
								values={values}
							/>
							<FormDesription
								className="mt-6"
								title="Sales Notification"
								desc="Select how you'll be notified when any products & order updated."
							/>
							<Rows 
								rows={salesNotificationForm}
								validators={validatorProps}
								values={values}
							/>
							<div className="mt-4 ltr:text-right">
								<Button className="ltr:mr-2 rtl:ml-2" type="button" onClick={resetForm}>Reset</Button>
								<Button variant="solid" loading={isSubmitting} type="submit">
									{isSubmitting ? 'Updating' : 'Update'}
								</Button>
							</div>
						</FormContainer>
					</Form>
				)
			}}
		</Formik>
	)
}


export default NotificationSetting