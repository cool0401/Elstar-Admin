import React from 'react'
import { AdaptableCard, RichTextEditor } from 'components/shared'
import { Input, FormItem } from 'components/ui'
import { Field } from 'formik'

export const categories = [
	{ label: 'Bags', value: 'bags'},
	{ label: 'Cloths', value: 'cloths'},
	{ label: 'Devices', value: 'devices'},
	{ label: 'Shoes', value: 'shoes'},
	{ label: 'Watches', value: 'watches'}
]

const BasicInformationFields = props => {

	const { touched, errors } = props

	return (
		<AdaptableCard className="mb-4" divider>
			<h5>Basic Information</h5>
			<p className="mb-6">Section to config basic product information</p>
			<FormItem
				label="Product Name"
				invalid={errors.name && touched.name}
				errorMessage={errors.name}
			>
				<Field 
					type="text" 
					autoComplete="off" 
					name="name" 
					placeholder="Name" 
					component={Input}
				/>
			</FormItem>
			<FormItem
				label="Code"
				invalid={errors.productCode && touched.productCode}
				errorMessage={errors.productCode}
			>
				<Field 
					type="text" 
					autoComplete="off" 
					name="productCode" 
					placeholder="Code" 
					component={Input}
				/>
			</FormItem>
			<FormItem
				label="Description"
				labelClass="!justify-start"
				invalid={errors.description && touched.description}
				errorMessage={errors.description}
			>
				<Field name="description">
					{({ field, form }) => (
						<RichTextEditor
							value={field.value} 
							onChange={val => form.setFieldValue(field.name, val)}
						/>
					)}
				</Field>
			</FormItem>
		</AdaptableCard>
	)
}

export default BasicInformationFields