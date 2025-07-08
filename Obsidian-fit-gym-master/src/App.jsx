   
  import './App.css'
   
import { lazy,Suspense } from 'react';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import RootLayout from './components/RootLayout';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
const Technologies =lazy(()=>import ("./components/Technologies"))//now technologies will be loaded dynamically and will not get loaded when other components are loaded.
import UserProfile from './components/UserProfile';
import Java from './components/Java'
import Node from './components/Node'
import Vue from './components/Vue'
import RoutingError from './components/RoutingError';

  function App()
  {
    //routing configuration
    const browserRouterObject=createBrowserRouter([
      {
        path:"",//whenever path is empty rootlayout has to be loaded
        element:<RootLayout/>,
        errorElement:<RoutingError/>,//this is the predefined property to deal with the errors
        children:[
          {
            path:"",//after loading the RootLayout if again the path is empty then again the home component will be loaded
            element:<Home/>
          },
          {
            path:'register',
            element:<Register/>
          },
          {
            path:'login',
            element:<Login/>
          },
          {
            path:'user-profile/:username',
            element:<UserProfile/>
          },
          {
            path:'technologies',
            element:<Suspense fallback='loading...'>
              <Technologies/>
            </Suspense>,
            children:[
              {
                path:'java',
                element:<Java/>
              },
              {
                path:'node',
                element:<Node/>
              },
              {
                path:'vue',
                element:<Vue/>
              }
            ]
          }
        ]
      }
    ])
  
    return(
      <div className=' clr'>
        <RouterProvider router={browserRouterObject}/>
      </div>
    )

  }
  export default App;