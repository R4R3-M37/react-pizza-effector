import React from 'react'

import { Header } from '~/widgets/header/Header'

export const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<div className='wrapper'>
			<Header />
			<div className='content'>{children}</div>
		</div>
	)
}
