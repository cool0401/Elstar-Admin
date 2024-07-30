import React from 'react'
import { Card } from 'components/ui'
import CardFooter from './CardFooter'
import ReactHtmlParser from 'html-react-parser'

const DemoCard = props => {
	const { demoComponent, id, title, desc = '', hideFooter, ...rest } = props


	return (
		<div className="demo-card">
			<div className="mb-6">
				<h4>{title}</h4>
				{desc && <div className="mt-1 demo-card-description">{ReactHtmlParser(desc)}</div>}
			</div>
			<Card
				id={id}
				className={`mb-9`}
				footerClass="bg-gray-50 dark:bg-gray-700 pb-2 pt-2"
				bordered
				footer={
					hideFooter ? false : <CardFooter {...rest} />
				}
			>
				{demoComponent}
			</Card>
		</div>
	)
}

export default DemoCard
