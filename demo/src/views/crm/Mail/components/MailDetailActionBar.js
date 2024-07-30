import React from 'react'
import { Button, Dropdown, InputGroup } from 'components/ui'
import classNames from 'classnames'
import { 
	HiReply, 
	HiOutlineFolderDownload, 
	HiStar, 
	HiOutlineStar, 
	HiFlag, 
	HiOutlineFlag,
	HiOutlineTrash,
	HiOutlinePaperAirplane,
	HiOutlineArrowSmLeft
} from 'react-icons/hi'
import { useDispatch, useSelector } from 'react-redux'
import { updateMailList, updateMail, updateMailId } from '../store/dataSlice'
import { updateReply } from '../store/stateSlice'
import { groupList } from './MailSidebar'
import useResponsive from 'utils/hooks/useResponsive'
import cloneDeep from 'lodash/cloneDeep'

const BackButton = () => {

	const dispatch = useDispatch()

	const { smaller } = useResponsive()

	const onResetSelectedMail = () => {
		dispatch(updateMail({}))
		dispatch(updateMailId(''))
	}

	return (
		smaller.xl ?
		<Button 
			icon={<HiOutlineArrowSmLeft />}
			onClick={onResetSelectedMail}
			variant="plain"
			shape="circle"
			size="sm"
		/>
		:
		<></>
	)
}

const MailDetailActionBar = props => {

	const { 
		starred, 
		flagged, 
		isReply, 
		mailId, 
		onStarToggle, 
		onFlagToggle, 
		onMailSend,
		onMailReply
	} = props

	const dispatch = useDispatch()
	const mails = useSelector((state) => state.crmMail.data.mailList)

	const onReply = () => {
		dispatch(updateReply(true))
		onMailReply?.()
	}

	const onDiscard = () => {
		dispatch(updateReply(false))
	}

	const onSend = () => {
		onMailSend?.()
	}

	const onStar = () => {
		const data = updateMailsData('starred')
		dispatch(updateMailList(data))
		onStarToggle?.()
	}

	const onFlag = () => {
		const data = updateMailsData('flagged')
		dispatch(updateMailList(data))
		onFlagToggle?.()
	}

	const updateMailsData = (key) => {
		let newMailsData = cloneDeep(mails)
		newMailsData = newMailsData.map(mail => {
			if(mail.id === mailId) {
				mail[key] = !mail[key]
			}
			return mail
		})
		return newMailsData
	}

	return (
		<div 
			className={
				classNames(
					'relative flex items-center min-h-[55px] px-4 border-b border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800'
				)
			}
		>
			{
				isReply ? (
					<div className="flex items-center xl:justify-end justify-between gap-2 w-full">
						<BackButton />
						<div className="flex gap-2">
							<Button
								onClick={onDiscard} 
								size="sm" 
								icon={<HiOutlineTrash />}
							>
								Discard
							</Button>
							<Button
								variant="solid"
								onClick={onSend} 
								size="sm" 
								icon={<HiOutlinePaperAirplane />}
							>
								Send
							</Button>
						</div>
					</div>
				)
				:
				(
					<div className="flex items-center justify-between w-full">
						<div className="flex items-center gap-2">
							<BackButton />
							<Button onClick={onReply} size="sm" icon={<HiReply />}>
								<span className="hidden sm:block">Reply</span>
							</Button>
						</div>
						<div className="flex items-center gap-2">
							<InputGroup size="sm">
								<Button 
									size="sm" 
									icon={
										<span className="text-amber-500">{starred ? <HiStar /> : <HiOutlineStar />}</span>
									}
									onClick={onStar}
								>
									<span className="hidden sm:block">{starred ? 'Starred' : 'Star'}</span>
								</Button>
								<Button 
									size="sm" 
									icon={
										<span className="text-red-500">{flagged ? <HiFlag /> : <HiOutlineFlag />}</span>
									}
									onClick={onFlag} 
								>
									<span className="hidden sm:block">{flagged ? 'Flagged': 'Flag'}</span>
								</Button>
							</InputGroup>
							<Dropdown 
								placement="bottom-end"
								renderTitle={
									<Button size="sm" icon={<HiOutlineFolderDownload />}>
										<span className="hidden sm:block">Move to</span>
									</Button>
								}
							>
								{groupList.map(group => (
									<Dropdown.Item key={group.value} eventKey={group.value}>
										<span className='text-xl ltr:mr-2 rtl:ml-2'>{group.icon}</span>
										<span>{group.label}</span>
									</Dropdown.Item>
								))}
							</Dropdown>
						</div>
					</div>
				)
			}
		</div>
	)
}

export default MailDetailActionBar