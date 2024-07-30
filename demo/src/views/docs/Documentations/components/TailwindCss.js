import React from 'react'
import { Alert } from 'components/ui'
import { SyntaxHighlighter } from 'components/shared'

const TailwindCss = () => {
	return (
		<>
			<p>
				Tailwind CSS is a utility-first CSS framework with predefined classes that you can use to build and design the UI directly in the JSX.  
				We use Tailwind as our core CSS framework, most of the UI in Elstar is built entirely with it features, 
				so you can easily update the theme & base by altering <code>tailwind.config.js</code> under the root directory.
			</p>
			<div className="mt-10" id="tooling">
				<h5>Tooling</h5>
				<p className="mt-1">
					If you are using VS Code as your IDE, we suggest to install <a href="https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss" rel="noreferrer" target="_blank">Tailwind CSS IntelliSense</a> plugin, it provides autocomplete, 
					syntax highlighting, and linting based on your Tailwind config which can speed up your development.
				</p>
			</div>
			<div className="mt-10" id="note">
				<Alert type="info" title="Note" showIcon>
					Some of our UI component use sematic class with tailwind <code>@apply</code> directive underlying, in some cases, 
					applying tailwind classes on these component might not working, you might need to use <code>!important</code> modifier
					to override the default high specificity selectors.
				</Alert>
			</div>
			<p>You can make any utility important by adding a ! character to the beginning, E.g:</p>
			<SyntaxHighlighter language="jsx">{`<Dropdown className="!bg-red-500" />`}</SyntaxHighlighter>
			<p>You can always visit the official doc to find out classes usage & Tailwind configuration: <a href="https://tailwindcss.com/" rel="noreferrer" target="_blank">https://tailwindcss.com/</a></p>
		</>
	)
}

export default TailwindCss