import React from 'react'
import { SyntaxHighlighter } from 'components/shared'

const Example = () => {
	return (
		<SyntaxHighlighter language="jsx">{`import React from 'react'
		 
const HelloWorld = () =>
{
	return <h1>Hello World!</h1>
}
	
export default HelloWorld`}</SyntaxHighlighter>
	)
}

export default Example