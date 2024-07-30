import React from 'react'
import { AdaptableCard } from 'components/shared'
import { Input, FormItem } from 'components/ui'
import NumberFormat from 'react-number-format'
import { Field } from 'formik'

const PriceInput = props => {
	return <Input {...props} value={props.field.value} prefix="$" />
}

const NumberInput = props => {
	return <Input {...props} value={props.field.value} />
}

const TaxRateInput = props => {
	return <Input {...props} value={props.field.value} />
}

const NumberFormatInput = ({onValueChange, ...rest}) => {
	return (
		<NumberFormat 
			customInput={Input}
			type="text"
			onValueChange={onValueChange}
			autoComplete="off"
			{...rest}
		/>
	)
}

const PricingFields = props => {

	const { touched, errors } = props

	return (
		<AdaptableCard className="mb-4" divider>
			<h5>Pricing</h5>
			<p className="mb-6">Section to config product sales information</p>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				<div className="col-span-1">
					<FormItem
						label="SKU"
						invalid={errors.stock && touched.stock}
						errorMessage={errors.stock}
					>
						<Field name="stock">
							{({ field, form }) => {
								return (
									<NumberFormatInput
										form={form}
										field={field}
										placeholder="Stock"
										customInput={NumberInput}
										onValueChange={e => {
											form.setFieldValue(field.name, e.value)
										}}
									/>
								) 
							}}
						</Field>
					</FormItem>
				</div>
				<div className="col-span-1">
					<FormItem
						label="Price"
						invalid={errors.price && touched.price}
						errorMessage={errors.price}
					>
						<Field name="price">
							{({ field, form }) => {
								return (
									<NumberFormatInput
										form={form}
										field={field}
										placeholder="Price"
										customInput={PriceInput}
										onValueChange={e => {
											form.setFieldValue(field.name, e.value)
										}}
									/>
								) 
							}}
						</Field>
					</FormItem>
				</div>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				<div className="col-span-1">
					<FormItem
						label="Bulk Discount Price"
						invalid={errors.bulkDiscountPrice && touched.bulkDiscountPrice}
						errorMessage={errors.bulkDiscountPrice}
					>
						<Field name="bulkDiscountPrice">
							{({ field, form }) => {
								return (
									<NumberFormatInput
										form={form}
										field={field}
										placeholder="Bulk Discount Price"
										customInput={PriceInput}
										onValueChange={e => {
											form.setFieldValue(field.name, e.value)
										}}
									/>
								) 
							}}
						</Field>
					</FormItem>
				</div>
				<div className="col-span-1">
					<FormItem
						label="Tax Rate(%)"
						invalid={errors.taxRate && touched.taxRate}
						errorMessage={errors.taxRate}
					>
						<Field name="taxRate">
							{({ field, form }) => {
								return (
									<NumberFormatInput
										form={form}
										field={field}
										placeholder="Tax Rate"
										customInput={TaxRateInput}
										isAllowed={({ floatValue }) => floatValue <= 100}
										onValueChange={e => {
											form.setFieldValue(field.name, e.value)
										}}
									/>
								) 
							}}
						</Field>
					</FormItem>
				</div>
			</div>
		</AdaptableCard>
	)
}

export default PricingFields