```jsx
import React from 'react'
import { Card, Button } from 'components/ui'

const HeaderFooterBorder = () => {

	const cardFooter = (
		<div className="flex">
				<Button size="sm" className="ltr:mr-2 rtl:ml-2">Save</Button>
				<Button size="sm" variant="solid">New Post</Button>
		</div>
	)

	return (
		<div>
			<Card 
                header={<span>Card Header</span>}
                headerClass="font-semibold text-lg"
                bodyClass="text-center"
                footerClass="flex justify-end"
                footer={cardFooter}
            >
				<p>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
					Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
					when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
					It has survived not only five centuries, but also the leap into electronic typesetting, 
					remaining essentially unchanged. It was popularised in the 1960s with the release of 
					Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software 
					like Aldus PageMaker including versions of Lorem Ipsum
				</p>
			</Card>
		</div>
	)
}

export default HeaderFooterBorder
```