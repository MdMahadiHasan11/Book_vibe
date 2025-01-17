import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import ListedBook from './components/ListedBook/ListedBook';
import PagesToRead from './components/PagesToRead/PagesToRead';
import ErrorPage from './components/ErrorPage/ErrorPage';
import BookDetails from './components/BookDetails/BookDetails';
import NewBooks from './components/NewBooks/NewBooks';
import AllViewBook from './components/AllViewBook/AllViewBook';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
    {
      path:'/',
      element: <Home></Home>
    },
    {
      path:'/bookDetails/:bookId',
      element:<BookDetails></BookDetails>,
      loader:()=>fetch('/BookData.json')
      

    },
    {
      path:'/PagesToRead',
      element:<PagesToRead></PagesToRead>
    },
    {
      path:'/listedBook',
      element: <ListedBook></ListedBook>,
      loader:()=>fetch('BookData.json')

    },
    {
      path:'/NewBooks',
      element: <NewBooks></NewBooks>,
      // loader:()=>fetch('BookData.json')

    },
    {
      path:'/AllView',
      element: <AllViewBook></AllViewBook>,
      // loader:()=>fetch('BookData.json')

    },

  ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
