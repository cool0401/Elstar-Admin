import React, { useState, useRef, useCallback } from 'react'
import { Card, Button, Input } from 'components/ui'
import { HiOutlineCheck, HiOutlineX } from 'react-icons/hi'

const ArticleAction = () => {

	const commentInput = useRef()

	const [helpful, setHelpful] = useState('')

	const onHelpfulClick = useCallback((val) => {
		setHelpful(val)
	}, [])
	
	const onCommentSubmit = () => {
		console.log(commentInput.current.value)
		commentInput.current.value = ''
	}

	return (
		<>
			<Card className="mt-8" bodyClass="flex items-center justify-between" bordered>
				<div>
					<h5>Was this article helpful?</h5>
					<p>{helpful === 'Y' ? '1' : '0'} out of {helpful === 'Y' ? '1' : '0'} found this helpful</p>
				</div>
				<div className="flex gap-2">
					<Button
						icon={helpful === 'Y' && <HiOutlineCheck />}
						variant={helpful === 'Y' ? 'solid' : 'default'} 
						onClick={() => onHelpfulClick('Y')}
					>
						<span>Yes</span>
					</Button>
					<Button
						icon={helpful === 'N' && <HiOutlineX />}
						variant={helpful === 'N' ? 'solid' : 'default'}
						onClick={() => onHelpfulClick('N')}
					>
						<span>No</span>
					</Button>
				</div>
			</Card>
			<div className="mt-12">
				<h3 className="mb-4">Comments</h3>
				<Input ref={commentInput} placeholder="Enter your comment here..." textArea />
				<div className="mt-3 flex justify-end">
					<Button onClick={onCommentSubmit} variant="solid">Submit</Button>
				</div>
			</div>
		</>
	)
}

export default ArticleAction