import React from 'react'

import { cart } from '~/features/add-to-cart'

import { RootDataItem } from '~/shared/api/types'
import { CountMinusIcon } from '~/shared/ui/icon/CountMinusIcon'
import { CountPlusIcon } from '~/shared/ui/icon/CountPlusIcon'

export const CartItemCount: React.FC<{ pizza: RootDataItem }> = ({ pizza }) => {
	return (
		<div className='cart__item-count'>
			<button
				className='button button--outline button--circle cart__item-count-minus'
				disabled={pizza.count === 1 || pizza.count === undefined}
				onClick={() =>
					cart.minusItem({
						id: pizza.id,
						type: pizza.activeType || pizza.types[0],
						size: pizza.activeSize || pizza.sizes[0]
					})
				}>
				<CountMinusIcon />
			</button>
			<b>{pizza.count || 1}</b>
			<button
				className='button button--outline button--circle cart__item-count-plus'
				disabled={pizza.count === 10}
				onClick={() =>
					cart.plusItem({
						id: pizza.id,
						type: pizza.activeType || pizza.types[0],
						size: pizza.activeSize || pizza.sizes[0]
					})
				}>
				<CountPlusIcon />
			</button>
		</div>
	)
}
