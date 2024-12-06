import { createBrowserRouter } from 'react-router-dom'

import RootLayout from '@/layout/default.tsx'
import About from '@/views/About'
import Home from '@/views/Home'

const router = createBrowserRouter(
  [
    {
      path: '',
      element: <RootLayout />,
      children: [
        {
          path: '',
          element: <Home />,
        },
        {
          path: '/about',
          element: <About />,
        },
      ],
    },
  ],
  { basename: import.meta.env.VITE_PUBLIC_PATH as string },
)

export default router
