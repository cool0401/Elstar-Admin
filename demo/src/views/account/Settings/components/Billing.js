import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import { Button, Tag, Notification, toast, FormContainer, Dialog } from 'components/ui'
import FormDesription from './FormDesription'
import FormRow from './FormRow'
import CreditCardForm from './CreditCardForm'
import BillingHistory from './BillingHistory'
import { Field, Form, Formik } from 'formik'
import { HiPlus } from 'react-icons/hi'
import isLastChild from 'utils/isLastChild'
import isEmpty from 'lodash/isEmpty'
import { apiGetAccountSettingBillingData } from 'services/AccountServices'

const months = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const Billing = () => {

	const [data, setData] = useState({})
	const [selectedCard, setSelectedCard] = useState({})
	const [ccDialogType, setCcDialogType] = useState('')

	const fetchData = async () => {
		const response = await apiGetAccountSettingBillingData()
		setData(response.data)
	}

	const onFormSubmit = (_, setSubmitting) => {
		toast.push(
			<Notification title={"Billing information updated"} type="success" />
		,{
			placement: 'top-center'
		})
		setSubmitting(false)
	}

	const onCreditCardDialogClose = () => {
		setCcDialogType('')
		setSelectedCard({})
	}

	const onEditCreditCard = (card, type) => {
		setCcDialogType(type)
		setSelectedCard(card)
	}

	const onCardUpdate = (cardValue, form, field) => {
		let paymentMethodsValue = form.values[field.name]

		if(cardValue.primary) {
			paymentMethodsValue.forEach(card => {
				card.primary = false	
			})
		}

		if(!paymentMethodsValue.some(card => card.cardId === cardValue.cardId)) {
			paymentMethodsValue.push(cardValue)
		}

		paymentMethodsValue = paymentMethodsValue.map(card => {
			if (card.cardId === cardValue.cardId) {
				card = {...card, ...cardValue}
			}
			return card
		})

		let cardTemp = {}
		paymentMethodsValue = paymentMethodsValue.filter(card => {
			if(card.primary) {
				cardTemp = card
			}
			return !card.primary
		})
		paymentMethodsValue = [...[cardTemp], ...paymentMethodsValue]
		form.setFieldValue(field.name, paymentMethodsValue)
		onCreditCardDialogClose()
	}

	const onRedirect = (url) => {
		let win = window.open(url, '_blank')
		win.focus()
	}

	useEffect(() => {
		if(isEmpty(data)) {
			fetchData()
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<Formik
			initialValues={data}
			enableReinitialize
			onSubmit={(values, { setSubmitting }) => {
				setSubmitting(true)
				setTimeout(() => {
					onFormSubmit(values, setSubmitting)
				}, 1000)
			}}
		>
			{({values, touched, errors, isSubmitting, resetForm}) => {
				const validatorProps = {touched, errors}
				return (
					<Form>
						<FormContainer>
							<FormDesription 
								title="Payment Method"
								desc="You can update your cards information here"
							/>
							<FormRow name="paymentMethods" alignCenter={false} label="Credit Cards" {...validatorProps} >
								<div className="rounded-lg border border-gray-200 dark:border-gray-600">
									{values?.paymentMethods?.map((card, index) => (
										<div 
											key={card.cardId} 
											className={classNames(
												'flex items-center justify-between p-4',
												!isLastChild(values.paymentMethods, index) && 'border-b border-gray-200 dark:border-gray-600'
											)}
										>
											<div className="flex items-center">
												{card.cardType === 'VISA' && <img src="/img/others/img-8.png" alt="visa" />}
												{card.cardType === 'MASTER' && <img src="/img/others/img-9.png" alt="master" />}
												<div className="ml-3 rtl:mr-3">
													<div className="flex items-center">
														<div className="text-gray-900 dark:text-gray-100 font-semibold">
															{card.cardHolderName} •••• {card.last4Number}
														</div>
														{card.primary && (
															<Tag className="bg-sky-100 text-sky-600 dark:bg-sky-500/20 dark:text-sky-100 rounded-md border-0 mx-2">
																<span className="capitalize"> Primary </span>
															</Tag>
														)}
													</div>
													<span>Expired {months[parseInt(card.expMonth) - 1]} 20{card.expYear}</span>
												</div>
											</div>
											<div className="flex">
												<Button
													size="sm" 
													onClick={() => onEditCreditCard(card, 'EDIT')}
													type="button"
												>
													Edit
												</Button>
											</div>
										</div>
									))}
								</div>
								<div className="mt-2">
									<Button 
										type="button" 
										variant="plain" 
										size="sm" 
										icon={<HiPlus className="text-lg" />}
										onClick={() => onEditCreditCard({}, 'NEW')}
									>
										<span className="font-semibold">Add new card</span>
									</Button>
								</div>
							</FormRow>
							<FormRow 
								border={false}
								name="otherMethod" 
								alignCenter={false} 
								label="Other payment methods" 
								{...validatorProps} 
							>
								<div className="rounded-lg border border-gray-200 dark:border-gray-600">
									{values?.otherMethod?.map((method, index) => (
										<div 
											key={method.id} 
											className={classNames(
												'flex items-center justify-between p-4',
												!isLastChild(values.otherMethod, index) && 'border-b border-gray-200 dark:border-gray-600'
											)}
										>
											<div className="flex items-center">
												{method.type === 'PAYPAL' && <img src="/img/others/img-10.png" alt="visa" />}
												<div className="ml-3 rtl:mr-3 font-semibold">
													{method.identifier}
												</div>
											</div>
											<div className="flex">
												<Button onClick={() => onRedirect(method.redirect)} size="sm" type="button">Edit</Button>
											</div>
										</div>
									))}
								</div>
							</FormRow>
							<Dialog
								isOpen={ccDialogType === 'NEW' || ccDialogType === 'EDIT'}
								onClose={onCreditCardDialogClose}
								onRequestClose={onCreditCardDialogClose}
							>
								<h5 className="mb-4">Edit Credit Card</h5>
								<Field name="paymentMethods">
									{({ field, form }) => {
										return (
											<CreditCardForm
												type={ccDialogType}
												card={selectedCard} 
												onUpdate={cardValue => onCardUpdate(cardValue, form, field)} 
											/>
										) 
									}}
								</Field>
							</Dialog>
							<div className="mt-4 ltr:text-right">
								<Button className="ltr:mr-2 rtl:ml-2" type="button" onClick={resetForm}>Reset</Button>
								<Button variant="solid" loading={isSubmitting} type="submit">
									{isSubmitting ? 'Updating' : 'Update'}
								</Button>
							</div>
							<FormDesription
								className="mt-6"
								title="Billing History"
								desc="View your previos billing"
							/>
							<BillingHistory 
								className="mt-4 rounded-lg border border-gray-200 dark:border-gray-600" 
								data={data.billingHistory} 
							/>
						</FormContainer>
					</Form>
				)
			}}
		</Formik>
	)
}

export default Billing