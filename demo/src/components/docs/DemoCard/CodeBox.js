import React from 'react'
import Markdown from 'react-markdown'
import { SyntaxHighlighter } from 'components/shared'

const Highlighter = props => {
	return (
		<SyntaxHighlighter className="text-base" language="jsx">
			{props.children}
		</SyntaxHighlighter>
	)
}

const CodeBox = props => {

	const { markdown } = props

	return (
		<Markdown
			children={markdown}
			components={
				{
					code : Highlighter
				}
			}
        />
	)
}

export default CodeBox
