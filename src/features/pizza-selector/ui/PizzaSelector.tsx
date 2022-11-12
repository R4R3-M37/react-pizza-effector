import React from 'react'

import { selector } from '~/features/pizza-selector'

import { RootDataItem } from '~/shared/api/types'

interface Props {
	types: string[]
	sizes: number[]
	pizza: RootDataItem
}

export const PizzaSelector: React.FC<Props> = ({ types, sizes, pizza }) => {
	const activeType = pizza.activeType || types[0]
	const activeSize = pizza.activeSize || sizes[0]

	const handleChangeType = (type: string) => {
		if (activeType !== type) {
			selector.setType({ type, id: pizza.id })
		}
	}

	const handleChangeSize = (size: number) => {
		if (activeSize !== size) {
			selector.setSize({ size, id: pizza.id })
		}
	}

	return (
		<div className='pizza-block__selector'>
			<ul>
				{types.map((type, i) => (
					<li className={activeType === type ? 'active' : ''} onClick={() => handleChangeType(type)} key={i}>
						{type}
					</li>
				))}
			</ul>
			<ul>
				{sizes.map((size, i) => (
					<li className={activeSize === size ? 'active' : ''} onClick={() => handleChangeSize(size)} key={i}>
						{size}
					</li>
				))}
			</ul>
		</div>
	)
}
