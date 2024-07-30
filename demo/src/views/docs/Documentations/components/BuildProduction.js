import React from 'react'
import { SyntaxHighlighter } from 'components/shared'

const BuildProduction = () => {
	return (
		<>
			<p>Run the following command to build the application into <code>/build</code> directory</p>
			<SyntaxHighlighter language="js">{`npm run build`}</SyntaxHighlighter>
			<p>If you having issue about deployment, try to checkout the guide from the 
				create-react-app <a rel="noopener noreferrer" href="https://create-react-app.dev/docs/deployment/" target="_blank">
					doc
				</a>.
			</p>
		</>
	)
}

export default BuildProduction