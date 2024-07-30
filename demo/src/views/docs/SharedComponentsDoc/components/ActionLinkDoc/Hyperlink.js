import React from 'react'
import { ActionLink } from 'components/shared'

const Hyperlink = () => {
	return (
		<ActionLink reloadDocument to="https://www.google.com/" target="_blank">
			Navigate
		</ActionLink>
	)
}

export default Hyperlink