import { RouterProvider } from 'atomic-router-react'
import React from 'react'
import { createRoot } from 'react-dom/client'

import { AppLayout } from '~/app/layout/AppLayout'
import { AppRoutes } from '~/app/routing/AppRoutes'
import '~/app/styles/scss/app.scss'
import { router } from '~/app/routing/routing'

const container = document.getElementById('root')
const root = createRoot(container as HTMLElement)

root.render(
	<RouterProvider router={router}>
		<AppLayout>
			<AppRoutes />
		</AppLayout>
	</RouterProvider>
)
