import React from 'react'

import DemoLayout from 'components/docs/DemoLayout'

// Demo
import Simple from './Simple'
import WithForm from './WithForm'

const mdPath = 'FormNumericInputDoc/'

const demoHeader = {
	title: 'FormNumericInput',
	desc: 'FormNumericInput wrapped Input component with <a class="text-indigo-600 underline" href="https://github.com/s-yadav/react-number-format" target="_blank">react-number-format</a>.'
}

const demos = [
	{
		mdName: 'Simple',
		mdPath: mdPath,
		title: 'Simple',
		desc: `Basic usage of FormNumericInput, all <a class="text-indigo-600 underline" href="https://github.com/s-yadav/react-number-format#props" target="_blank">react-number-format props</a> can be apply to this component as well.`,
		component: <Simple />
	},
	{
		mdName: 'WithForm',
		mdPath: mdPath,
		title: 'WithForm',
		desc: `Example usage with <a class="text-indigo-600 underline" href="https://formik.org/" target="_blank">Formik</a>`,
		component: <WithForm />
	},
]

const demoApi = [
	{
		component: 'FormNumericInput',
		api: [
			{
				propName: 'field',
				type: `<code>{string: any, value: any, onBlur:() => void, onChange:() => void}</code>`,
				default: `-`,
				desc: 'Formik field props'
			},
			{
				propName: 'form',
				type: `<a class="text-indigo-600 underline" href="https://formik.org/docs/api/formik#props-1" target="_blank"><code>FormikProp</code></a>`,
				default: `-`,
				desc: 'Formik field props'
			},
			{
				propName: 'inputPrefix',
				type: `<code>string</code> | <code>ReactNode</code>`,
				default: `-`,
				desc: 'Render a prefix content inside Input'
			},
			{
				propName: 'inputSuffix',
				type: `<code>string</code> | <code>ReactNode</code>`,
				default: `-`,
				desc: 'Render a suffix content inside Input'
			},
		]
	}
]

const FormNumericInputDoc = () => {
	return (
		<DemoLayout 
			innerFrame={false}
			header={demoHeader} 
			demos={demos} 
			api={demoApi} 
			mdPrefixPath="docs/SharedComponentsDoc/components" 
		/>
	)
}

export default FormNumericInputDoc
