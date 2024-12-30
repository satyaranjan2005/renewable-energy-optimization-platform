import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import Layout from './Layout'
import Overview from './pages/Overview'
import Statistics from './pages/Statistics'
import Consumption from './pages/Consumption'
import Earning from './pages/Earning'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "/",
          element:<Overview/>
        },
        {
          path: "/statistics",
          element:<Statistics/>
        },
        {
          path: "/consumption",
          element: <Consumption/>
        },
        {
          path: "/earning",
          element: <Earning/>
        }
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  ) 
}

export default App
