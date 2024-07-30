import React from 'react'
import Header from 'components/template/Header'
import SidePanel from 'components/template/SidePanel'
import UserDropdown from 'components/template/UserDropdown'
import SideNavToggle from 'components/template/SideNavToggle'
import MobileNav from 'components/template/MobileNav'
import SideNav from 'components/template/SideNav'
import View from 'views'

const HeaderActionsStart = () => {
	return (
		<>
			<MobileNav />
			<SideNavToggle />
		</>
	)
}

const HeaderActionsEnd = () => {
	return (
		<>
			<SidePanel />
			<UserDropdown hoverable={false} />
		</>
	)
}

const ModernLayout = props => {
	return (
		<div className="app-layout-modern flex flex-auto flex-col">
			<div className="flex flex-auto min-w-0">
				<SideNav />
				<div className="flex flex-col flex-auto min-h-screen min-w-0 relative w-full bg-white dark:bg-gray-800 border-l border-gray-200 dark:border-gray-700">
					<Header 
						className="border-b border-gray-200 dark:border-gray-700" 
						headerEnd={<HeaderActionsEnd />} 
						headerStart={<HeaderActionsStart />}
					/>
					<View {...props} />
				</div>
			</div>
		</div>
	)
}

export default ModernLayout
