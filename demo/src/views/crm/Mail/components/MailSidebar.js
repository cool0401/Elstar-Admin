import React, { useEffect } from 'react'
import classNames from 'classnames'
import { Menu, Badge, ScrollBar, Drawer } from 'components/ui'
import { 
	HiOutlineInbox, 
	HiOutlinePaperAirplane, 
	HiOutlinePencil,
	HiOutlineStar,
	HiOutlineTrash,
} from 'react-icons/hi'
import MainCompose from './MainCompose'
import useResponsive from 'utils/hooks/useResponsive'
import { updateMailId } from '../store/dataSlice'
import { updateSelectedCategory, toggleMobileSidebar } from '../store/stateSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, useLocation } from 'react-router-dom'

const { MenuItem, MenuGroup } = Menu

export const groupList = [
	{ value: 'inbox', label: 'Inbox', icon: <HiOutlineInbox /> },
	{ value: 'sentItem', label: 'Sent Item', icon: <HiOutlinePaperAirplane /> },
	{ value: 'draft', label: 'Draft', icon: <HiOutlinePencil /> },
	{ value: 'starred', label: 'Starred', icon: <HiOutlineStar /> },
	{ value: 'deleted', label: 'Deleted', icon: <HiOutlineTrash /> },
]

export const labelList = [
	{ value: 'work', label: 'Work', dotClass: 'bg-blue-500' },
	{ value: 'private', label: 'Private', dotClass: 'bg-indigo-500' },
	{ value: 'important', label: 'Important', dotClass: 'bg-red-500' },
]

const MailSideBarContent = () => {

	const navigate = useNavigate()
	const location = useLocation()

	const dispatch = useDispatch()

	const selectedCategory = useSelector((state) => state.crmMail.state.selectedCategory)

	const direction = useSelector(state => state.theme.direction)

	const onMenuClick = (category) => {
		dispatch(updateMailId(''))
		dispatch(updateSelectedCategory(getCategory(category.value)))
		navigate(`/app/crm/mail/${category.value}`, { replace: true })
	}

	useEffect(() => {
		const path = location.pathname.substring(location.pathname.lastIndexOf('/') + 1)
		const selected = getCategory(path)
		dispatch(updateSelectedCategory(selected))
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
	
	const getCategory = (value) => {
		const categories = [...groupList, ...labelList]
		let category = value
		if(category === 'mail') {
			category = 'inbox'
		}
		return {
			value: category, 
			label: categories.find(cat => cat.value === category).label
		}
	}

	return (
		<ScrollBar direction={direction}>
			<div className="flex flex-col justify-between h-full">
				<div>
					<div className="my-8 mx-6">
						<h3>Mailbox</h3>
					</div>
					<Menu variant="transparent" className="mx-2 mb-10">
						{groupList.map(menu => (
							<MenuItem 
								key={menu.value} 
								eventKey={menu.value} 
								className={`mb-2 ${selectedCategory.value === menu.value ? 'bg-gray-100 dark:bg-gray-700' : ''}`}
								onSelect={() => onMenuClick(menu)}
							>
								<span className='text-2xl ltr:mr-2 rtl:ml-2'>{menu.icon}</span>
								<span>{menu.label}</span>
							</MenuItem>
						))}
					</Menu>
					<Menu variant="transparent" className="mx-2 mb-6">
						<MenuGroup label="Labels">
							{labelList.map(label => (
								<MenuItem 
									key={label.value} 
									eventKey={label.value} 
									className={`mb-2 ${selectedCategory.value === label.value ? 'bg-gray-100 dark:bg-gray-700' : ''}`}
									onSelect={() => onMenuClick(label)}
								>
									<Badge className='ltr:mr-2 rtl:ml-2' innerClass={label.dotClass} />
									<span>{label.label}</span>
								</MenuItem>
							))}
						</MenuGroup>
					</Menu>
				</div>
				<div className="mx-4 mb-4">
					<MainCompose />
				</div>
			</div>
		</ScrollBar>
	)
}

const MailSidebar = () => {

	const sideBarExpand = useSelector((state) => state.crmMail.state.sideBarExpand)

	const mobileSideBarExpand = useSelector((state) => state.crmMail.state.mobileSideBarExpand)

	const dispatch = useDispatch()

	const { smaller } = useResponsive()

	const onMobileSideBarClose = () => {
		dispatch(toggleMobileSidebar(false))
	}
	
	return (
		smaller.xl ?
		<Drawer
			bodyClass="p-0"
			title="Mail"
			isOpen={mobileSideBarExpand}
			onClose={onMobileSideBarClose}
			onRequestClose={onMobileSideBarClose}
			placement="left"
			width={280}
		>
			<MailSideBarContent />
		</Drawer>
		:
		<div 
			className={
				classNames(
					'w-[280px] absolute top-0 bottom-0 ease-in-out duration-300 bg-white dark:bg-gray-800 ltr:border-r rtl:border-l border-gray-200 dark:border-gray-600 z-10',
					sideBarExpand ? 'ltr:left-0 rtl:right-0' : 'ltr:left-[-280px] rtl:right-[-280px]'
				)
			}
		>
			<MailSideBarContent />
		</div>
	)
}

export default MailSidebar
