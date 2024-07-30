import React from 'react'
import { Button } from 'components/ui'
import { HiDownload, HiOutlineTrash } from 'react-icons/hi'
import OrderTableSearch from './OrderTableSearch'
import { useSelector, useDispatch } from 'react-redux'
import { setDeleteMode } from '../store/stateSlice'
import { Link } from 'react-router-dom'

const BatchDeleteButton = () => {

  const dispatch = useDispatch()

  const onBatchDelete = () => {
    dispatch(setDeleteMode('batch'))
  }

  return (
    <Button 
      variant="solid" 
      color="red-600"
      size="sm"
      icon={<HiOutlineTrash/>}
      onClick={onBatchDelete}
    >
      Batch Delete
    </Button>
  )
}

const OrdersTableTools = () => {
  const selectedRows = useSelector((state) => state.salesOrderList.state.selectedRows)
  return (
    <div className="flex flex-col lg:flex-row lg:items-center gap-4">
      {selectedRows.length > 0 && <BatchDeleteButton />}
      <Link
				to="/data/order-list.csv" 
				target="_blank" 
				download
			>
				<Button
          block
					size="sm" 
					icon={<HiDownload />}
				>
					Export
				</Button>
			</Link>
      <OrderTableSearch />
    </div>
  )
}

export default OrdersTableTools