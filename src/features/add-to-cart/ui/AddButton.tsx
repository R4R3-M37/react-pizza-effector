import { useStore } from 'effector-react'
import React, { useState } from 'react'

import { cart } from '~/features/add-to-cart'

import { RootDataItem } from '~/shared/api/types'
import { PlusIcon } from '~/shared/ui/icon/PlusIcon'

export const AddButton: React.FC<{ pizza: RootDataItem }> = ({ pizza }) => {
	const [, update] = useState(0)
	const cartItems = useStore(cart.$cart)
	const cartFind = cartItems.find(({ id }) => id === pizza.id)

	const handleAddToCart = () => {
		cart.addToCart(pizza)
		if (cartFind?.count) {
			// updating count to rerender
			update(cartFind?.count)
		}
	}

	return (
		<div className='button button--outline button--add' onClick={handleAddToCart}>
			<PlusIcon />
			<span>Добавить</span>
			{cartFind?.count && <i>{cartFind?.count}</i>}
		</div>
	)
}
