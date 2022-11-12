import { Link } from 'atomic-router-react'
import { useStore } from 'effector-react'
import React from 'react'

import { cart } from '~/features/add-to-cart'

import { cartRoute } from '~/shared/routes'
import { CartIcon } from '~/shared/ui/icon/CartIcon'

export const CartBlock = () => {
	const { length } = useStore(cart.$cart)
	const totalPrice = useStore(cart.$cartPrice)

	return (
		<div className='header__cart'>
			<Link className='button button--cart' to={cartRoute}>
				<span>{totalPrice} ₽</span>
				<div className='button__delimiter' />
				<CartIcon />
				<span>{length}</span>
			</Link>
		</div>
	)
}
