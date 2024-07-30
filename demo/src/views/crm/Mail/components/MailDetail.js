import React, { useEffect, useRef } from 'react'
import classNames from 'classnames'
import { Loading, DoubleSidedImage } from 'components/shared'
import { Card } from 'components/ui'
import useQuery from 'utils/hooks/useQuery'
import { useDispatch, useSelector } from 'react-redux'
import { getMail } from '../store/dataSlice'
import { updateMail, updateMailId } from '../store/dataSlice'
import MailDetailActionBar from './MailDetailActionBar'
import MailDetailContent from './MailDetailContent'
import MailEditor from './MailEditor'
import isEmpty from 'lodash/isEmpty'
import cloneDeep from 'lodash/cloneDeep'

const MailDetail = () => {

	const query = useQuery()

	const dispatch = useDispatch()

	const id = query.get('mail')

	const mailEditorRef = {
		formikRef: useRef(),
		editorRef: useRef(),
		scrollRef: useRef()
	}

	const mail = useSelector((state) => state.crmMail.data.mail)
	const mailLoading = useSelector((state) => state.crmMail.data.mailLoading)
	const mailId = useSelector((state) => state.crmMail.data.selectedMailId)
	const isReply = useSelector((state) => state.crmMail.state.reply)

	const fetchData = () => {
		
		if (id) {
			dispatch(getMail({id}))
		}
	}

	const onStarToggle =() => {
		const newMailData = cloneDeep(mail)
		newMailData.starred = !newMailData.starred
		dispatch(updateMail(newMailData))
	}

	const onFlagToggle = () => {
		const newMailData = cloneDeep(mail)
		newMailData.flagged = !newMailData.flagged
		dispatch(updateMail(newMailData))
	}

	const formSubmit = () => {
		mailEditorRef.formikRef.current?.submitForm()
	}

	const onMailReply = () => {
		let timeout = setTimeout(() => mailEditorRef.editorRef.current.focus(), 100)
		return () => {
			clearTimeout(timeout)
		}
	}

	useEffect(() => {
		if (mailId) {
			fetchData()
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [mailId])

	useEffect(() => {
		if (!mailId && id) {
			dispatch(updateMailId(id))
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<div 
			className={
				classNames(
					id && !isEmpty(mail) && !mailLoading ? 'block xl:flex' : 'hidden xl:flex',
					'flex-col w-full bg-gray-100 dark:bg-gray-900'
				)
			}
		>
			{id && !isEmpty(mail) ? (
				mailLoading ?
				<Loading loading={true} />
				:
				<>
					<MailDetailActionBar 
						isReply={isReply} 
						starred={mail.starred} 
						flagged={mail.flagged}
						mailId={mail.id}
						onStarToggle={onStarToggle}
						onFlagToggle={onFlagToggle}
						onMailSend={formSubmit}
						onMailReply={onMailReply}
					/>
					<MailDetailContent ref={mailEditorRef} mail={mail}>
						{isReply && (
							<div className="pb-6">
								<Card >
									<MailEditor ref={mailEditorRef} mode="reply" mail={mail} />
								</Card>
							</div>
						)}
					</MailDetailContent>
				</>
			) 
			: 
			(
				<div className="flex flex-col justify-center items-center h-full">
					<DoubleSidedImage 
						className="max-w-[200px]" 
						src="/img/others/no-mail-selected.png"
						darkModeSrc="/img/others/no-mail-selected-dark.png"
					/>
					<div className="mt-4 text-2xl font-semibold">Select a mail to read</div>
				</div>
			)}
		</div>
	)
}

export default MailDetail
