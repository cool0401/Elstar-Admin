import React, { useEffect } from 'react'
import { Container, AdaptableCard } from 'components/shared'
import { Button } from 'components/ui'
import Editor from './components/Editor'
import useQuery from 'utils/hooks/useQuery'
import reducer from './store'
import { injectReducer } from 'store/index'
import { getArticle, setArticle } from './store/dataSlice'
import { setCategory, setMode } from './store/stateSlice'
import { useDispatch, useSelector } from 'react-redux'

injectReducer('knowledgeBaseEditArticle', reducer)

const EditArticle = () => {

	const dispatch = useDispatch()

	const mode = useSelector((state) => state.knowledgeBaseEditArticle.state.mode)

	const query = useQuery()

	const id = query.get('id')
	
	useEffect(() => {
		fetchData()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const fetchData = () => {	
		const categoryLabel = query.get('categoryLabel')
		const categoryValue = query.get('categoryValue')

		if (id) {
			dispatch(getArticle({id}))
		}

		if (!id) {
			dispatch(setMode('add'))
			dispatch(setArticle(''))
		}

		if(categoryLabel && categoryValue) {
			dispatch(setCategory({categoryLabel, categoryValue}))
		}

	}

	const onModeChange = (mode) => {
		dispatch(setMode(mode))
	}

	return (
		<Container>
			<AdaptableCard>
				<div className="max-w-[800px] mx-auto">
					<div className="flex justify-between items-center mb-4">
						<h3>
							{mode === 'edit' && <span>Edit Article</span>}
							{mode === 'add' && <span>Add Article</span>}
							{mode === 'preview' && <span>Preview Article</span>}
						</h3>
						{
							mode === 'preview' ? 
							(
								<Button 
									onClick={() => onModeChange(id ? 'edit' : 'add')} 
									size="sm"
								>
									Back
								</Button>
							)
							:
							(
								<Button 
									onClick={() => onModeChange('preview')} 
									size="sm"
								>
									Preview
								</Button>
							)
						}
						
					</div>
					<Editor mode={mode} />
				</div>
			</AdaptableCard>
		</Container>
	)
}

export default EditArticle