import React from 'react'

interface Props {
	name: string
	size: number
	type: string
}

export const CartItemTitle: React.FC<Props> = ({ name, size, type }) => {
	return (
		<div className='cart__item-info'>
			<h3>{name}</h3>
			<p>
				{type} тесто, {size} см.
			</p>
		</div>
	)
}
