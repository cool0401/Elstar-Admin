```jsx
import React, { useState } from 'react'
import { Input, Button, DatePicker, FormItem, FormContainer, InputGroup } from 'components/ui'
import { Formik, Field, Form } from 'formik'

const options = [
	{ label: 'Small', value: 'sm' },
	{ label: 'Medium', value: 'md' },
	{ label: 'Large', value: 'lg' },
]

const Sizes = () => {

	const [size, setSize] = useState('md')

	const onSizeSelect = val => {
		setSize(val)
	}

    return (
		<div>
			<InputGroup className="mb-6">
				{
					options.map(opt => (
						<Button
							key={opt.value}
							onClick={() => onSizeSelect(opt.value)}
							active={size === opt.value}
						>
							{opt.label}
						</Button>
					))
				}
			</InputGroup>
			<Formik
				initialValues={{
					name: '',
					email: '',
					date: ''
				}}
				onSubmit={async (values) => {
					await new Promise((r) => setTimeout(r, 500))
					alert(JSON.stringify(values, null, 2))
				}}
			>
				<Form>
					<FormContainer size={size}>
						<FormItem label="Name">
							<Field 
								type="text" 
								name="name"
								placeholder="Please enter your name" 
								component={Input} 
							/>
						</FormItem>
						<FormItem label="Email">
							<Field 
								type="email" 
								name="email"
								placeholder="Please enter your email" 
								component={Input} 
							/>
						</FormItem>
						<FormItem label="Date" >
                            <Field name="date">
                                {({ field, form }) => (
                                    <DatePicker 
                                        field={field}
                                        form={form}
                                        value={field.value}
										placeholder="Select Date"
                                        onChange={(date) => {
                                            form.setFieldValue(field.name, date)
                                        }}
                                    /> 
                                )}
                            </Field>
                        </FormItem>
						<FormItem>
							<Button type="submit">Submit</Button>
						</FormItem>
					</FormContainer>
				</Form>
			</Formik>
		</div>
	)
}

export default Sizes
```