import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/routes.jsx'
// import { Provider } from 'react-redux'
// import { store } from './Redux/store.js'
import Auth from './auth/Auth.jsx'

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Auth>
        <RouterProvider router={router} />
      </Auth>
    </QueryClientProvider>
  </React.StrictMode>
)
