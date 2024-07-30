import React, { useState, useCallback } from 'react'
import { Progress, Button, InputGroup } from 'components/ui'
import { HiPlus, HiMinus } from 'react-icons/hi'

const Dynamic = () => {

	const [percentage, setPercentage] = useState(20)

	const onIncrease = useCallback(() => {
		let value = percentage + 10
		if (value > 100) {
			value = 100
		}
		setPercentage(value)
	}, [percentage])


	const onDecrease = useCallback(() => {
		let value = percentage - 10
		if (value < 0) {
      value = 0
    }
		setPercentage(value)
	}, [percentage])

	return (
		<div>
			<InputGroup size="sm">
				<Button onClick={onDecrease} icon={<HiMinus />} />
				<Button onClick={onIncrease} icon={<HiPlus />} />
			</InputGroup>
			<div className="mt-4 flex items-center">
				<Progress className="mx-0 md:mx-4" percent={percentage} />
				<Progress variant="circle" percent={percentage} />
			</div>
		</div>
	)
}

export default Dynamic
