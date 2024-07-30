import React from 'react'
import { SyntaxHighlighter } from 'components/shared'

const Example = () => {
	return (
		<SyntaxHighlighter language="js">{`import acronym from 'utils/acronym'

const name = acronym('Vickie Kim')

// output: 'VK'
`}</SyntaxHighlighter>
	)
}

export default Example