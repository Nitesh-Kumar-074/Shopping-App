import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from 'react-redux'
import {store} from './app/store.js'
import {createBrowserRouter,RouterProvider}  from 'react-router-dom'
import {Login,Signup,Addpost,Allposts,Home,Yourposts,Post,Help} from './pages'
const router = createBrowserRouter([
  {
    path : '/',
    element : <App/>,
    children : [
      {
        path : '/',
        element: <Home/>
      },
      {
        path : '/login',
        element : <Login/>
      },
      {
        path : '/signup',
        element: <Signup/>
      },
      {
        path : '/add-post',
        element : <Addpost/>
      },
      {
        path : '/all-posts',
        element : <Allposts/>
      },
      {
        path : '/your-posts',
        element : <Yourposts/>
      },
      {
        path : '/post/:slug',
        element : <Post/> 
      },
      {
        path : '/help',
        element: <Help/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
    
  </React.StrictMode>,
)
