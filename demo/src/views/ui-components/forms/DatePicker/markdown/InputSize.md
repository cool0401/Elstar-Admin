```jsx
import React from 'react'
import { DatePicker } from 'components/ui'

const InputSize = () => {

    const date = new Date()

    return (
        <div>
            <DatePicker 
                className="mb-4" 
                placeholder="Select a date" 
                defaultValue={date}
                inputSize="sm"
            />
            <DatePicker 
                className="mb-4" 
                placeholder="Select a date" 
                defaultValue={date}
            />
            <DatePicker 
                className="mb-4" 
                placeholder="Select a date" 
                defaultValue={date}
                inputSize="lg"
            />
        </div>
    )
}

export default InputSize
```