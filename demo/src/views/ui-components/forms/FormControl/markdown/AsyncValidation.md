```jsx
import React, {useState} from 'react'
import { Input, Button, Spinner, FormItem, FormContainer } from 'components/ui'
import { Formik, Form, Field } from 'formik'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const AsyncValidation = () => {

	const [validating, setValidating] = useState(false)

	const validateAsync = async (value, form) => {
		const { touched, errors } = form
		if(!value) {
			return
		}
		if(errors.userName && !touched.userName) {
			return errors.userName
		}
		setValidating(true)
		await sleep(2000)
		if (value === 'Adam') {
			setValidating(false)
			return
		}
		setValidating(false)
		return 'This User name has been taken'
	}

	return (
		<div>
			<Formik
				initialValues={{ userName: '', }}
				onSubmit={(values, { resetForm, setSubmitting }) => {
					setTimeout(() => {
						alert(JSON.stringify(values, null, 2))
						setSubmitting(false)
						resetForm()
					}, 400)
				}}
			>
				{({ errors, ...formProps}) => (
					<Form>
						<FormContainer>
							<FormItem
								label="Check valid username"
								invalid={errors.userName && errors.userName.length > 0}
								errorMessage={errors.userName}
							>
								<Field 
									type="text" 
									name="userName"
									autoComplete="off"
									placeholder="User Name" 
									suffix={<Spinner className={!validating && 'hidden'} />}
									validate={values => validateAsync(values, {errors, ...formProps})}
									component={Input} 
								/>
							</FormItem>
							<FormItem>
								<Button variant="solid" type="submit">Submit</Button>
							</FormItem>
						</FormContainer>
					</Form>
				)}
			</Formik>
		</div>
	)
}

export default AsyncValidation
```