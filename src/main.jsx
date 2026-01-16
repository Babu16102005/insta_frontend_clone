import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider} from 'react-router-dom' //router -to route to next page
import Storyview from './storyview.jsx'
import Profile from './profile.jsx'


const route=createBrowserRouter(
  [
    {
      path:"/",
      element:<App/>
    },
    {
      path:"/story/:id/:total",
      element:<Storyview/>
    },
    {
      path:"/profile",
      element:<Profile/>
    }
  ]
)

createRoot(document.getElementById('root')).render(
  <RouterProvider router={route}/>
)
