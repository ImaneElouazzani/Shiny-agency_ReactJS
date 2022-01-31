import React from 'react';
import Home from './Pages/Home/Home';
import Survey from './Pages/Survey/Survey'
import {Routes, Route} from 'react-router-dom'

export default function App() {
  return <div>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/survey" element={<Survey/>}/>
    </Routes>
  </div>;
}
