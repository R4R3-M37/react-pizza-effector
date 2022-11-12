import React from 'react'

export const PizzaImage: React.FC<{ imageUrl: string }> = ({ imageUrl }) => {
	return <img className='pizza-block__image' src={imageUrl} alt='' />
}
