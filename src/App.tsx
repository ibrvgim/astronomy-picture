import { Suspense, lazy } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LoadingPage from './pages/LoadingPage';

const Layout = lazy(() => import('./pages/Layout'));
const MainPage = lazy(() => import('./pages/MainPage'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));
const ErrorPage = lazy(() => import('./pages/ErrorPage'));
const PageNotFound = lazy(() => import('./pages/PageNotFound'));

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <MainPage />,
        },

        {
          path: '/gallery',
          element: <GalleryPage />,
        },
      ],
    },

    {
      element: <PageNotFound />,
      path: '*',
    },
  ]);

  return (
    <Suspense fallback={<LoadingPage />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
