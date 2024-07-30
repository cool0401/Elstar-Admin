import React from 'react'
import { Upload } from 'components/ui'

const BeforeUpload = () => {

    const maxUpload = 2

    const beforeUpload = (file, fileList) => {
        let valid = true

        const allowedFileType = ['image/jpeg', 'image/png']
        const maxFileSize = 500000

        if(fileList.length >= maxUpload) {
            return `You can only upload ${maxUpload} file(s)`
        }

        for (let f of file) {
			if (!allowedFileType.includes(f.type)) {
				valid = 'Please upload a .jpeg or .png file!'
			}

            if(f.size >= maxFileSize) {
                valid = 'Upload image cannot more then 500kb!'
            }
		}

        return valid
    }

    const tip = (<p className="mt-2">jpeg or png only (max 500kb)</p>)

    return (
        <div>
            <Upload
                beforeUpload={beforeUpload}
                uploadLimit={maxUpload}
                tip={tip}
            />
        </div>
    )
}

export default BeforeUpload
