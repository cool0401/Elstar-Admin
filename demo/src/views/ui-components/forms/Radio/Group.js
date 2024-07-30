import React, { useState } from 'react'
import { Radio } from 'components/ui'

const Group = () => {

	const [value, setValue] = useState('Banana')

	const onChange = val => {
		setValue(val)
	}

	return (
		<div>
			<Radio.Group value={value} onChange={onChange} >
				<Radio value={'Apple'}>Apple</Radio>
				<Radio value={'Banana'}>Banana</Radio>
				<Radio value={'Cherry'}>Cherry</Radio>
			</Radio.Group>
		</div>
	)
}

export default Group
