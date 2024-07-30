import React from 'react'
import { Button } from 'components/ui'

const Shape = () => {
    return (
        <div className="flex-wrap inline-flex xl:flex items-center gap-2">
			<Button>Rounded</Button>
			<Button shape="none">None</Button>
            <Button shape="circle">Circle</Button>
        </div>
    )
}

export default Shape