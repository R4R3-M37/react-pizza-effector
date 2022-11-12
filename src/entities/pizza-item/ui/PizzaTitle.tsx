import React from 'react'

export const PizzaTitle: React.FC<{ name: string }> = ({ name }) => {
	return <h4 className='pizza-block__title'>{name}</h4>
}
