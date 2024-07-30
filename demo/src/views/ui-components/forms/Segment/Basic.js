import React from 'react'
import { Segment } from 'components/ui'

const Basic = () => {
	return (
		<Segment>
			<Segment.Item value="left">Left</Segment.Item>
			<Segment.Item value="center">Center</Segment.Item>
			<Segment.Item value="right">Right</Segment.Item>
		</Segment>
	)
}

export default Basic
