import React from 'react'
import { PasswordInput } from 'components/shared'

const Example = () => {
	return (
		<PasswordInput onVisibleChange={visible => { console.log(visible) }} />
	)
}

export default Example