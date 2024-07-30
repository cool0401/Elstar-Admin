import React from 'react'
import { FormItem, FormContainer, Segment, Button } from 'components/ui'
import { Field, Form, Formik } from 'formik'
import { SegmentItemOption } from 'components/shared'
import { 
	HiOutlineBookOpen, 
	HiOutlineClock, 
	HiOutlineAdjustments,
	HiOutlineSparkles,
	HiArrowSmLeft
} from 'react-icons/hi'

const roles = [
	{ value: '0', label: 'Start project from scratch', icon: <HiOutlineBookOpen /> },
	{ value: '1', label: 'Automate time consuming tasks', icon: <HiOutlineClock /> },
	{ value: '2', label: 'Enhance current workflow', icon: <HiOutlineAdjustments /> },
	{ value: '3', label: 'Others', icon: <HiOutlineSparkles /> },
]


const Step4 = ({ onNext, onBack }) => {
	
	const onSetFieldValue = (form, field, val) => {
		form.setFieldValue(field.name, val[0])
		onNext?.()
	}

	return (
		<div className="text-center">
			<h3 className="mb-2">What is your main objective with Elstar?</h3>
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
													<div className="w-full">
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
																				className="mb-4 bg-white dark:bg-gray-800"
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

export default Step4