import React from 'react'

import { CartBlock } from '~/widgets/header/ui/CartBlock'
import { LogoBlock } from '~/widgets/header/ui/LogoBlock'

export const Header = () => {
	return (
		<div className='header'>
			<div className='container'>
				<LogoBlock />
				<CartBlock />
			</div>
		</div>
	)
}
