import React from 'react'
import { SyntaxHighlighter } from 'components/shared'
import { Alert } from 'components/ui'

const ApiIntegration = () => {
	return (
		<>
			<p>Follow the steps below to make backend api linkage working.</p>
			<ol>
				<li>
					<p>First, create a <code>xxxService.js</code> file(depends on your feature or module) under <code>services</code> directory</p>
				</li>
				<li>
					<p>Declare an async function returning <code>ApiService.fetchData</code> method and pass in your api configuration details as the code below:</p>
					<SyntaxHighlighter language="js">{`import ApiService from "./ApiService"

export async function yourApi (data) {
    return ApiService.fetchData({
        url: '/your-api-url',
        method: 'post',
        data
    })
}
...`}</SyntaxHighlighter>
				</li>
				<li>
					<p>And now you can hook up this API in your component</p>
					<SyntaxHighlighter language="js">{`import { useEffect } from 'react'
import { yourApi } from './YourService.js'

const YourComponent = props => {

	const fetchData = async () => {
		const reqeustParam = { key: 'value'}
		try {
			const resp = await yourApi(reqeustParam)
			if (resp.data) {
				...do something
			}
		} catch (errors) {
			...handle errors
		}
	}

	useEffect(() => {
		fetchData()
	}, [])

	return (
		...
	)`}</SyntaxHighlighter>
				</li>
				<li>
					<p>you can also use this service with <code>createAsyncThunk</code></p>
					<SyntaxHighlighter language="jsx">{`import { createSlice } from '@reduxjs/toolkit'
import { yourApi } from './YourService.js'

export const getApiData = createAsyncThunk('sliceName/getApiData',async (data) => {
    const response = await yourApi(data)
    return response.data
})

const yourSlice = createSlice({
	...
	extraReducers: (builder) => {
		builder
			.addCase(getApiData.fulfilled, (state, action) => {
				...
			})
	},
})

export const { someActionFromYourSlice } = yourSlice.actions

export default yourSlice.reducer`}</SyntaxHighlighter>
				</li>
			</ol>
			<Alert type="info" title="Note:" showIcon>
				If you want to connect API with your dev server, please change <code>enableMock</code> to <code>false</code> in <code>src/configs/app.config.js</code>
			</Alert> 
			<div className="mt-10" id="proxying">
				<h5>Proxying</h5>
				<p className="mt-1">
					Developer often consume API from different servers than the frontend application, 
					there are complications that arise as a result of requests being sent across both servers, 
					here is some way to setting up a proxy server.
				</p>
				<ul>
					<li>
						<strong>Add proxy package.json</strong>
						<p className="mt-1">A simple & quick solution to proxying a server</p>
						<SyntaxHighlighter language="js">{`"proxy": "http:yourDevDomain.com"`}</SyntaxHighlighter>
					</li>
					<li>
						<strong>Manually setup</strong>
						<p className="mt-1">
							You can choose to setup with <code>http-proxy-middleware</code> for more flexible configuration.
						</p>
						<p>Create <code>setupProxy.js</code> and place under <code>src/</code> directory with code following code:</p>
						<SyntaxHighlighter language="js">{`const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function(app) {
	app.use(
		'/api',
			createProxyMiddleware({
			target: 'http:yourDevDomain.com', // <--- config the url based on your backend server
			changeOrigin: true,
		})
	)
}`}</SyntaxHighlighter>
					</li>
				</ul>
			</div>
		</>
	)
}

export default ApiIntegration