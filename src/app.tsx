import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from 'src/components/common';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, lazy: () => import('src/pages') },
      { path: 'about', lazy: () => import('src/pages/about') },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
