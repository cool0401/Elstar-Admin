import React, { useEffect } from 'react'
import classNames from 'classnames'
import { ScrollBar, Avatar, Button } from 'components/ui'
import { Loading } from 'components/shared'
import { HiOutlineFlag, HiStar, HiPaperClip, HiMenu, HiMenuAlt2 } from 'react-icons/hi'
import { useSelector, useDispatch } from 'react-redux'
import { getMails, updateMailId } from '../store/dataSlice'
import { toggleSidebar, toggleMobileSidebar, updateReply } from '../store/stateSlice'
import useResponsive from 'utils/hooks/useResponsive'
import { useNavigate, useLocation } from 'react-router-dom'
 
const htmlReg = /(<([^>]+)>)/ig

const ToggleButton = ({sideBarExpand, mobileSidebarExpand}) => {

	const dispatch = useDispatch()

	const { smaller } = useResponsive()

	const onSideBarToggle = () => {
		dispatch(toggleSidebar(!sideBarExpand))
	}

	const onMobileSideBar = () => {
		dispatch(toggleMobileSidebar(!mobileSidebarExpand))
	}

	return (
		<Button 
			icon={smaller.xl ? (mobileSidebarExpand ? <HiMenu /> : <HiMenuAlt2 />) : (sideBarExpand ? <HiMenu /> : <HiMenuAlt2 />)}
			onClick={smaller.xl ? onMobileSideBar : onSideBarToggle}
			size="sm"
			variant="plain"
			shape="circle"
		/>
	)
}

const MailList = () => {

	const dispatch = useDispatch()
	const mails = useSelector((state) => state.crmMail.data.mailList)
	const mailId = useSelector((state) => state.crmMail.data.selectedMailId)
	const loading = useSelector((state) => state.crmMail.data.mailListLoading)
	const sideBarExpand = useSelector((state) => state.crmMail.state.sideBarExpand)
	const mobileSidebarExpand = useSelector((state) => state.crmMail.state.mobileSidebarExpand)
	const selectedCategory = useSelector((state) => state.crmMail.state.selectedCategory)

	const direction = useSelector(state => state.theme.direction)

	const navigate = useNavigate()
	const location = useLocation()

	const fetchData = (data) => {
		dispatch(getMails(data))
	}

	useEffect(() => {
		const path = location.pathname.substring(location.pathname.lastIndexOf('/') + 1)
		const category = { category: path }
		
		if(path === 'mail') {
			category.category = 'inbox'
		}

		fetchData(category)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [location.pathname])

	const parseHtml = (content) => {
		if(!content) {
			return ''
		}
		const text = content.replace(htmlReg, '')
		return text.length > 60 ? text.substring(0, 57) + "..." : text
	}

	const onMailClick = (e, id) => {
		e.stopPropagation()
		dispatch(updateMailId(id))
		dispatch(updateReply(false))
		navigate(`${location.pathname}?mail=${id}`, { replace: true })
	}

	return (
		<div 
			className={classNames(
				'min-w-[360px] ease-in-out duration-300 relative flex flex-auto flex-col ltr:border-r rtl:border-l border-gray-200 dark:border-gray-600',
				sideBarExpand && 'ltr:xl:ml-[280px] rtl:xl:mr-[280px]',
				mailId ? 'hidden xl:flex' : 'xs:flex'
			)}
		>
			<div className="relative flex flex-0 items-center justify-between min-h-[55px] border-gray-200 dark:border-gray-600">
				<div className="flex items-center gap-1">
					<ToggleButton sideBarExpand={sideBarExpand} mobileSidebarExpand={mobileSidebarExpand} />
					<h6>
						{selectedCategory.label}
					</h6>
				</div>
			</div>
			<ScrollBar autoHide direction={direction}>
				<Loading 
					type={mails.length > 0 ? 'cover' : 'default'} 
					spinnerClass={mails.length > 0 ? 'hidden' : ''} 
					loading={loading}
				>
					{mails.map(mail => (
						<div 
							key={mail.id} 
							className="relative flex border-b border-gray-200 dark:border-gray-600 last:border-0 hover:bg-hover"
							onClick={e => onMailClick(e, mail.id)}
						>
							<div className={`${mailId === mail.id ? 'bg-gray-50 dark:bg-gray-700' : ''} w-full py-6 pr-4 pl-5 cursor-pointer select-none hover:bg-gray-50 hover:dark:bg-gray-700 flex`}>
								<div className="ltr:mr-2 rtl:ml-2">
									<Avatar shape="circle" size={25} src={mail.avatar} />
								</div>
								<div className="w-full">
									<div className="flex items-center justify-between mb-2">
										<div className="flex items-center">
											<span className="font-semibold truncate text-gray-900 dark:text-gray-100">{mail.name}</span>
											{mail.flagged && (
												<span className="ltr:ml-2 rtl:mr-2">
													<HiOutlineFlag className="text-red-500" />
												</span>
											)}
										</div>
										<div className="flex items-center text-lg">
											{mail.message[0].attachment.length > 0 && <HiPaperClip />}
											{mail.starred && <HiStar className="text-amber-500 ltr:ml-1 rtl:mr-1" />}
										</div>
									</div>
									<div className="flex flex-auto w-full justify-between">
										<p>{parseHtml(mail.message[0].content)}</p>
										<div className="ltr:ml-2 rtl:mr-2">
											<span className="whitespace-nowrap">{mail.message[0].date}</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					))}
				</Loading>
			</ScrollBar>
		</div>
	)
}

export default MailList
