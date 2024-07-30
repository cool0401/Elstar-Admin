import React, { useState, useRef, forwardRef } from 'react'
import { HiOutlineFilter, HiOutlineSearch } from 'react-icons/hi'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts, setFilterData, initialTableData } from '../store/dataSlice'
import { 
    Input,
    Button,
    Checkbox,
    Radio,
    FormItem,
    FormContainer,
	Drawer
} from 'components/ui'
import { Field, Form, Formik } from 'formik'

const FilterForm = forwardRef(({onSubmitComplete}, ref) => {

	const dispatch = useDispatch()

	const filterData = useSelector((state) => state.salesProductList.data.filterData)
	const sortedColumn = useSelector((state) => state.salesProductList.state.sortedColumn)
	
	const handleSubmit = values => {
		onSubmitComplete?.()
		dispatch(setFilterData(values))
		dispatch(getProducts(initialTableData))
		sortedColumn?.clearSortBy?.()
	}

	return (
		<Formik
			innerRef={ref}
			enableReinitialize
			initialValues={filterData}
			onSubmit={(values) => {
				handleSubmit(values)
			}}
		>
			{({values, touched, errors }) => (
				<Form>
					<FormContainer>
						<FormItem
							invalid={errors.name && touched.name}
							errorMessage={errors.name}
						>
							<h6 className="mb-4">Included text</h6>
							<Field 
								type="text" 
								autoComplete="off" 
								name="name" 
								placeholder="Keyword" 
								component={Input}
								prefix={<HiOutlineSearch className="text-lg" />} 
							/>
						</FormItem>
						<FormItem
							invalid={errors.category && touched.category}
							errorMessage={errors.category}
						>
							<h6 className="mb-4">Product Category</h6>
							<Field name="category">
								{({ field, form }) => (
									<>
										<Checkbox.Group
											vertical
											onChange={options => form.setFieldValue(field.name, options) } 
											value={values.category}
										>
											<Checkbox className="mb-3" name={field.name} value="bags">Bags </Checkbox>
											<Checkbox className="mb-3" name={field.name} value="cloths">Cloths </Checkbox>
											<Checkbox className="mb-3" name={field.name} value="devices">Devices </Checkbox>
											<Checkbox className="mb-3" name={field.name} value="shoes">Shoes </Checkbox>
											<Checkbox name={field.name} value="watches">Watches </Checkbox>
										</Checkbox.Group>
									</>
								)}
							</Field>
						</FormItem>
						<FormItem
							invalid={errors.status && touched.status}
							errorMessage={errors.status}
						>
							<h6 className="mb-4">Product Category</h6>
							<Field name="status">
								{({ field, form }) => (
									<>
										<Checkbox.Group
											vertical
											onChange={options => form.setFieldValue(field.name, options) } 
											value={values.status}
										>
											<Checkbox className="mb-3" name={field.name} value={0}>In Stock </Checkbox>
											<Checkbox className="mb-3" name={field.name} value={1}>Limited </Checkbox>
											<Checkbox className="mb-3" name={field.name} value={2}>Out Of Stock </Checkbox>
										</Checkbox.Group>
									</>
								)}
							</Field>
						</FormItem>
						<FormItem
							invalid={errors.productStatus && touched.productStatus}
							errorMessage={errors.productStatus}
						>
							<h6 className="mb-4">Product Status</h6>
							<Field name="productStatus">
								{({ field, form }) => (
									<Radio.Group
										vertical
										value={values.productStatus} 
										onChange={val => form.setFieldValue(field.name, val) } 
									>
										<Radio value={0}>Published</Radio>
										<Radio value={1}>Disabled</Radio>
										<Radio value={2}>Archive</Radio>
									</Radio.Group>
								)}
							</Field>
						</FormItem>
					</FormContainer>
				</Form>
			)}
		</Formik>
	)
})

const DrawerFooter = ({onSaveClick, onCancel}) => {
	return (
		<div className="text-right w-full">
			<Button size="sm" className="mr-2" onClick={onCancel}>Cancel</Button>
			<Button size="sm" variant="solid" onClick={onSaveClick}>Query</Button>
		</div>
	)
}

const ProductFilter = () => {

	const formikRef = useRef()

	const [isOpen, setIsOpen] = useState(false)

	const openDrawer = () => {
		setIsOpen(true)
	}

	const onDrawerClose = () => {
		setIsOpen(false)
	}

	const formSubmit = () => {
		formikRef.current?.submitForm()
	}

	return (
		<>
			<Button 
				size="sm" 
				className="block md:inline-block ltr:md:ml-2 rtl:md:mr-2 md:mb-0 mb-4"
				icon={<HiOutlineFilter />}
				onClick={() => openDrawer()}
			>
				Filter
			</Button>
			<Drawer
				title="Filter"
				isOpen={isOpen}
				onClose={onDrawerClose}
				onRequestClose={onDrawerClose}
				footer={<DrawerFooter onCancel={onDrawerClose} onSaveClick={formSubmit} />}
			>
				<FilterForm ref={formikRef} onSubmitComplete={onDrawerClose}/>
			</Drawer>
		</>
	)
}

export default ProductFilter