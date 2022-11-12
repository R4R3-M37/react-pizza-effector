import { useStore } from 'effector-react'
import React from 'react'

import { cart } from '~/features/add-to-cart'

import { GoBackButton } from '~/shared/ui/GoBackButton'

export const CartBottom: React.FC = () => {
	const { length } = useStore(cart.$cart)
	const totalPrice = useStore(cart.$cartPrice)

	return (
		<div className='cart__bottom'>
			<div className='cart__bottom-details'>
				<span>
					Всего разных пицц: <b>{length} шт.</b>
				</span>
				<span>
					Общая сумма заказа: <b>{totalPrice} ₽</b>
				</span>
			</div>
			<div className='cart__bottom-buttons'>
				<GoBackButton />
				<div className='button pay-btn'>
					<span>Оплатить сейчас</span>
				</div>
			</div>
		</div>
	)
}
