import React from 'react'
import { AdaptableCard, Container } from 'components/shared'

const logData = [
	{
		version: '1.1.6',
		date: '16 Dec 2022',
		updateContent: [
			'[Fix] Dropdown submenu display false direction in RTL',
		]
	},
	{
		version: '1.1.5',
		date: '08 Dec 2022',
		updateContent: [
			'[Fix] TimeInput display order issue in RTL',
			'[Fix] DateRangePicker incorrect corner display in RTL',
		]
	},
	{
		version: '1.1.4',
		date: '07 Dec 2022',
		updateContent: [
			'[Fix] Table header incorrect text alignment RTL',
			'[Fix] DataTable checkbox not reset when data changed',
			'[Fix] DataPicker caret in RTL',
			'[Fix] Radio unable to check with group name'
		]
	},
	{
		version: '1.1.3',
		date: '06 Dec 2022',
		updateContent: [
			'[Fix] Side nav incorrect menu item padding in RTL'
		]
	},
	{
		version: '1.1.2',
		date: '06 Dec 2022',
		updateContent: [
			'[Fix] Side nav incorrect tooltip arrow in RTL',
			'[Fix] Side nav incorrect sub menu display in RTL',
		]
	},
	{
		version: '1.1.1',
		date: '03 Dec 2022',
		updateContent: [
			'[Fix] Chart grid line missing',
			'[Fix] Map demo page broken',
			'[Update] Documentation',
		]
	},
	{
		version: '1.1.0',
		date: '18 Nov 2022',
		updateContent: [
			'[Fix] Map component demo missing resources.',
			'[Replace] Dependencies @vx/pattern with @visx/patter.',
			'[Replace] Dependencies react-custom-scrollbars with react-custom-scrollbars-2.',
			'[Replace] Dependencies react-html-parser with html-react-parser.',
			'[Update] Dependencies react-select to 5.6.1',
			'[Update] Dependencies react-simple-maps to 3.0.0',
			'[Update] Dependencies tailwind-safelist-generator to 1.0.0',
			'[Change] import ReactHtmlParser from html-react-parser',
			'[Change] import Scrollbars from react-custom-scrollbars-2',
		]
	},
	{
		version: '1.0.6',
		date: '12 Nov 2022',
		updateContent: [
			'[Add] signUp method to useAuth.',
			'[Change] signUp handler with useAuth signUp method.',
			'[Update] Documentation (Authentication, MockAPi, App config).',
			'[Update] tourPath default value in starter app.config.'
		]
	},
	{
		version: '1.0.5',
		date: '06 Nov 2022',
		updateContent: [
			'[Fix] Dark mode not apply to StackedSideNav menu.',
		]
	},
	{
		version: '1.0.4',
		date: '03 Nov 2022',
		updateContent: [
			'[Fix] Mixed Form Control code demo which will cause warning.',
			'[Fix] Unable to set theme from config, hence remove theme from persist state in starter kit.',
			'[Remove] Binded data from UserDropdown component in starter kit.',
			'[Remove] Duplicated postcss-import from package.json dependencies which already included in devDependencies.',
			'[Change] Enable mock api by default in starter kit.'
		]
	},
	{
		version: '1.0.3',
		date: '12 Oct 2022',
		updateContent: [
			'[Fix] Menu item collapsing issue in starter pack.',
			'[Fix] ActivityLog filter panel overlap in mobile view.',
			'[Fix] App.js react in jsx scope issue.',
		]
	},
	{
		version: '1.0.2',
		date: '03 Oct 2022',
		updateContent: [
			'[Fix] Notification dropdown down overflow in mobile'
		]
	},
	{
		version: '1.0.1',
		date: '20 Sep 2022',
		updateContent: [
			'[Fix] Redux persistence abnormal.'
		]
	},
	{
		version: '1.0.0',
		date: '15 Sep 2022',
		updateContent: [
			'[Release] Initial Release.'
		]
	},
]

const Log = props => {
	return (
		<div className={`py-4 ${props.border && 'border-bottom'}`}>
			<div className="flex items-center">
				<h5 className="font-weight-normal mb-0 mr-3">{props.version}</h5>
				<code>{props.date}</code>
			</div>
			<div className="api-container p-0 border-0 mt-3">
				{props.children}
			</div>
		</div>
	)
}

const Changelog = () => {
	return (
		<Container>
            <AdaptableCard>
                <h4>Changelog</h4>
                {
                    logData.map(elm => (
                        <Log key={elm.version} version={`v${elm.version}`} date={elm.date}>
                            {
                                elm.updateContent.length > 0 ? 
                                <ul>
                                    {
                                        elm.updateContent.map((item, i) => (
                                            <li key={i}>- {item}</li>
                                        ))
                                    }
                                </ul>
                                :
                                null
                            }
                        </Log>
                    ))
                }
            </AdaptableCard>
		</Container>
	)
}

export default Changelog