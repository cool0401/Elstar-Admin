import React from 'react'
import { 
	Input, 
	Avatar,
	Upload,
	Button,
	Select,
	Switcher,
	Notification, 
	toast,
	FormContainer 
} from 'components/ui'
import FormDesription from './FormDesription'
import FormRow from './FormRow'
import { Field, Form, Formik } from 'formik'
import { components } from 'react-select'
import { 
	HiOutlineUserCircle, 
	HiOutlineMail, 
	HiOutlineBriefcase, 
	HiOutlineUser, 
	HiCheck,
	HiOutlineGlobeAlt
} from 'react-icons/hi'
import * as Yup from 'yup'

const { Control } = components

const validationSchema = Yup.object().shape({
	name: Yup.string().min(3, 'Too Short!').max(12, 'Too Long!').required('User Name Required'),
	email: Yup.string().email('Invalid email').required('Email Required'),
	title: Yup.string(),
	avatar: Yup.string(),
	lang:  Yup.string(),
	timeZone:  Yup.string(),
	syncData: Yup.bool()
})

const langOptions = [
	{ value: 'en', label: 'English (US)', imgPath: '/img/countries/us.png' },
	{ value: 'ch', label: '中文', imgPath: '/img/countries/cn.png' },
	{ value: 'jp', label: '日本语', imgPath: '/img/countries/jp.png' },
	{ value: 'fr', label: 'French', imgPath: '/img/countries/fr.png' }
]

const CustomSelectOption = ({innerProps, label, data, isSelected}) => {
	return (
		<div 
			className={`flex items-center justify-between p-2 ${isSelected ? 'bg-gray-100 dark:bg-gray-500' : 'hover:bg-gray-50 dark:hover:bg-gray-600'}`} 
			{...innerProps}
		>
			<div className="flex items-center">
				<Avatar shape="circle" size={20} src={data.imgPath} />
				<span className="ml-2 rtl:mr-2">{label}</span>
			</div>
			{isSelected && <HiCheck className="text-emerald-500 text-xl" />}
		</div>
	)
}

const CustomControl = ({ children, ...props }) => {	 
	const selected = props.getValue()[0]
	return (
		<Control {...props}>
			{selected && <Avatar className="ltr:ml-4 rtl:mr-4" shape="circle" size={18} src={selected.imgPath} />}
			{children}
		</Control>
	)
}

const Profile = ({data}) => {

	const onSetFormFile = (form, field, file) => {
		form.setFieldValue(field.name, URL.createObjectURL(file[0]))
	}

	const onFormSubmit = (values, setSubmitting) => {
		toast.push(
			<Notification title={"Profile updated"} type="success" />
		,{
			placement: 'top-center'
		})
		setSubmitting(false)
	}

	return (
		<Formik
			initialValues={data}
			enableReinitialize
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
								title="General"
								desc="Basic info, like your name and address that will displayed in public"
							/>
							<FormRow name="name" label="Name" {...validatorProps} >
								<Field 
									type="text" 
									autoComplete="off" 
									name="name" 
									placeholder="Name" 
									component={Input}
									prefix={<HiOutlineUserCircle className="text-xl" />}
								/>
							</FormRow>
							<FormRow name="email" label="Email" {...validatorProps} >
								<Field 
									type="email"
									autoComplete="off"
									name="email"
									placeholder="Email"
									component={Input}
									prefix={<HiOutlineMail className="text-xl" />}
								/>
							</FormRow>
							<FormRow name="avatar" label="Avatar" {...validatorProps} >
								<Field name="avatar">
									{({ field, form }) => {
									const avatarProps = field.value ? { src: field.value } : {}
									return (
										<Upload
											className="cursor-pointer"
											onChange={files => onSetFormFile(form, field, files)}
											onFileRemove={files => onSetFormFile(form, field, files)}
											showList={false}
											uploadLimit={1}
										>
											<Avatar 
												className="border-2 border-white dark:border-gray-800 shadow-lg"
												size={60} 
												shape="circle"
												icon={<HiOutlineUser />}
												{...avatarProps}  
											/>
										</Upload>
									)
									}}
								</Field>
							</FormRow>
							<FormRow name="title" label="Title" {...validatorProps} border={false} >
								<Field
									type="text" 
									autoComplete="off" 
									name="title" 
									placeholder="Title" 
									component={Input}
									prefix={<HiOutlineBriefcase className="text-xl" />}
								/>
							</FormRow>
							<FormDesription
								className="mt-8"
								title="Preferences"
								desc="Your personalized preference displayed in your account"
							/>
							<FormRow name="lang" label="Language" {...validatorProps} >
								<Field name="lang">
									{({ field, form }) => (
									<Select
										field={field}
										form={form}
										options={langOptions}
										components={{ 
										Option: CustomSelectOption, 
										Control: CustomControl 
										}}
										value={langOptions.filter(option => option.value === values?.lang)}
										onChange={option => form.setFieldValue(field.name, option.value)}
									/>
									)}
								</Field>
							</FormRow>
							<FormRow name="timeZone" label="Time Zone" {...validatorProps} >
								<Field
									type="text"
									readOnly
									autoComplete="off" 
									name="timeZone" 
									placeholder="Time Zone" 
									component={Input}
									prefix={<HiOutlineGlobeAlt className="text-xl" />}
								/>
							</FormRow>
							<FormRow name="syncData" label="Sync Data" {...validatorProps} border={false} >
								<Field name="syncData" component={Switcher} />
							</FormRow>
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

	export default Profile