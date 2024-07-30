import React from 'react'
import { SyntaxHighlighter } from 'components/shared'

const Example = () => {
	return (
		<SyntaxHighlighter language="js">{`import useDirection from 'utils/hooks/useDirection'

const Component = () => {

	const [direction, updateDirection] = useDirection()

	const handleDirChange = () => {
		updateDirection('rtl')
	}

	return (...)
}
`}</SyntaxHighlighter>
	)
}

export default Example