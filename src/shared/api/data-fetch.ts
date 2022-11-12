import { chainRoute } from 'atomic-router'
import { createEffect, createStore, guard, restore } from 'effector'

// eslint-disable-next-line boundaries/element-types
import { category } from '~/features/category/model'
// eslint-disable-next-line boundaries/element-types
import { sortPopup } from '~/features/sort/model'

import { RootDataItem } from '~/shared/api/types'
import { homeRoute } from '~/shared/routes'

export const getPizzaFx = createEffect(async (query: { sort: number; category: string }): Promise<RootDataItem[]> => {
	const categoryObject: { [key: string]: string } = {
		Все: '',
		Мясные: '0',
		Вегетарианская: '1',
		Гриль: '2',
		Острые: '3',
		Закрытые: '4'
	}
	const sortObject: { [key: string]: string } = {
		популярности: 'rating',
		цене: 'price',
		алфавиту: 'name'
	}

	const option = `category=${categoryObject[query.category] || ''}&sortBy=${sortObject[query.sort] || 'rating'}`

	const url = `https://6291e81dcd0c91932b6a02b7.mockapi.io/api/v1/db/?${option}`

	const response = await fetch(url)

	return await response.json()
})

export const $pizza = restore(getPizzaFx.doneData, null)

const $fetchQuery = createStore<any>({})
	.on(category.setCategory, (state, payload) => ({ ...state, category: payload }))
	.on(sortPopup.setSort, (state, payload) => ({ ...state, sort: payload }))

guard({
	clock: [category.setCategory, sortPopup.setSort],
	filter: (source) => source !== false,
	source: $fetchQuery,
	target: getPizzaFx
})

export const pizzaLoadedRoute = chainRoute({
	route: homeRoute,
	beforeOpen: {
		effect: getPizzaFx,
		mapParams: ({ params }: { params: any }) => params
	}
})
