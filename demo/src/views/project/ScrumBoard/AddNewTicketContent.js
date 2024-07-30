import React from 'react'
import { Input, Button, FormItem, FormContainer } from 'components/ui'
import { Formik, Field, Form } from 'formik'
import { useSelector, useDispatch } from 'react-redux'
import { updateColumns } from './store/dataSlice'
import { closeDialog, setSelectedBoard } from './store/stateSlice'
import cloneDeep from 'lodash/cloneDeep'
import requiredFieldValidation from 'utils/requiredFieldValidation'
import { createCardObject } from './utils'

const AddNewColumnContent = () => {

	const dispatch = useDispatch()

	const columns = useSelector(state => state.scrumBoard.data.columns)
	const board = useSelector(state => state.scrumBoard.state.board)

	const onFormSubmit = (title) => {
		const data = columns
		let newCard = createCardObject()
		newCard.name = title ? title : 'Untitled Card'

		const newData = cloneDeep(data)
		newData[board].push(newCard)
		dispatch(updateColumns(newData))
		dispatch(closeDialog())
		dispatch(setSelectedBoard(''))
	}

	return (
		<div>
			<h5>Add New Ticket</h5>
			<div className="mt-8">
				<Formik
					initialValues={{ title: '' }}
					onSubmit={({title}) => onFormSubmit(title)}
				>
					{({ errors, touched }) => (
						<Form>
							<FormContainer layout="inline">
								<FormItem 
									label="Ticket title" 
									invalid={errors.title && touched.title}
									errorMessage={errors.title}
								>
									<Field 
										type="text" 
										name="title"
										placeholder="Please enter ticket title" 
										component={Input}
										validate={value => requiredFieldValidation(value, 'Ticket title is required!')}
									/>
								</FormItem>
								<FormItem>
									<Button variant="solid" type="submit">Add</Button>
								</FormItem>
							</FormContainer>
						</Form>
					)}
				</Formik>
			</div>
		</div>
	)
}

export default AddNewColumnContent
