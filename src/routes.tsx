import Home from './pages/Home';
import NotFound from './pages/NotFound';
import RootLayout from './layout/PageLayout';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [{ index: true, path: '/', element: <Home /> }],
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
