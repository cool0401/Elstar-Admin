import React from 'react'
import { Button } from 'components/ui'

const Block = () => {
    return (
        <div>
            <Button className="mb-5" block>Block</Button>
            <Button variant="solid" block>Another Block</Button>
        </div>
    )
}

export default Block
