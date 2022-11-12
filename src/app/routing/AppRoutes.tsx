import { Route } from 'atomic-router-react'
import React from 'react'

import { CartPage } from '~/pages/cart-page/CartPage'
import { HomePage } from '~/pages/home-page/HomePage'
import { NotFoundPage } from '~/pages/not-found/NotFoundPage'

import { cartRoute, homeRoute, notFoundRoute } from '~/shared/routes'

export const AppRoutes = () => {
	return (
		<>
			<Route route={notFoundRoute} view={NotFoundPage} />

			<Route route={homeRoute} view={HomePage} />
			<Route route={cartRoute} view={CartPage} />
		</>
	)
}
