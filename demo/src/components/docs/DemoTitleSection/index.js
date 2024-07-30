import React from 'react'
import ReactHtmlParser from 'html-react-parser'

const DemoTitleSection = props => {

	const { title, desc = '', className } = props

	return (
		<div className={className}>
			<h2 className="mb-2">{title}</h2>
			<p>{ ReactHtmlParser(desc) }</p>
		</div>
	)
}

export default DemoTitleSection
