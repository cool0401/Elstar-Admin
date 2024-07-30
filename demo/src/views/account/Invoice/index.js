import React from 'react'
import { Container } from 'components/shared'
import InvoiceContent from './components/InvoiceContent'
import { Card } from 'components/ui'

const Invoice = () => {

	return (
		<Container className="h-full">
			<Card className="h-full" bodyClass="h-full">
				<InvoiceContent />
			</Card>
		</Container>
	)
}

export default Invoice