import React from 'react'
import { SyntaxHighlighter } from 'components/shared'

const Direction = () => {
	return (
		<>
			<p>
				To initialize the app direction, simply set <code>direction</code> field as
				<code>'ltr'</code> or <code>'rtl'</code> in <code>src/configs/theme.config.js</code>.
				For example: 
			</p>
			<SyntaxHighlighter language="js">{`export const themeConfig = {
	...
	direction: 'rtl'
}`}</SyntaxHighlighter>
			<div className='mt-10' id="hook">
				<h5>Hook</h5>
				<p className="mt-1">
					You can access or update the direction in a component via our prepared hook.
				</p>
				<SyntaxHighlighter language="js">{`import React from 'react'
import { InputGroup, Button } from 'components/ui'
import useDirection from 'utils/hooks/useDirection'

const dirList = [
	{ value: 'ltr', label: 'LTR' },
	{ value: 'rtl', label: 'RTL' }
]

const DirectionSwitcher = () => {

	const [direction, updateDirection] = useDirection()

	const onDirChange = (val) => {
		updateDirection(val)
	}

	return (
		<InputGroup size="sm">
			{
				dirList.map(dir => (
					<Button 
						key={dir.value}
						active={direction === dir.value}
						onClick={() => onDirChange(dir.value)}
					>
						{dir.label}
					</Button>
				))
			}
		</InputGroup>
	)
}

export default DirectionSwitcher
`}</SyntaxHighlighter>
			</div>
		</>
	)
}

export default Direction