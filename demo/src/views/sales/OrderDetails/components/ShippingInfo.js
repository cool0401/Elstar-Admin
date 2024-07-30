import React from 'react'
import { Avatar, Card, Button } from 'components/ui'
import NumberFormat from 'react-number-format'

const ShippingInfo = ({data}) => {
  return (
    <Card className="mb-4">
      <h5 className="mb-4">Shipping</h5>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Avatar size={60} src={data.shippingLogo} />
          <div className="ltr:ml-2 rtl:mr-2">
            <h6>{data.shippingVendor}</h6>
            <span>Delivery in {data.estimatedMin} ~ {data.estimatedMax} days</span>
          </div>
        </div>
        <span className="font-semibold">
          <NumberFormat
            displayType="text"
            value={(Math.round(data.deliveryFees * 100) / 100).toFixed(2)} 
            prefix={'$'} 
            thousandSeparator={true} 
          />
        </span>
      </div>
      <Button block>View Carrier Details</Button>
    </Card>
  )
}

export default ShippingInfo