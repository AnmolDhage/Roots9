import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Menu from './Pages/Menu/Menu.jsx';
import ErrorPage from './Pages/ErrorPage.jsx';
import TypePage from './Pages/TypePage/TypePage.jsx';
import { starterList } from './Data/MenuList.jsx';
import FoodPage from './Pages/FoodPage/FoodPage.jsx';

const router =createBrowserRouter([{
  path:'',
  element:<App/>,
  errorElement:<ErrorPage/>,
  children:[
    {
      path:'',
      element:<Menu/>
    },{
      path:'/starter',
      element:<
        TypePage
        image={`/starterCover.png`}
        title={`Starter`}
        list={starterList}
      />
    },{
      path:'main-course',
      element:<
        TypePage
        image={`/menuCover.png`}
        title={`Main Course`}
        list={starterList}
      />
    },{
      path:'chefs-recommended',
      element:<
        TypePage
        image={`/chefsReccCover.png`}
        title={`Chef's Recommended Specials`}
        list={starterList}
      />
    },{
      path:'food/:dish',
      element:<
        FoodPage
      />
    }

  ]

}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
