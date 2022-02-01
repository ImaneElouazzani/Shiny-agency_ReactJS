import React from 'react';
import Home from './Pages/Home/Home';
import Survey from './Pages/Survey/Survey'
import {Routes, Route} from 'react-router-dom'
import Header from './Components/Header/Header';
import Freelances from './Pages/Freelances/Freelances'
import Results from './Pages/Results/Results'
import Error from './Components/Error/Error';

export default function App() {
  return <div>
      <Header/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/survey/:questionNumber" element={<Survey/>}/>
      <Route path="/results" element={<Results/>}/>
      <Route path="/freelances" element={<Freelances/>}/>
      <Route path="*" element={<Error/>}/>
    </Routes>
  </div>;
}
