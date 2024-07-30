```jsx
import React from 'react'
import { Field, Form, Formik } from 'formik'
import { Input, Button, FormItem, FormContainer } from 'components/ui'

function validateEmail(value) {
	let error
	if (!value) {
		error = 'Required'
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
		error = 'Invalid email address'
	}
	return error
}

function validateUsername(value) {
	if (!value) {
		return 'Required'
	}
	if (value === 'admin') {
		return 'Nice try!'
	}
	return
}


const FieldValidation = () => {
	return (
		<div>
			<Formik
				initialValues={{
					username: '',
					email: '',
				}}
				onSubmit={values => {
					console.log(values)
				}}
			>
				{({ errors, touched, isValidating }) => (
					<Form>
						<FormContainer>
							<FormItem
								label="Email"
								invalid={errors.email && touched.email}
								errorMessage={errors.email}
							>
								<Field 
									type="email"
									name="email" 
									placeholder="Email" 
									component={Input}
									validate={validateEmail}
								/>
							</FormItem>
							<FormItem
								label="User Name"
								invalid={errors.username && touched.username}
								errorMessage={errors.username}
							>
								<Field 
									type="text"
									name="username" 
									placeholder="User Name" 
									component={Input} 
									validate={validateUsername}
								/>
							</FormItem>
							<FormItem>
								<Button type="submit" variant="solid">Submit</Button>
							</FormItem>
						</FormContainer>
					</Form>
				)}
			</Formik>
		</div>
	)
}

export default FieldValidation
```