import React from 'react'
import { 
	Input,
	Button,
	Select,
	DatePicker,
	TimeInput,
	Checkbox,
	Radio,
	Upload,
	Switcher,
	Segment,
	FormItem,
	FormContainer
} from 'components/ui'
import { SegmentItemOption } from 'components/shared'
import { HiCheckCircle } from 'react-icons/hi'
import { Field, Form, Formik } from 'formik'
import CreatableSelect from 'react-select/creatable'
import * as Yup from 'yup'

const options = [
	{ value: 'foo', label: 'Foo' },
	{ value: 'bar', label: 'Bar' },
]

const segmentSelections = [
	{ value: 'Personal', desc: 'The plan for personal.'},
	{ value: 'Team', desc: 'The plan for team'},
	{ value: 'Business', desc: 'Talk to us for business plan.'}
]

const MIN_UPLOAD = 1
const MAX_UPLOAD = 2

const validationSchema = Yup.object().shape({
	input: Yup.string().min(3, 'Too Short!').max(20, 'Too Long!').required('Please input user name!'),
	select: Yup.string().required('Please select one!'),
	multipleSelect: Yup.array().min(1, 'At least one is selected!'),
	date: Yup.date().required('Date Required!').nullable(),
	time: Yup.date().required('Time Required!').nullable(),
	singleCheckbox: Yup.boolean().oneOf([true], 'You must tick this!'),
	multipleCheckbox: Yup.array().min(1, 'Select at least one option!'),
	radio: Yup.string().required('Please select one!'),
	switcher: Yup.boolean().oneOf([true], 'You must turn this on!'),
	upload: Yup.array().min(MIN_UPLOAD, 'At least one file uploaded!'),
	segment: Yup.array().min(1, 'Select at least one option!'),
})


