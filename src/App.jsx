import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { routes } from './Routes/Routes'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <div>
        
        <RouterProvider router={routes}></RouterProvider>
        <Toaster/>
      </div>
  )
}

export default App