import { Link } from 'atomic-router-react'
import React from 'react'

import notFound from '~/shared/img/not-found.png'
import { homeRoute } from '~/shared/routes'

export const NotFoundPage: React.FC = () => {
	return (
		<div className='error-page'>
			<div className='inner'>
				<img src={notFound} alt='' />
				<h1>Ошибка 404</h1>
				<p>Страница не найдена, попробуйте поискать с главной страницы.</p>
				<Link to={homeRoute} className='button button--outline button--add go-back-btn'>
					На главную
				</Link>
			</div>
		</div>
	)
}
