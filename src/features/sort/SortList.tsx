import { useStore } from 'effector-react'
import React from 'react'

import { sortPopup } from '~/features/sort/model'
import { SortPopupList } from '~/features/sort/ui/SortPopupList'

import { UpArrow } from '~/shared/ui/icon/UpArrow'

export const SortList = () => {
	const active = useStore(sortPopup.$active)

	return (
		<div className='sort'>
			<div className='sort__label' onClick={() => sortPopup.handlePopup()}>
				<UpArrow />
				<b>Сортировка по:</b>
				<span>{active}</span>
			</div>
			<SortPopupList />
		</div>
	)
}
