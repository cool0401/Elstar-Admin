import React, { useState, useEffect } from 'react'
import { Input, Button, Select, Avatar, FormItem, FormContainer, hooks } from 'components/ui'
import NewTaskField from './NewTaskField'
import { Field, Form, Formik } from 'formik'
import { HiCheck } from 'react-icons/hi'
import { components } from 'react-select'
import { getMembers, putProject } from '../store/dataSlice'
import { toggleNewProjectDialog } from '../store/stateSlice'
import { useSelector, useDispatch } from 'react-redux'
import cloneDeep from 'lodash/cloneDeep'
import * as Yup from 'yup'

const { MultiValueLabel } = components

const { useUniqueId } = hooks

const CustomSelectOption = ({innerProps, label, data, isSelected}) => {
	return (
		<div 
			className={`flex items-center justify-between p-2 ${isSelected ? 'bg-gray-100 dark:bg-gray-500' : 'hover:bg-gray-50 dark:hover:bg-gray-600'}`} 
			{...innerProps}
		>
			<div className="flex items-center">
				<Avatar shape="circle" size={20} src={data.img} />
				<span className="ml-2 rtl:mr-2">{label}</span>
			</div>
			{isSelected && <HiCheck className="text-emerald-500 text-xl" />}
		</div>
	)
}

const CustomControlMulti = ({ children, data, ...props }) => {	 
	const { img } = data
	return (
		<MultiValueLabel {...props}>
			<div className="inline-flex items-center">
				<Avatar className="mr-2 rtl:ml-2" shape="circle" size={15} src={img} />
				{children}
			</div>
		</MultiValueLabel>
	)
}

const validationSchema = Yup.object().shape({
	title: Yup.string().min(3, 'Too Short!').required('Title required'),
	content: Yup.string().required('Title required'),
	assignees: Yup.array().min(1, 'Assignee required'),
	rememberMe: Yup.bool()
})

const NewProjectForm = () => {

	const dispatch = useDispatch()

	const members = useSelector((state) => state.projectList.data.allMembers)

	const newId = useUniqueId('project-')

	const [taskCount, setTaskCount] = useState({})

	useEffect(() => {
		dispatch(getMembers())
	}, [dispatch])

	const handleAddNewTask = (count) => {
		setTaskCount(count)
	}

	const onSubmit = (formValue, setSubmitting) => {

		setSubmitting(true)

		const { title, content, assignees } = formValue

		const { totalTask, completedTask } = taskCount

		const member = cloneDeep(assignees).map(assignee => {
			assignee.name = assignee.label
			return assignee
		})

		const values = {
			id: newId,
			name: title,
			desc: content,
			totalTask,
			completedTask,
			progression: (completedTask / totalTask) * 100 || 0,
			member
		}
		dispatch(putProject(values))
		dispatch(toggleNewProjectDialog(false))
	}

	return (
		<Formik
			initialValues={{ 
				title: '',
				content: '',
				assignees: [],
			}}
			validationSchema={validationSchema}
			onSubmit={(values, { resetForm, setSubmitting }) => {
				onSubmit(values, setSubmitting)
			}}
		>
			{({touched, errors, values, resetForm}) => (
				<Form>
					<FormContainer>
						<FormItem
							label="Title"
							invalid={errors.title && touched.title}
							errorMessage={errors.title}
						>
							<Field type="text" autoComplete="off" name="title" placeholder="Enter title" component={Input} />
						</FormItem>
						<FormItem
							label="Assignees"
							invalid={errors.assignees && touched.assignees}
							errorMessage={errors.assignees}
						>
							<Field name="assignees">
								{({ field, form }) => (
									<Select
										isMulti
										className="min-w-[120px]"
										components={{ 
											Option: CustomSelectOption,
											MultiValueLabel: CustomControlMulti
										}}
										field={field}
										form={form}
										options={members}
										value={values.assignees}
										onChange={member => {
											form.setFieldValue(field.name, member)
										}}
									/>
								)}
							</Field>
						</FormItem>
						<FormItem
							label="Content"
							invalid={errors.content && touched.content}
							errorMessage={errors.content}
						>
							<Field
								textArea
								type="text" 
								autoComplete="off" 
								name="content" 
								placeholder="Enter content" 
								component={Input} 
							/>
						</FormItem>
						<NewTaskField onAddNewTask={handleAddNewTask} />
						<Button block variant="solid" type="submit">Submit</Button>
					</FormContainer>
				</Form>
			)}
		</Formik>
	)
}

export default NewProjectForm