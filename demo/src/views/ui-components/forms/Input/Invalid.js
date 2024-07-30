import React, { useState } from 'react'
import { Input, Button } from 'components/ui'
import { HiExclamationCircle } from 'react-icons/hi'

const Invalid = () => {

	const [invalid, setInvalid] = useState(false)

	return (
		<div>
			<div className="mb-4">
				<Input 
					invalid={invalid} 
					placeholder="Invalid input" 
					suffix={invalid ? <HiExclamationCircle className="text-red-500 text-xl" /> : null}
				/>
			</div>
			<div className="mb-4">
				<Input invalid={invalid}  placeholder="Invalid text area" textArea />
			</div>
			<Button variant="solid" onClick={() => setInvalid(!invalid)}>Set {invalid ? 'Valid' : 'Invalid'}</Button>
		</div>
	)
}

export default Invalid
