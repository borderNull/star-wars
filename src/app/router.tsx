import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from './routes'
import ErrorBoundary from '../shared/list-router-error'


export const router = createBrowserRouter([
  {
    path: ROUTES.LIST,
    async lazy() {
      const { ProfileList } = await import('../pages/profile-list')
      return { Component: ProfileList }
    },
    errorElement: <ErrorBoundary />
  },
  {
    path: ROUTES.PROFILE,
    async lazy() {
      const { ProfilePage } = await import('../pages/profile-page')
      return { Component: ProfilePage }
    },
    errorElement: <ErrorBoundary />
  }
], {
  basename: '/star-wars/'
});

export default router;