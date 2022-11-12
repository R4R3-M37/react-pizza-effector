import React from 'react'

interface Props {
	price: number
	count: number
}

export const CartItemPrice: React.FC<Props> = ({ price, count }) => {
	return (
		<div className='cart__item-price'>
			<b>{price * count} ₽</b>
		</div>
	)
}
