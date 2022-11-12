import { useStore } from 'effector-react'
import React from 'react'

import { sortPopup } from '~/features/sort/model'

export const SortPopupList = () => {
	const popup = useStore(sortPopup.$popup)
	const active = useStore(sortPopup.$active)
	const list = useStore(sortPopup.$list)

	return (
		<div className='sort__popup' style={popup ? { display: 'block' } : { display: 'none' }}>
			<ul>
				{list.map((sort, i) => (
					<li className={active === sort ? 'active' : ''} onClick={() => sortPopup.setSort(sort)} key={i}>
						{sort}
					</li>
				))}
			</ul>
		</div>
	)
}
