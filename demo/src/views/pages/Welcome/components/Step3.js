import React from 'react'
import { FormItem, FormContainer, Segment, Button } from 'components/ui'
import { Field, Form, Formik } from 'formik'
import { SegmentItemOption } from 'components/shared'
import { 
	HiOutlineCode, 
	HiOutlineCube, 
	HiOutlinePencil, 
	HiOutlineShieldCheck,
	HiOutlineAcademicCap,
	HiOutlineSparkles,
	HiArrowSmLeft
} from 'react-icons/hi'

const roles = [
	{ value: 'softwareEngineer', label: 'Software Engineer', icon: <HiOutlineCode /> },
	{ value: 'productManager', label: 'Product Manager', icon: <HiOutlineCube /> },
	{ value: 'designer', label: 'Designer', icon: <HiOutlinePencil /> },
	{ value: 'qaTester', label: 'QA Tester', icon: <HiOutlineShieldCheck /> },
	{ value: 'skateHolder', label: 'Skate Holder', icon: <HiOutlineAcademicCap /> },
	{ value: 'other', label: 'Others', icon: <HiOutlineSparkles /> },
]

const Step3 = ({ onNext, onBack }) => {

	const onSetFieldValue = (form, field, val) => {
		form.setFieldValue(field.name, val[0])
		onNext?.()
	}

	return (
		<div className="text-center">
			<h3 className="mb-2">What is your role in the organization?</h3>
			<div className="mt-8 max-w-[600px] lg:min-w-[600px] mx-auto">
				<Formik
					initialValues={{
						role: ''
					}}
				>
					{({ touched, errors }) => {
						return (
							<Form>
								<FormContainer>
									<FormItem
										invalid={errors.role && touched.role}
										errorMessage={errors.role}
									>
										<Field name="role">
											{({ field, form }) => (
												<Segment value={[field.value]} onChange={val => onSetFieldValue(form, field, val)}>
													<div className="grid grid-cols-2 gap-4 w-full">
														{roles.map((item) => (
															<Segment.Item value={item.value} key={item.value} disabled={item.disabled}>
																{
																	({ref, active, onSegmentItemClick, disabled}) => {
																		return (
																			<SegmentItemOption
																				hoverable
																				ref={ref}
																				active={active}
																				disabled={disabled}
																				onSegmentItemClick={onSegmentItemClick}
																				className="bg-white dark:bg-gray-800"
																			>
																				<div className="flex items-center gap-3">
																					<span className="text-2xl">{item.icon}</span>
																					<h6>{item.label}</h6>
																				</div>
																			</SegmentItemOption>
																		)
																	}
																}
															</Segment.Item>
														))}
													</div>
												</Segment>
											)}
										</Field>
									</FormItem>
									<Button
										variant="plain" 
										onClick={onBack}
										type="button"
										icon={<HiArrowSmLeft />}
										block
									>
										Back
									</Button>
								</FormContainer>
							</Form>
						)
					}}
				</Formik>
			</div>
		</div>
	)
}

export default Step3