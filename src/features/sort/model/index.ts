import { createEvent, createStore } from 'effector'

const sortPopupList: string[] = ['популярности', 'цене', 'алфавиту']

function createSortApi() {
	const setSort = createEvent<string>()
	const handlePopup = createEvent()

	const $active = createStore<string>(sortPopupList[0]).on(setSort, (_, sort) => sort)

	const $popup = createStore<boolean>(false)
		.on(handlePopup, (state) => !state)
		.reset(setSort)

	const $list = createStore<Array<string>>(sortPopupList)

	return {
		$active,
		$popup,
		$list,
		setSort,
		handlePopup
	}
}

export const sortPopup = createSortApi()
