import React from 'react'

import { cart } from '~/features/add-to-cart'

import { RootDataItem } from '~/shared/api/types'
import { CartRemoveIcon } from '~/shared/ui/icon/CartRemoveIcon'

export const CartItemRemove: React.FC<{ pizza: RootDataItem }> = ({ pizza }) => {
	return (
		<div className='cart__item-remove' onClick={() => cart.removeFromCart(pizza)}>
			<div className='button button--outline button--circle'>
				<CartRemoveIcon />
			</div>
		</div>
	)
}
