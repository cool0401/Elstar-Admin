import React, { Fragment, Suspense } from 'react'
import { Spinner } from 'components/ui'
import shareComponentsDocRoutes from './utilsDocRoutes'
import { Routes, Route, Navigate } from 'react-router-dom'

const UtilsDocView = () => {
	return (
		<Routes>
			{
				shareComponentsDocRoutes.map(group => (
					<Fragment key={group.groupName}>
						{
							group.nav.map(({path, component: Component, label}) => (
								<Route
									key={label}
									path={path} 
									element={
										<Suspense 
											fallback={
												<div className="h-full w-full flex items-center justify-center">
													<Spinner size={40} />
												</div>
											}
										>
											<Component />
										</Suspense>
									}
								/>
							))
						}
					</Fragment>
				))
			}
			<Route path="*" element={<Navigate to="/" replace />} />
		</Routes>
	)
}

export default UtilsDocView