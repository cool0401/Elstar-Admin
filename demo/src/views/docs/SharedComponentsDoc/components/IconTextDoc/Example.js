import React from 'react'
import { IconText } from 'components/shared'
import { HiClock } from 'react-icons/hi'

const Example = () => {
  return (
    <IconText 
      textClass="text-sm font-semibold" 
      className="text-emerald-500" 
      icon={<HiClock className="text-lg" />}
    >
      In Progress
    </IconText>
  )
}

export default Example