import React from 'react'
import { SyntaxHighlighter } from 'components/shared'

const Example = () => {
	return (
		<SyntaxHighlighter language="js">{`import useLocale from 'utils/hooks/useLocale'

const Component = () => {

	const locale = useDirection()

	return (...)
}
`}</SyntaxHighlighter>
	)
}

export default Example