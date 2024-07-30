import React, { forwardRef } from 'react'
import { Input } from 'components/ui'
import { HiOutlineSearch } from 'react-icons/hi'
import debounce from 'lodash/debounce'

const QueryInput = forwardRef(({ onInputChange }, ref) => {

	const debounceFn = debounce(handleDebounceFn, 500)

	function handleDebounceFn(val) {
		onInputChange?.(val)
	}

	const onEdit = (e) => {
		debounceFn(e.target.value)
	}

	return (
		<Input
			ref={ref}
			className="lg:w-52" 
			size="sm"
			placeholder="Search" 
			prefix={<HiOutlineSearch className="text-lg" />} 
			onChange={onEdit}
		/>
	)
})

export default QueryInput
