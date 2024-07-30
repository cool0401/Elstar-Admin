import React from 'react'
import { SyntaxHighlighter } from 'components/shared'

const Example = () => {
	return (
		<SyntaxHighlighter language="js">{`import useTimeOutMessage from 'utils/hooks/useTimeOutMessage'

const Component = () => {

    const [ message, setMessage ] = useTimeOutMessage(5000)

	return (...)
}
`}</SyntaxHighlighter>
	)
}

export default Example