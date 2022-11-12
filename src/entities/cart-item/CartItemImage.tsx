import React from 'react'

export const CartItemImage: React.FC<{ imageUrl: string }> = ({ imageUrl }) => {
	return (
		<div className='cart__item-img'>
			<img className='pizza-block__image' src={imageUrl} alt='' />
		</div>
	)
}
