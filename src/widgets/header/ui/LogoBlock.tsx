import { Link } from 'atomic-router-react'
import React from 'react'

import { homeRoute } from '~/shared/routes'
import { PizzaIcon } from '~/shared/ui/icon/PizzaIcon'

export const LogoBlock = () => {
	return (
		<Link to={homeRoute}>
			<div className='header__logo'>
				<PizzaIcon />
				<div>
					<h1>React Pizza V2</h1>
					<p>самая вкусная пицца во вселенной</p>
				</div>
			</div>
		</Link>
	)
}
