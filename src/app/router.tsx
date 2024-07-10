
import { createBrowserRouter } from "react-router-dom";
import { ProfileList } from "../pages/profile-list";
import { ProfilePage } from "../pages/profile-card";
import ErrorBoundary from '../shared/list-router-error'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <ProfileList />,
    errorElement: <ErrorBoundary />
  },
  {
    path: '/profile/:profileId',
    element: <ProfilePage />,
    errorElement: <ErrorBoundary />
  }
]);

export default router;