import React from 'react'

import { PizzaList } from '~/widgets/pizza-list/PizzaList'

import { CategoryList } from '~/features/category/CategoryList'
import { SortList } from '~/features/sort/SortList'

export const HomePage: React.FC = () => {
	return (
		<div className='content'>
			<div className='container'>
				<div className='content__top'>
					<CategoryList />
					<SortList />
				</div>
				<h2 className='content__title'>Все пиццы</h2>
				<PizzaList />
			</div>
		</div>
	)
}
