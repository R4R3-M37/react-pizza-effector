import React from 'react'

import { cart } from '~/features/add-to-cart'

import { CartIcon } from '~/shared/ui/icon/CartIcon'
import { TrashIcon } from '~/shared/ui/icon/TrashIcon'

export const CartTop: React.FC = () => {
	return (
		<div className='cart__top'>
			<h2 className='content__title'>
				<CartIcon />
				Корзина
			</h2>
			<div className='cart__clear' onClick={() => cart.clear()}>
				<TrashIcon />
				<span>Очистить корзину</span>
			</div>
		</div>
	)
}
