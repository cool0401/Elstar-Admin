import React from 'react'
import { Input, Button, FormItem, FormContainer } from 'components/ui'
import { Formik, Field, Form } from 'formik'
import { useSelector, useDispatch } from 'react-redux'
import requiredFieldValidation from 'utils/requiredFieldValidation'
import { closeDialog } from './store/stateSlice'
import { updateColumns, updateOrdered } from './store/dataSlice'
import cloneDeep from 'lodash/cloneDeep'

const AddNewColumnContent = () => {

	const dispatch = useDispatch()
	
	const columns = useSelector(state => state.scrumBoard.data.columns)
	const ordered = useSelector(state => state.scrumBoard.data.ordered)

	const onFormSubmit = (title) => {
		const data = cloneDeep(columns)
		data[title ? title : 'Untitled Board'] = []
		const newOrdered = [...ordered, ...[title ? title : 'Untitled Board']]
		let newColumns = {}
		newOrdered.forEach(elm => {
			newColumns[elm] = data[elm]
		})
		
		dispatch(updateColumns(newColumns))
		dispatch(updateOrdered(newOrdered))
		dispatch(closeDialog())
	}

	return (
		<div>
			<h5>Add New Column</h5>
			<div className="mt-8">
				<Formik
					initialValues={{ title: '' }}
					onSubmit={({title}) => onFormSubmit(title)}
				>
					{({ errors, touched }) => (
						<Form>
							<FormContainer layout="inline">
								<FormItem 
									label="Column title" 
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
