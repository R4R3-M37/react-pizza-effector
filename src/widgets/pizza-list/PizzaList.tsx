import { useStore } from 'effector-react'
import React from 'react'

import { AddButton } from '~/features/add-to-cart/ui/AddButton'
import { PizzaSelector } from '~/features/pizza-selector/ui/PizzaSelector'

import { PizzaImage } from '~/entities/pizza-item/ui/PizzaImage'
import { PizzaTitle } from '~/entities/pizza-item/ui/PizzaTitle'
import { PizzaLoader } from '~/entities/pizza-item/ui/skeleton/PizzaLoader'

import { $pizza, getPizzaFx, pizzaLoadedRoute } from '~/shared/api/data-fetch'

export const PizzaList = () => {
	const pizza = useStore($pizza)
	const pizzaLoading = useStore(getPizzaFx.pending)
	const isPizzaLoadedRouteOpened = useStore(pizzaLoadedRoute.$isOpened)

	if (!isPizzaLoadedRouteOpened || pizzaLoading) {
		return <PizzaLoader />
	}

	return (
		<div className='content__items'>
			{pizza &&
				pizza.map((pizza, i) => (
					<div className='pizza-block' key={i}>
						<PizzaImage imageUrl={pizza.imageUrl} />
						<PizzaTitle name={pizza.name} />
						<PizzaSelector types={pizza.types} sizes={pizza.sizes} pizza={pizza} />
						<div className='pizza-block__bottom'>
							<div className='pizza-block__price'>от {pizza.newPrice || pizza.price} ₽</div>
							<AddButton pizza={pizza} />
						</div>
					</div>
				))}
		</div>
	)
}
