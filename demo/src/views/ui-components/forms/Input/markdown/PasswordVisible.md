```jsx
import React, { useState } from 'react'
import { Input } from 'components/ui'
import { HiOutlineEyeOff, HiOutlineEye } from 'react-icons/hi'

const PasswordVisible = () => {

	const [ pwInputType, setPwInputType ] = useState('password')

	const onPasswordVisibleClick = e => {
		e.preventDefault()
		setPwInputType(pwInputType === 'password' ? 'text' : 'password')
	}

	const inputIcon = (
		<span className="cursor-pointer" onClick={e => onPasswordVisibleClick(e)}>
			{ pwInputType === 'password' ? <HiOutlineEyeOff /> : <HiOutlineEye />}
		</span>
	)

	return (
		<div>
			<Input type={pwInputType} suffix={inputIcon} placeholder="Password" />
		</div>
	)
}

export default PasswordVisible
```