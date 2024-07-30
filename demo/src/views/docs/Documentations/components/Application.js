import React from 'react'
import { SyntaxHighlighter } from 'components/shared'
import ReactHtmlParser from 'html-react-parser'
import { Table } from 'components/ui'

const { Tr, Th, Td, THead, TBody } = Table

const metadata = {
    api: [
        {
            propName: 'apiPrefix',
            type: `<code>string</code>`,
            defaultDemo: `<code>'/api'</code>`,
            defaultStarter: `<code>'/api'</code>`,
            desc: 'Prefix path for api url'
        },
        {
            propName: 'authenticatedEntryPath',
            type: `<code>string</code>`,
            defaultDemo: `<code>'/app/sales/dashboard'</code>`,
            defaultStarter: `<code>'/home'</code>`,
            desc: 'URL that will redirect after authenticated'
        },
        {
            propName: 'unAuthenticatedEntryPath',
            type: `<code>string</code>`,
            defaultDemo: `<code>'/sign-in'</code>`,
            defaultStarter: `<code>'/sign-in'</code>`,
            desc: 'URL that will redirect if authentication invalid'
        },
        {
            propName: 'tourPath',
            type: `<code>string</code>`,
            defaultDemo: `<code>'/app/account/kyc-form'</code>`,
            defaultStarter: `<code>'/'</code>`,
            desc: 'URL that will redirect after signup,'
        },
        {
            propName: 'enableMock',
            type: `<code>boolean</code>`,
            defaultDemo: '<code>true</code>',
            defaultStarter: '<code>true</code>',
            desc: 'Whether to point api linkage to mock server'
        },
    ]
}

const Application = () => {
	return (
		<>
			<p>You can configure some static app related values <code>src/configs/app.config.js</code>, here are some default configurations.</p>
			<span><i>demo</i></span>
            <SyntaxHighlighter language="js">{`const appConfig = {
    apiPrefix: '/api',
    authenticatedEntryPath: '/app/sales/dashboard',
    unAuthenticatedEntryPath: '/sign-in',
    tourPath: '/app/account/kyc-form',
    enableMock: true
}`}</SyntaxHighlighter>
            <span><i>demo</i></span>
            <SyntaxHighlighter language="js">{`const appConfig = {
    apiPrefix: '/api',
    authenticatedEntryPath: '/home',
    unAuthenticatedEntryPath: '/sign-in',
    tourPath: '/',
    enableMock: true
}`}</SyntaxHighlighter>
            <h5 className="-mb-2 mt-6">Metadata</h5>
            <Table className={`demo-api-table`}>
                <THead>
                    <Tr>
                        <Th>Properties</Th>
                        <Th>Description</Th>
                        <Th>Type</Th>
                        <Th>Default(Demo)</Th>
                        <Th>Default(Stater)</Th>
                    </Tr>
                </THead>
                <TBody>
                    {
                        metadata.api.map(item => (
                            <Tr key={`row-${item.propName}`}>
                                <Td className="font-semibold">{item.propName}</Td>
                                <Td>{ReactHtmlParser(item.desc || '')}</Td>
                                <Td>{ReactHtmlParser(item.type || '')}</Td>
                                <Td>{ReactHtmlParser(item.defaultDemo || '')}</Td>
                                <Td>{ReactHtmlParser(item.defaultStarter || '')}</Td>
                            </Tr>
                        ))
                    }
                </TBody>
            </Table>
		</>
	)
}

export default Application