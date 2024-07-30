import React, { useRef } from 'react'
import { Dialog, Button, Input } from 'components/ui'
import { ConfirmDialog } from 'components/shared'
import { 
	toggleArticleDeleteConfirmation,
	toggleCategoryDeleteConfirmation,
	toggleCategoryRenameDialog,
	toggleAddCategoryDialog
} from '../store/stateSlice'
import { setCategorizedArticles } from '../store/dataSlice'
import { useDispatch, useSelector } from 'react-redux'
import cloneDeep from 'lodash/cloneDeep'
import uniqueId from 'lodash/uniqueId'

const Confirmations = ({data}) => {

	const dispatch = useDispatch()

	const categoryRenameInputRef = useRef()
	const categoryAddInputRef = useRef()

	const articleDeleteConfirmation = useSelector((state) => state.knowledgeBaseManageArticles.state.articleDeleteConfirmation)
	const categoryDeleteConfirmation = useSelector((state) => state.knowledgeBaseManageArticles.state.categoryDeleteConfirmation)
	const categoryRenameDialog = useSelector((state) => state.knowledgeBaseManageArticles.state.categoryRenameDialog)
	const categoryAddDialog = useSelector((state) => state.knowledgeBaseManageArticles.state.categoryAddDialog)
	const selected = useSelector((state) => state.knowledgeBaseManageArticles.state.selected)

	const onArticleDeleteConfirmationClose = () => {
		dispatch(toggleArticleDeleteConfirmation(false))
	}

	const onArticleDeleteConfirm = () => {
		const allArticles = cloneDeep(data)
		const removedData = allArticles.map(categories => {
			if (categories.value === selected.categoryValue) {
				categories.articles = categories.articles.filter(article => article.id !== selected.id)
			}
			return categories
		})
		dispatch(toggleArticleDeleteConfirmation(false))
		dispatch(setCategorizedArticles(removedData))
	}

	const onCategoryRenameDialogClose = () => {
		dispatch(toggleCategoryRenameDialog(false))
	}

	const onRenameDialogConfirm = () => {
		const allArticles = cloneDeep(data)
		const renamedData = allArticles.map(categories => {
			if (categories.value === selected.categoryValue) {
				categories.label = categoryRenameInputRef.current.value
			}
			return categories
		})
		dispatch(toggleCategoryRenameDialog(false))
		dispatch(setCategorizedArticles(renamedData))
	}

	const onCategoryDeleteConfirmationClose = () => {
		dispatch(toggleCategoryDeleteConfirmation(false))
	}

	const onCategoryDeleteConfirm = () => {
		const allArticles = cloneDeep(data)
		const removedData = allArticles.filter(categories => categories.value !== selected.categoryValue)
		dispatch(toggleCategoryDeleteConfirmation(false))
		dispatch(setCategorizedArticles(removedData))
	}

	const onCategoryAddDialogClose = () => {
		dispatch(toggleAddCategoryDialog(false))
	}

	const onCategoryAddDialogConfirm = () => {
		
		const allArticles = cloneDeep(data)
		const newData = [{
			label: categoryAddInputRef.current.value,
			value: uniqueId('new-category'),
			articles: []
		}, ...allArticles]
		dispatch(setCategorizedArticles(newData))
		dispatch(toggleAddCategoryDialog(false))
	}
		
	return (
		<>
			<ConfirmDialog
				isOpen={articleDeleteConfirmation}
				onClose={onArticleDeleteConfirmationClose}
				onRequestClose={onArticleDeleteConfirmationClose}
				type="danger"
				title="Delete article"
				onCancel={onArticleDeleteConfirmationClose}
				onConfirm={onArticleDeleteConfirm}
				confirmButtonColor="red-600"
			>
				<p>Are you sure you want to delete this article? This action cannot be undone.</p>
			</ConfirmDialog>
			<ConfirmDialog
				isOpen={categoryDeleteConfirmation}
				onClose={onCategoryDeleteConfirmationClose}
				onRequestClose={onCategoryDeleteConfirmationClose}
				type="danger"
				title="Delete category"
				onCancel={onCategoryDeleteConfirmationClose}
				onConfirm={onCategoryDeleteConfirm}
				confirmButtonColor="red-600"
			>
				<p>
					Are you sure you want to delete this category?
					All the articles under this category will be deleted as well.  
					All This action cannot be undone.
				</p>
			</ConfirmDialog>
			<Dialog
				isOpen={categoryRenameDialog}
				onClose={onCategoryRenameDialogClose}
				onRequestClose={onCategoryRenameDialogClose}
			>
				<h5 className="mb-4">Rename Category</h5>
				<div>
					<Input ref={categoryRenameInputRef} />
				</div>
				<div className="text-right mt-6">
					<Button className="ltr:mr-2 rtl:ml-2" variant="plain" onClick={onCategoryRenameDialogClose}>Cancel</Button>
					<Button variant="solid" onClick={onRenameDialogConfirm}>Confirm</Button>
				</div>
			</Dialog>
			<Dialog
				isOpen={categoryAddDialog}
				onClose={onCategoryAddDialogClose}
				onRequestClose={onCategoryAddDialogClose}
			>
				<h5 className="mb-4">Add Category</h5>
				<div>
					<Input ref={categoryAddInputRef} />
				</div>
				<div className="text-right mt-6">
					<Button
						size="sm"
						className="ltr:mr-2 rtl:ml-2" 
						variant="plain" 
						onClick={onCategoryAddDialogClose}
					>
						Cancel
					</Button>
					<Button 
						size="sm"
						variant="solid" 
						onClick={onCategoryAddDialogConfirm}
					>
						Add
					</Button>
				</div>
			</Dialog>
		</>
	)
}

export default Confirmations