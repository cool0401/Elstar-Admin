import React from 'react'
import { Switcher } from 'components/ui'
import { RiMoonClearLine, RiSunLine } from 'react-icons/ri'

const withIcon = component  => {
	return (
		<div className="text-lg">{component}</div>
	)
}

const Content = () => {
	return (
		<div>
			<div className="mb-4">
				<Switcher checkedContent="a" unCheckedContent="b" />
			</div>
			<div className="mb-4">
				<Switcher
					unCheckedContent={withIcon(<RiMoonClearLine />)} 
					checkedContent={withIcon(<RiSunLine />)} 
				/>
			</div>
		</div>
	)
}

export default Content
