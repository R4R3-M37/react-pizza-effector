import { createEvent, createStore } from 'effector'

const categoryList = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

function createCategoryApi() {
	const setCategory = createEvent<string>()

	const $active = createStore<string>(categoryList[0]).on(setCategory, (_, newCategory) => newCategory)
	const $list = createStore<Array<string>>(categoryList)

	return { $active, $list, setCategory }
}

export const category = createCategoryApi()
