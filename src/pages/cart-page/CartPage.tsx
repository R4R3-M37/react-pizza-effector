import { useStore } from 'effector-react'
import React from 'react'

import { CartList } from '~/widgets/cart-list/CartList'
import { CartBottom } from '~/widgets/cart/CartBottom'
import { CartTop } from '~/widgets/cart/CartTop'

import { cart } from '~/features/add-to-cart'

import emptyCart from '~/shared/img/empty-cart.png'
import { GoBackButton } from '~/shared/ui/GoBackButton'

export const CartPage: React.FC = () => {
	const { length } = useStore(cart.$cart)

	if (!length) {
		return (
			<div className='wrapper'>
				<div className='content'>
					<div className='container container--cart'>
						<div className='cart cart--empty'>
							<h2>Корзина пустая</h2>
							<p>
								Вероятней всего, вы не заказывали ещё пиццу.
								<br />
								Для того, чтобы заказать пиццу, перейди на главную страницу.
							</p>
							<img src={emptyCart} alt='Empty cart' />
							<GoBackButton />
						</div>
					</div>
				</div>
			</div>
		)
	}

	return (
		<div className='wrapper'>
			<div className='content'>
				<div className='container container--cart'>
					<div className='cart'>
						<CartTop />
						<CartList />
						<CartBottom />
					</div>
				</div>
			</div>
		</div>
	)
}
