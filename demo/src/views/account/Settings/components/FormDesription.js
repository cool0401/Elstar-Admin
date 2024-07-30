import React from 'react'

const FormDesription = ({title, desc, ...rest}) => {
	return (
		<div {...rest}>
			<h5>{title}</h5>
			<p>{desc}</p>
		</div>
	)
}

export default FormDesription