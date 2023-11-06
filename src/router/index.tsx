import React from 'react'
import { useRoutes } from 'react-router-dom'

import About from '@/views/About'
import Home from '@/views/Home'

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/about',
      element: <About />,
    },
  ])
}
