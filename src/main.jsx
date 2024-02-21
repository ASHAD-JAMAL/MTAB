import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import{
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import LayOut from './LayOut.jsx'
import Home from './Components/Home/Home.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Job from './Components/Job/Job.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={ <LayOut/> }>
      <Route path="" element={ <Home/> }/>
      <Route path="job" element={ <Job/> }/>
      <Route path="contact" element={ <Contact/> }/>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
