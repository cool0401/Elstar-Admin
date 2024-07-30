import React from 'react'
import { SyntaxHighlighter } from 'components/shared'

const Example = () => {
	return (
		<SyntaxHighlighter language="js">{`import useTwColorByName from 'utils/hooks/useTwColorByName'

const Component = () => {

    const generateTwColor = useTwColorByName('bg')

	return (
        <div className={generateTwColor('John')}>...
    )
}
`}</SyntaxHighlighter>
	)
}

export default Example