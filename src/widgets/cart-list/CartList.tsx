import { useStore } from 'effector-react'
import React from 'react'

import { cart } from '~/features/add-to-cart'
import { CartItemCount } from '~/features/add-to-cart/ui/CartItemCount'
import { CartItemRemove } from '~/features/add-to-cart/ui/CartItemRemove'

import { CartItemImage } from '~/entities/cart-item/CartItemImage'
import { CartItemPrice } from '~/entities/cart-item/CartItemPrice'
import { CartItemTitle } from '~/entities/cart-item/CartItemTitle'

export const CartList: React.FC = () => {
	const cartItems = useStore(cart.$cart)

	return (
		<div className='content__items'>
			{cartItems.map((pizza) => (
				<div
					className='cart__item'
					key={`${pizza.activeType}${pizza.activeSize}${pizza.name}${pizza.sizes[0]}${pizza.types[0]}${pizza.id}`}>
					<CartItemImage imageUrl={pizza.imageUrl} />
					<CartItemTitle
						name={pizza.name}
						size={pizza.activeSize || pizza.sizes[0]}
						type={pizza.activeType || pizza.types[0]}
					/>
					<CartItemCount pizza={pizza} />
					<CartItemPrice price={pizza.newPrice || pizza.price} count={pizza.count || 1} />
					<CartItemRemove pizza={pizza} />
				</div>
			))}
		</div>
	)
}
