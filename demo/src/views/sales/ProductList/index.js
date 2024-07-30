import React from 'react'
import reducer from './store'
import { injectReducer } from 'store/index'
import { AdaptableCard } from 'components/shared'
import ProductTable from './components/ProductTable'
import ProductTableTools from './components/ProductTableTools'

injectReducer('salesProductList', reducer)

const ProductList = () => {
	return (
		<AdaptableCard className="h-full" bodyClass="h-full">
			<div className="lg:flex items-center justify-between mb-4">
				<h3 className="mb-4 lg:mb-0">Products</h3>
				<ProductTableTools />
			</div>
			<ProductTable />
		</AdaptableCard>
	)
}

export default ProductList