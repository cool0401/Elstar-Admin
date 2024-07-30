import React, { useState } from 'react'
import { Drawer, Button } from 'components/ui'
import { NavToggle } from 'components/shared'
import useThemeClass from 'utils/hooks/useThemeClass'
import { NavLink } from 'react-router-dom'

const NavContent = ({onLinkClick, routes}) => {

	const { textTheme, borderTheme } = useThemeClass()

	const activeClass = `${textTheme} hover:${textTheme} ${borderTheme}`

	return (
		<>
			{routes.map(group => (
				<div className="mb-6" key={group.groupName}>
					<h6 className="mb-4">{group.groupName}</h6>
					<div className="ltr:border-l rtl:border-r border-gray-200 dark:border-gray-600">
						{
							group.nav.map(menu => (
								<NavLink
									key={menu.label}
									className={({ isActive }) => (
										`cursor-pointer font-semibold ltr:border-l rtl:border-r px-4 h-6 mb-4 flex items-center gap-2 hover:text-gray-900 dark:hover:text-gray-100 ltr:-ml-px rtl:-mr-px ${isActive ? activeClass : 'border-transparent'}`
									)}
									to={menu.path}
									onClick={onLinkClick}
								>
									<span>{menu.label}</span>
								</NavLink>
							))
						}
					</div>
				</div>
			))}
		</>
	)
}

const MobileNav = ({routes}) => {

	const [isOpen, setIsOpen] = useState(false)

	const openDrawer = () => {
		setIsOpen(true)
	}

	const onDrawerClose = () => {
		setIsOpen(false)
	}

	return (
		<>
			<Button
				className="lg:hidden"
				shape="circle" 
				variant="plain"
				icon={<NavToggle className="text-2xl" toggled={isOpen} />} 
				onClick={openDrawer}
			/>
			<Drawer
				title="Navigation"
				isOpen={isOpen}
				onClose={onDrawerClose}
				onRequestClose={onDrawerClose}
				width={300}
				placement="left"
			>
				<NavContent onLinkClick={onDrawerClose} routes={routes} />
			</Drawer>
		</>
	)
}

const DocumentationNav = ({routes}) => {

	return (
		<div className="flex flex-col">
			<div className="hidden lg:block">
				<NavContent routes={routes} />
			</div>
			<MobileNav routes={routes} />
		</div>
	)
}

export default DocumentationNav