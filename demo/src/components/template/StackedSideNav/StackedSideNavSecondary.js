import React from 'react'
import { Button } from 'components/ui'
import {
	HEADER_HEIGHT_CLASS,
	DIR_LTR,
	DIR_RTL
} from 'constants/theme.constant'
import VerticalMenuContent from 'components/template/VerticalMenuContent'
import { 
	HiOutlineArrowSmLeft,
	HiOutlineArrowSmRight
} from 'react-icons/hi'

const StackedSideNavSecondary = props => {

	const { 
		title,
		menu, 
		routeKey, 
		onCollapse, 
		direction, 
		userAuthority,
		navMode,
		...rest 
	} = props

	const handleCollpase = () => {
		onCollapse()
	}

	return (
		<div {...rest}>
			<div className={`${HEADER_HEIGHT_CLASS} flex items-center justify-between gap-4 pl-6 pr-4`}>
				<h5 className="font-bold">{title}</h5>
				<Button 
					shape="circle" 
					variant="plain" 
					size="sm" 
					icon={
						<>
							{direction === DIR_LTR && <HiOutlineArrowSmLeft />}
							{direction === DIR_RTL && <HiOutlineArrowSmRight />}
						</>
					}
					onClick={handleCollpase}
				/>
			</div>
			<VerticalMenuContent
				routeKey={routeKey}
				navigationTree={menu}
				userAuthority={userAuthority}
				navMode={navMode}
			/>
		</div>
	)
}

export default StackedSideNavSecondary