const MixedFormControl = () => {

	const onSetFormFile = (form, field, files) => {
		form.setFieldValue(field.name, files)
	}

	const beforeUpload = (file, fileList) => {
		let valid = true

		const allowedFileType = ['image/jpeg', 'image/png']
		const MAX_FILE_SIZE = 500000

		if(fileList.length >= MAX_UPLOAD) {
			return `You can only upload ${MAX_UPLOAD} file(s)`
		}

		for (let f of file) {
			if (!allowedFileType.includes(f.type)) {
				valid = 'Please upload a .jpeg or .png file!'
			}

			if(f.size >= MAX_FILE_SIZE) {
				valid = 'Upload image cannot more then 500kb!'
			}
		}

		return valid
	}

	return (
			<div>
				<Formik
					enableReinitialize
					initialValues={{ 
						input: '',
						select: '', 
						multipleSelect: [],
						date: null,
						time: null,
						singleCheckbox: false,
						multipleCheckbox: [],
						radio: '',
						switcher: false,
						segment: [],
						upload: []
					}}
					validationSchema={validationSchema}
					onSubmit={(values, { setSubmitting }) => {
						console.log('values', values)
						setTimeout(() => {
							alert(JSON.stringify(values, null, 2))
							setSubmitting(false)
						}, 400)
					}}
				>
					{({values, touched, errors, resetForm }) => (
						<Form>
							<FormContainer>
								<FormItem
									label="Input"
									asterisk
									invalid={errors.input && touched.input}
									errorMessage={errors.input}
								>
									<Field type="text" name="input" placeholder="Input" component={Input} />
								</FormItem>
								<FormItem
									label="Select"
									asterisk
									invalid={errors.select && touched.select}
									errorMessage={errors.select}
								>
									<Field name="select">
										{({ field, form }) => (
											<Select
												field={field}
												form={form}
												options={options}
												value={options.filter(option => option.value === values.select)}
												onChange={option => form.setFieldValue(field.name, option.value)}
											/>
										)}
									</Field>
								</FormItem>
								<FormItem
									label="Multiple Select"
									asterisk
									invalid={Boolean(errors.multipleSelect && touched.multipleSelect)}
									errorMessage={errors.multipleSelect}
								>
									<Field name="multipleSelect">
										{({ field, form }) => (
											<Select
												componentAs={CreatableSelect}
												isMulti
												field={field}
												form={form}
												options={options}
												value={values.multipleSelect}
												onChange={option => {
													form.setFieldValue(field.name, option)
												}}
											/>
										)}
									</Field>
								</FormItem>
								<FormItem
									label="Date"
									asterisk
									invalid={errors.date && touched.date}
									errorMessage={errors.date}
								>
									<Field name="date" placeholder="Date">
										{({ field, form }) => (
											<DatePicker 
												field={field}
												form={form}
												value={field.value}
												onChange={(date) => {
													form.setFieldValue(field.name, date)
												}}
											/> 
										)}
									</Field>
								</FormItem>
								<FormItem
									label="Time"
									asterisk
									invalid={errors.time && touched.time}
									errorMessage={errors.time}
								>
									<Field name="time" placeholder="Date">
										{({ field, form }) => (
											<TimeInput
												field={field}
												form={form}
												value={field.value} 
												onChange={time => {
													form.setFieldValue(field.name, time)
												}}
											/>
										)}
									</Field>
								</FormItem>
								<FormItem
									label="Upload"
									asterisk
									invalid={Boolean(errors.upload && touched.upload)}
									errorMessage={errors.upload}
								>
									<Field name="upload">
										{({ field, form }) => (
											<Upload 
												onChange={files => onSetFormFile(form, field, files)}
												onFileRemove={files => onSetFormFile(form, field, files)}
												beforeUpload={beforeUpload}
												fileList={values.upload}
											/>
										)}
									</Field>
								</FormItem>
								<FormItem
									label="Multiple Checkbox"
									asterisk
									invalid={Boolean(errors.multipleCheckbox && touched.multipleCheckbox)}
									errorMessage={errors.multipleCheckbox}
								>
									<Field name="multipleCheckbox">
										{({ field, form }) => (
											<>
												<Checkbox.Group
													onChange={options => form.setFieldValue(field.name, options) } 
													value={values.multipleCheckbox}
												>
													<Checkbox name={field.name} value="Apple">Apple </Checkbox>
													<Checkbox name={field.name} value="Banana">Banana </Checkbox>
													<Checkbox name={field.name} value="Lemon">Lemon </Checkbox>
												</Checkbox.Group>
											</>
										)}
									</Field>
								</FormItem>
								<FormItem
									label="Radio"
									asterisk
									invalid={errors.radio && touched.radio}
									errorMessage={errors.radio}
								>
									<Field name="radio">
										{({ field, form }) => (
											<Radio.Group 
												value={values.radio} 
												onChange={val => form.setFieldValue(field.name, val) } 
											>
												<Radio value={1}>Paypal</Radio>
												<Radio value={2}>Stripe</Radio>
											</Radio.Group>
										)}
									</Field>
								</FormItem>
								<FormItem
									asterisk
									label="Single Checkbox"
									invalid={errors.singleCheckbox && touched.singleCheckbox} 
									errorMessage={errors.singleCheckbox} 
								>
									<Field 
										name="singleCheckbox" 
										component={Checkbox} 
										children="I agree to the terms and conditions" 
									/>
								</FormItem>
								<FormItem
									asterisk
									label="Switcher"
									invalid={errors.switcher && touched.switcher} 
									errorMessage={errors.switcher} 
								>
									<div>
										<Field 
											name="switcher" 
											component={Switcher}
										/>
									</div>
								</FormItem>
								<FormItem
									label="Segment"
									asterisk
									invalid={Boolean(errors.segment && touched.segment)}
									errorMessage={errors.segment}
								>
									<Field name="segment">
										{({ field, form }) => (
											<Segment 
												className="w-full"
												selectionType="multiple"
												value={values.segment} 
												onChange={val => form.setFieldValue(field.name, val)}
											>
												<div className="grid grid-cols-3 gap-4 w-full">
													{segmentSelections.map((segment) => (
														<Segment.Item value={segment.value} key={segment.value}>
															{
																({ref, active, onSegmentItemClick, disabled}) => {
																	return (
																		<div className="text-center">
																			<SegmentItemOption
																				hoverable
																				ref={ref}
																				active={active}
																				disabled={disabled}
																				defaultGutter={false}
																				onSegmentItemClick={onSegmentItemClick}
																				className="relative min-h-[80px] w-full"
																				customCheck={
																					<HiCheckCircle 
																						className="text-indigo-600 absolute top-2 right-2 text-lg" 
																					/>
																				}
																			>
																				<div className="flex flex-col items-start mx-4">
																					<h6>{segment.value}</h6>
																					<p>{segment.desc}</p>
																				</div>
																			</SegmentItemOption>
																		</div>
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
								<FormItem>
									<Button type="reset" className="ltr:mr-2 rtl:ml-2" onClick={resetForm}>Reset</Button>
									<Button variant="solid" type="submit">Submit</Button>
								</FormItem>
							</FormContainer>
						</Form>
					)
				}
			</Formik>
		</div>
	)
}

export default MixedFormControl
