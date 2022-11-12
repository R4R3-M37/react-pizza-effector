import { createEvent } from 'effector'

import { $pizza } from '~/shared/api/data-fetch'
import { RootDataItem } from '~/shared/api/types'

function createPizzaSelectorApi() {
	const setType = createEvent<{ type: string; id: number }>()
	const setSize = createEvent<{ size: number; id: number }>()

	const handleType = (state: RootDataItem[] | null, payload: { type: string; id: number }) =>
		state?.map((pizza) => {
			if (pizza.id === payload.id) {
				let newPrice = pizza.newPrice || pizza.price

				if (payload.type === 'тонкое') newPrice = newPrice - 12
				if (payload.type === 'традиционное') newPrice = newPrice + 12

				return { ...pizza, activeType: payload.type, newPrice }
			}
			return pizza
		})

	const handleSize = (state: RootDataItem[] | null, payload: { size: number; id: number }) =>
		state?.map((pizza) => {
			if (pizza.id === payload.id) {
				let newPrice = pizza.newPrice || pizza.price

				if (payload.size === 26) newPrice = pizza.price
				if (payload.size === 30) newPrice = pizza.price + 12
				if (payload.size === 40) newPrice = pizza.price + 25

				return { ...pizza, activeSize: payload.size, newPrice }
			}
			return pizza
		})

	$pizza.on(setType, handleType)
	$pizza.on(setSize, handleSize)

	return { setType, setSize }
}

export const selector = createPizzaSelectorApi()
