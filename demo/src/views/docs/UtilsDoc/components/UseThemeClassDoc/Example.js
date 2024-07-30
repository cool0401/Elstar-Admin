import React from 'react'
import { SyntaxHighlighter } from 'components/shared'

const Example = () => {
	return (
		<SyntaxHighlighter language="js">{`import useThemeClass from 'utils/hooks/useThemeClass'

const Component = () => {

    const { textTheme, bgTheme, borderTheme, ringTheme } = useThemeClass()

	return (
        <div className={bgTheme}>...
    )
}
`}</SyntaxHighlighter>
	)
}

export default Example