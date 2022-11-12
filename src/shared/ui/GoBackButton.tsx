import { Link } from 'atomic-router-react'
import React from 'react'

import { homeRoute } from '~/shared/routes'
import { LeftArrowIcon } from '~/shared/ui/icon/LeftArrowIcon'

export const GoBackButton = () => {
	return (
		<Link to={homeRoute} className='button button--outline button--add go-back-btn'>
			<LeftArrowIcon />
			<span>Вернуться назад</span>
		</Link>
	)
}
