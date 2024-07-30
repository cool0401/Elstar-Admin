import React from 'react'
import { SyntaxHighlighter } from 'components/shared'

const ReduxToolkit = () => {
	return (
		<> 
			<p>
				<a href="https://redux.js.org/" target="_blank" rel="noreferrer">Redux</a> is a popular application state management solution that can be integrated with front-end frameworks like React,
				it allows you to write scalable apps with maintainable codebases,
				however, using redux requires a lot of boilerplate code.
				To reduce the boilerplate codes and facilitate easier functionalities, <a href="https://redux-toolkit.js.org/" target="_blank" rel="noreferrer">Redux toolkit (RTK)</a> is a better option, 
				it comes with comes with built in Redux Thunk Middleware that use for asynchronous actions and standard way to writing Redux logic.
			</p>
			<p>
				You can find out Redux store configurations under <code>src/store/</code>, 
				there's also several slice globally used as following:
			</p>
			<ul>
				<li>
					<strong>theme</strong>
					<p className="m-0">This state handle all theme related data.</p>
				</li>
				<li>
					<strong>auth</strong>
					<p className="m-0">This state handles the app authentication info.</p>
				</li>
				<li>
					<strong>base</strong>
					<p className="m-0">This state is a general app state, you can place any commonly used data here.</p>
				</li>
			</ul>
			<p>We also <a href="https://github.com/rt2zz/redux-persist" target="_blank" rel="noreferrer">redux-persist</a> to keep <code>auth</code> & <code>theme</code> state alive in localStorage.</p>
			<div className="mt-10" id="codeSplitting">
				<h5>Code Splitting</h5>
				<p className="mt-1">We have implemented reducer injection approaches in our code base for a code splitting strategy, it can dynamically add reducers to the store when needed. Here is some example code for reducers registry:</p>
				<SyntaxHighlighter language="js">{`// store/index.js 
import { combineReducers } from '@reduxjs/toolkit'
import yourSlice from './yourSlice'
import anyOtherSlice from './anyOtherSlice'

const reducer = combineReducers({
    yourStateKeyName: yourSlice,
	anyOtherSliceKeyName: anyOtherSlice
})

export default reducer`}</SyntaxHighlighter>
			</div>
			<p>And then you can expose them to your components (we prefer the entry of your view component)</p>
			<SyntaxHighlighter language="jsx">{`import reducer from './store'
import { injectReducer } from 'store/index'
import { useDispatch, useSelector } from 'react-redux'
import { someActionFromYourSlice } from './store/yourSlice'

injectReducer('yourReducerName', reducer)
const YourComponent = () => {

	const dispatch = useDispatch()

	// Use the useSelector hook to access the store state.
	const someStateFromYourSlice = useSelector((state) => state.yourReducerName.yourStateKeyName.someState)

	useEffect(() => {
		// Use useDispatch hook to dispatch an action.
		dispatch(someActionFromYourSlice())
	}, [])

	return (
		<>{someStateFromYourSlice}</>
	)
}`}</SyntaxHighlighter>
			<div className="mt-10" id="creatingNewSlice">
				<h5>Creating New Slice</h5>
				<p className="mt-1">
					Slice is a collection of reducer logic and actions for a single feature,
				 	hence we sugguest to place slice file under your features module folder for better logic scoping. 
					Here is a basic example of a slice.
				</p>
				<SyntaxHighlighter language="jsx">{`import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  someState: ''
}

const yourSlice = createSlice({
  name: 'sliceName',
  initialState,
  reducers: {}
})

export default yourSlice.reducer`}</SyntaxHighlighter>
			</div>
			<div className="mt-10" id="creatingReduces">
				<h5>Creating a reducer</h5>
				<p className="mt-1">
					You can define your reducers in slice as following code:
				</p>
				<SyntaxHighlighter language="jsx">{`import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  someState: ''
}

const yourSlice = createSlice({
  name: 'sliceName',
  initialState,
  reducers: {
	someActionFromYourSlice: (state, action) => {
		state.someState = action.payload
	},
  }
})

export const { someActionFromYourSlice } = yourSlice.actions

export default yourSlice.reducer`}</SyntaxHighlighter>
			</div>
			<div className="mt-10" id="asyncRequestsWithCreateAsyncThunk">
				<h5>Async Requests with createAsyncThunk</h5>
				<p className="mt-1">
					You can also make an API request with <code>createAsyncThunk</code> via extraReducers
				</p>
				<SyntaxHighlighter language="jsx">{`import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { someService } from 'services/SomeService'

export const getApiData = createAsyncThunk('sliceName/getApiData',async (data) => {
    const response = await someService(data)
    return response.data
})

const initialState = {
  someState: ''
  loading: false
}

const yourSlice = createSlice({
  name: 'sliceName',
  initialState,
  reducers: {
	someActionFromYourSlice: (state, action) => {
		state.someState = action.payload
	},
  },
  extraReducers: (builder) => {
    builder
		.addCase(getApiData.fulfilled, (state, action) => {
			state.someState = action.payload
			state.loading = false
		})
		.addCase(getApiData.pending, (state) => {
			state.loading = true
		})
		.addCase(getApiData.rejected, (state) => {
			state.loading = false
		})
  },
})

export const { someActionFromYourSlice } = yourSlice.actions

export default yourSlice.reducer`}</SyntaxHighlighter>
			</div>
			<p>Here's also another example for <code>extrareducers</code> as an object:</p>
			<SyntaxHighlighter language="jsx">{`const yourSlice = createSlice({
  		...,
	  extraReducers: {
		[getApiData.fulfilled]: (state, action) => {
			state.someState = action.payload
			state.loading = false
		},
		[getApiData.pending]: (state) => {
			state.loading = true
		},
		[getApiData.pending]: (state) => {
			state.loading = false
		},
	}
})

export const { someActionFromYourSlice } = yourSlice.actions

export default yourSlice.reducer`}</SyntaxHighlighter>
			<p>You can also study the <a href="https://redux-toolkit.js.org/" target="_blank" rel="noreferrer">redux-toolkit</a> documentation to better understand if you are not familiar redux-toolkit. </p>
		</>
	)
}

export default ReduxToolkit