```jsx
import React, { useState, useCallback } from 'react'
import { Segment } from 'components/ui'

const Controlled = () => {

	const [singleSegmentValue, setSingleSegmentValue] = useState(['left'])
	const [multipleSegmentValue, setMultipleSegmentValue] = useState(['center'])

	const onSingleSelectionSegmentChange = useCallback(val => {
		setSingleSegmentValue(val)
	}, [setSingleSegmentValue])

	const onMultipleSegmentValueChange = useCallback(val => {
		setMultipleSegmentValue(val)
	}, [setMultipleSegmentValue])

	return (
		<>
			<div className="mb-6">
				<h6 className="mb-3">Single Selection</h6>
				<Segment value={singleSegmentValue} onChange={val => onSingleSelectionSegmentChange(val)}>
					<Segment.Item value="left">Left</Segment.Item>
					<Segment.Item value="center">Center</Segment.Item>
					<Segment.Item value="right">Right</Segment.Item>
				</Segment>
			</div>
			<div>
				<h6 className="mb-3">Multiple Selection</h6>
				<Segment 
					selectionType="multiple" 
					value={multipleSegmentValue} 
					onChange={val => onMultipleSegmentValueChange(val)}
				>
					<Segment.Item value="left">Left</Segment.Item>
					<Segment.Item value="center">Center</Segment.Item>
					<Segment.Item value="right">Right</Segment.Item>
				</Segment>
			</div>
		</>
	)
}

export default Controlled
```