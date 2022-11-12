import { createEvent, createStore, sample } from 'effector'

import { RootDataItem } from '~/shared/api/types'

export const cart = createCartApi()

function createCartApi() {
	const addToCart = createEvent<RootDataItem>()
	const removeFromCart = createEvent<RootDataItem>()
	const plusItem = createEvent<{ id: number; type: string; size: number }>()
	const minusItem = createEvent<{ id: number; type: string; size: number }>()
	const clear = createEvent()

	const $cartPrice = createStore<number>(0)

	const handleAddItem = (state: RootDataItem[], payload: RootDataItem) => {
		const cartItem = state.find((pizza) => {
			if (
				pizza.id === payload.id &&
				pizza.name === payload.name &&
				(pizza.activeType || pizza.types[0]) === (payload.activeType || payload.types[0]) &&
				(pizza.activeSize || pizza.sizes[0]) === (payload.activeSize || payload.sizes[0]) &&
				pizza.types[0] === payload.types[0] &&
				pizza.sizes[0] === payload.sizes[0]
			) {
				return pizza
			}
			return false
		})

		if (cartItem) {
			let count = cartItem.count || 1
			cartItem.count = ++count

			return state
		}
		return [...state, { ...payload, count: 1 }]
	}

	const handleRemoveItem = (state: RootDataItem[], payload: RootDataItem) => {
		const cartItem = state.find((pizza) => {
			if (
				pizza.id === payload.id &&
				pizza.name === payload.name &&
				(pizza.activeType || pizza.types[0]) === (payload.activeType || payload.types[0]) &&
				(pizza.activeSize || pizza.sizes[0]) === (payload.activeSize || payload.sizes[0]) &&
				pizza.types[0] === payload.types[0] &&
				pizza.sizes[0] === payload.sizes[0]
			) {
				return pizza
			}
			return false
		})

		if (cartItem) {
			return state.filter((pizza) => {
				if (
					pizza.id === payload.id &&
					pizza.name === payload.name &&
					(pizza.activeType || pizza.types[0]) === (payload.activeType || payload.types[0]) &&
					(pizza.activeSize || pizza.sizes[0]) === (payload.activeSize || payload.sizes[0]) &&
					pizza.types[0] === payload.types[0] &&
					pizza.sizes[0] === payload.sizes[0]
				) {
					return false
				}
				return pizza
			})
		}
		return state
	}

	const handlePlusItem = (state: RootDataItem[], payload: { id: number; type: string; size: number }) => {
		return state.map((cartPizza) => {
			const activeType = cartPizza.activeType || cartPizza.types[0]
			const activeSize = cartPizza.activeSize || cartPizza.sizes[0]

			if (payload.id === cartPizza.id && payload.type === activeType && payload.size === activeSize) {
				let count = cartPizza.count || 1
				return { ...cartPizza, count: ++count }
			}
			return cartPizza
		})
	}

	const handleMinusItem = (state: RootDataItem[], payload: { id: number; type: string; size: number }) => {
		return state.map((cartPizza) => {
			const activeType = cartPizza.activeType || cartPizza.types[0]
			const activeSize = cartPizza.activeSize || cartPizza.sizes[0]

			if (payload.id === cartPizza.id && payload.type === activeType && payload.size === activeSize) {
				let count = cartPizza.count || 1
				return { ...cartPizza, count: --count }
			}
			return cartPizza
		})
	}

	const $cart = createStore<[] | RootDataItem[]>([])
		.on(addToCart, handleAddItem)
		.on(removeFromCart, handleRemoveItem)
		.on(plusItem, handlePlusItem)
		.on(minusItem, handleMinusItem)
		.reset(clear)

	sample({
		clock: [plusItem, minusItem, addToCart, removeFromCart, clear],
		source: $cart,
		fn: (source) =>
			source.length > 0 ? source.map(({ price, count }) => price * (count || 1)).reduce((a, b) => a + b) : 0,
		target: $cartPrice
	})

	return { $cart, $cartPrice, addToCart, removeFromCart, clear, plusItem, minusItem }
}
