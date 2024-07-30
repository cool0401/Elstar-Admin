import React from 'react'
import { SyntaxHighlighter } from 'components/shared'
import DemoComponentApi from 'components/docs/DemoComponentApi'

const OverallThemeConfig = () => {
	return (
		<>
			<p><code>src/configs/theme.config.js</code> has all template configurations listed with default valid values in all fields. 
				You can change the config based on your needs. Here is the default configuration:
			</p>
			<SyntaxHighlighter language="js">{`import { THEME_ENUM } from 'constants/theme.constant'

export const themeConfig = {
    themeColor: 'indigo',
    direction: THEME_ENUM.DIR_LTR,
    mode: THEME_ENUM.MODE_LIGHT,
    locale: 'en',
    primaryColorLevel: 600,
    cardBordered: true,
    panelExpand: false,
    controlSize: 'md',
    navMode: 'transparent',
    layout: {
        type: THEME_ENUM.LAYOUT_TYPE_MODERN,
        sideNavCollapse: false,
    },
}`}</SyntaxHighlighter>
			<div className="mt-10" id="properties">
				<h5>Properties</h5>
				<DemoComponentApi hideApiTitle api={
						[
							{
								api: [
									{
										propName: 'themeColor',
										type: `<code>string</code> | <a href="https://tailwindcss.com/docs/customizing-colors" rel="noreferrer" target="_blank">tailwind preset color palette</a>`,
										default: `<code>'indigo'</code>`,
										desc: 'Theme color of the template'
									},
									{
										propName: 'direction',
										type: `<code>'ltr'</code> | <code>'rtl'</code>`,
										default: `<code>'ltr'</code>`,
										desc: `Direction of the template`
									},
									{
										propName: 'mode',
										type: `<code>'light'</code> | <code>'dark'</code>`,
										default: `<code>'ltr'</code>`,
										desc: `Set Light or Dark mode for the template`
									},
									{
										propName: 'locale',
										type: `<code>string</code>`,
										default: `<code>'en'</code>`,
										desc: `Locale value`
									},
									{
										propName: 'primaryColorLevel',
										type: `<code>number</code> | <a href="https://tailwindcss.com/docs/customizing-colors" rel="noreferrer" target="_blank">tailwind preset color palette</a>`,
										default: `<code>600</code>`,
										desc: `Color level of <code>themeColor</code>`
									},
									{
										propName: 'cardBordered',
										type: `<code>boolean</code>`,
										default: `<code>true</code>`,
										desc: `Whether to set all card having border by default`
									},
									{
										propName: 'panelExpand',
										type: `<code>boolean</code>`,
										default: `<code>false</code>`,
										desc: `Whether to expand side panel by default`
									},
									{
										propName: 'controlSize',
										type: `<code>'xs'</code> | <code>'sm'</code> | <code>'md'</code> | <code>'lg'</code>`,
										default: `<code>'md'</code>`,
										desc: `Initialize all controlinput size`
									},
									{
										propName: 'navMode',
										type: `<code>'transparent'</code> | <code>'light'</code> | <code>'dark'</code> | <code>'themed'</code>`,
										default: `<code>'transparent'</code>`,
										desc: `Color of navigation`
									},
									{
										propName: 'layout.type',
										type: `<code>'blank'</code>  | <code>'classic'</code> | <code>'modern'</code> | <code>'simple'</code> | <code>'decked'</code> | <code>'stackedSide'</code>`,
										default: `<code>'modern'</code>`,
										desc: 'Type of the application layout'
									},
									{
										propName: 'layout.sideNavCollapse',
										type: `<code>boolean</code>`,
										default: `<code>false</code>`,
										desc: `Whether to collapse the side navigation (only only applicable when <code>type</code> is <code>'classic'</code> or <code>'modern'</code>)`
									},
								]
							}
						]
					} 
				/>
			</div>
			<div className="mt-10" id="properties">
				<h5>Persisting</h5>
				<p>
					Some of the <code>themeConfig</code> field was persisted in our redux, 
					you can visit <code>src/store/theme/themeSlice.js</code> & remove the field 
					you don't wish to persist from the <code>initialState</code>.
				</p>
				<SyntaxHighlighter language="js">{`const initialState = {
	themeColor: themeConfig.themeColor,
    direction: themeConfig.direction,
    mode: themeConfig.mode,
    locale: themeConfig.locale,
    primaryColorLevel: themeConfig.primaryColorLevel,
    panelExpand: themeConfig.panelExpand,
    navMode: themeConfig.navMode,
    layout: themeConfig.layout
}`}</SyntaxHighlighter>
			</div>
		</>
	)
}

export default OverallThemeConfig