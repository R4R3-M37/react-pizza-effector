import { useStore } from 'effector-react'
import React from 'react'

import { category } from '~/features/category/model'

export const CategoryList = () => {
	const active = useStore(category.$active)
	const list = useStore(category.$list)

	return (
		<div className='categories'>
			<ul>
				{list.map((cat, i) => (
					<li className={active === cat ? 'active' : ''} onClick={() => category.setCategory(cat)} key={i}>
						{cat}
					</li>
				))}
			</ul>
		</div>
	)
}
