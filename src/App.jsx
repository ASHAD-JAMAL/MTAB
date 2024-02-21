import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LayOut from './LayOut.jsx';
import Home from './Components/Home/Home.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Job from './Components/Job/Job.jsx';
import './App.css';

function App() {
  return (
    <>
     <Routes>
        <Route path="/" element={<LayOut />}>
          <Route index element={<Home />} />
          <Route path="job" element={<Job />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
     
  );
}

export default App;
