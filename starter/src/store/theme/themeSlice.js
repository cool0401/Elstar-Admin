import { createSlice } from '@reduxjs/toolkit'
import { themeConfig } from 'configs/theme.config'
import { 
	LAYOUT_TYPE_MODERN,
	LAYOUT_TYPE_CLASSIC,
	LAYOUT_TYPE_STACKED_SIDE,
	NAV_MODE_TRANSPARENT, 
	NAV_MODE_LIGHT,
	NAV_MODE_DARK,
	NAV_MODE_THEMED,
	MODE_DARK,
	MODE_LIGHT,
	LAYOUT_TYPE_DECKED
} from 'constants/theme.constant'

const initialNavMode = () => {

	if (themeConfig.layout.type === LAYOUT_TYPE_MODERN && themeConfig.navMode !== NAV_MODE_THEMED) {
		return NAV_MODE_TRANSPARENT
	}

	return themeConfig.navMode
}

const initialState = {
	themeColor: themeConfig.themeColor,
    direction: themeConfig.direction,
    mode: themeConfig.mode,
    locale: themeConfig.locale,
    primaryColorLevel: themeConfig.primaryColorLevel,
    panelExpand: themeConfig.panelExpand,
    navMode: initialNavMode(),
    layout: themeConfig.layout
}

const availableNavColorLayouts = [
	LAYOUT_TYPE_CLASSIC, 
	LAYOUT_TYPE_STACKED_SIDE, 
	LAYOUT_TYPE_DECKED
]

export const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		setDirection: (state, action) => {
			state.direction = action.payload
		},
		setMode: (state, action) => {

			const availableColorNav = availableNavColorLayouts.includes(state.layout.type)

			if (availableColorNav && action.payload === MODE_DARK  && state.navMode !== NAV_MODE_THEMED) {
				state.navMode = NAV_MODE_DARK
			}
			if (availableColorNav && action.payload === MODE_LIGHT && state.navMode !== NAV_MODE_THEMED) {
				state.navMode = NAV_MODE_LIGHT
			}
			state.mode = action.payload
		},
		setLang: (state, action) => {
			state.locale = action.payload
		},
		setLayout: (state, action) => {
			state.cardBordered = action.payload === LAYOUT_TYPE_MODERN
			if (action.payload === LAYOUT_TYPE_MODERN) {
				state.navMode = NAV_MODE_TRANSPARENT
			}

			const availableColorNav = availableNavColorLayouts.includes(action.payload)

			if (availableColorNav && state.mode === MODE_LIGHT) {
				state.navMode = NAV_MODE_LIGHT
			}

			if (availableColorNav && state.mode === MODE_DARK) {
				state.navMode = NAV_MODE_DARK
			}

			state.layout = {
				...state.layout, 
				...{type: action.payload}
			}
		},
		setPreviousLayout: (state, action) => {
			state.layout.previousType = action.payload
		},
		setSideNavCollapse: (state, action) => {
			state.layout = {
				...state.layout, 
				...{sideNavCollapse: action.payload}
			} 
		},
		setNavMode: (state, action) => {
			if (action.payload !== 'default') {
				state.navMode = action.payload
			} else {
				if (state.layout.type === LAYOUT_TYPE_MODERN) {
					state.navMode = NAV_MODE_TRANSPARENT
				}

				const availableColorNav = availableNavColorLayouts.includes(state.layout.type)

				if (availableColorNav && state.mode === MODE_LIGHT ) {
					state.navMode = NAV_MODE_LIGHT
				}

				if (availableColorNav && state.mode === MODE_DARK ) {
					state.navMode = NAV_MODE_DARK
				}
			}
		},
		setPanelExpand: (state, action) => {
			state.panelExpand = action.payload
		},
		setThemeColor: (state, action) => {
			state.themeColor = action.payload
		},
		setThemeColorLevel: (state, action) => {
			state.primaryColorLevel = action.payload
		},
	},
})

export const { 
	setDirection, 
	setMode, 
	setLang, 
	setLayout,
	setSideNavCollapse,
	setNavMode,
	setPanelExpand,
	setThemeColor,
	setThemeColorLevel,
	setPreviousLayout
} = themeSlice.actions

export default themeSlice.reducer