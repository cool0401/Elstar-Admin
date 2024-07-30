```jsx
import React from 'react'
import { DatePicker } from 'components/ui'
import 'dayjs/locale/ko'

const Localization = () => {

    return (
        <DatePicker 
            locale="ko"
            defaultValue={new Date()}
            inputFormat="LL"
        />
    )
}

export default Localization
```