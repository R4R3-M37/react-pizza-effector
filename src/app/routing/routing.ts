import { createHistoryRouter } from 'atomic-router'
import { createBrowserHistory } from 'history'

import { cartRoute, homeRoute, notFoundRoute } from '~/shared/routes'

const routes = [
	{ path: '/', route: homeRoute },
	{ path: '/cart', route: cartRoute }
]

export const router = createHistoryRouter({
	routes,
	notFoundRoute
})

const history = createBrowserHistory()

router.setHistory(history)
