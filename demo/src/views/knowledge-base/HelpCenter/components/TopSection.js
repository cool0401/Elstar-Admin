import React, { useRef } from 'react'
import { Container } from 'components/shared'
import { setSearchCategory, queryArticles, setQueryText, setSearch } from '../store/dataSlice'
import { InputGroup, Input, Select, Button, Notification, toast } from 'components/ui'
import { HiOutlineSearch } from 'react-icons/hi'
import { useDispatch, useSelector } from 'react-redux'

const categoryOptions = [
	{ label: 'All', value: '' },
	{ label: 'Survey', value: 'survey' },
	{ label: 'Themes', value: 'themes' },
	{ label: 'Security', value: 'security' },
	{ label: 'Integration', value: 'integration' },
	{ label: 'Media', value: 'media' },
	{ label: 'Analytic', value: 'analytic' },
	{ label: 'Chatbot', value: 'chatbot' },
	{ label: 'Commission', value: 'commission' }
]

const TopSection = () => {

	const dispatch = useDispatch()

	const searchCategory = useSelector((state) => state.knowledgeBaseHelpCenter.data.searchCategory)

	const searchInput = useRef()
	
	const onSearch = () => {
		const text = searchInput.current.value
		if(text) {
			dispatch(queryArticles({queryText: text, category: searchCategory}))
			dispatch(setQueryText(text))
			dispatch(setSearch(true))
		} else {
			toast.push(
				<Notification title="Please key in any text to search" type="danger" />,
				{
					placement: 'top-center'
				}
			)
		}
	}

	const onCategoryChange = (selected) => {
		dispatch(setSearchCategory(selected.value))
	}

	return (
		<section className="flex flex-col justify-center h-[200px] bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-600">
			<Container className="flex flex-col items-center px-4">
				<h3 className="mb-6 text-center">Get your question answered quickly here!</h3>
				<InputGroup className="mb-4 xl:min-w-[800px]">
					<Input ref={searchInput} placeholder="Search..." />
					<div className="min-w-[120px]">
						<Select 
							isSearchable={false} 
							placeholder="Category" 
							options={categoryOptions}
							onChange={onCategoryChange}
							value={categoryOptions.filter(option => option.value === searchCategory)}
						/>
					</div>
					<Button onClick={onSearch} icon={<span className="mx-4"><HiOutlineSearch /></span>}/>
				</InputGroup>
			</Container>
		</section>
	)
}

export default TopSection