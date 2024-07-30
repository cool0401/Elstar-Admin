import React from 'react'
import { Radio } from 'components/ui'

const Simple = () => {
	return (
		<div>
			<Radio className="mr-4" name="simpleRadioExample">Radio</Radio>
			<Radio defaultChecked  name="simpleRadioExample">Checked Radio</Radio>
		</div>
	)
}

export default Simple
