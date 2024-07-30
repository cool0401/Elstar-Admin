import React from 'react'
import { SyntaxHighlighter } from 'components/shared'

const DarkLightMode = () => {
	return (
		<>
			<p>
				To initialize dark or light mode to the app, simply set <code>mode</code> field as
				<code>'light'</code> or <code>'dark'</code> in <code>src/configs/theme.config.js</code>.
				For example: 
			</p>
			<SyntaxHighlighter language="js">{`export const themeConfig = {
	...
	mode: 'dark'
}`}</SyntaxHighlighter>
			<div className='mt-10' id="hook">
				<h5>Hook</h5>
				<p className="mt-1">
					You can access or update the mode in a component via our prepared hook.
				</p>
				<SyntaxHighlighter language="js">{`import React from 'react'
import { Switcher } from 'components/ui'
import useDarkMode from 'utils/hooks/useDarkMode'

const ModeSwitcher = () => {

	const [isDark, setIsDark] = useDarkMode()

	const onSwitchChange = (checked) => {
		setIsDark(checked ? 'dark' : 'light')
	}

	return (
		<div>
			<Switcher 
				value={isDark}
				onChange={checked => onSwitchChange(checked)}
			 />
		</div>
	)
}

export default ModeSwitcher`}</SyntaxHighlighter>
			</div>
		</>
	)
}

export default DarkLightMode