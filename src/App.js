import React from 'react';
import  {BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './views/Login/Login.js'
import RegisterAluno from './views/RegisterAluno/RegisterAluno'
import TreinoReconhecimentoFacial from './views/TreinoReconhecimentoFacial/TreinoReconhecimentoFacial'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path = '/' element = {<Login />}></Route>   
        <Route path = '/RegisterAluno' element = {<RegisterAluno />}></Route>  
        <Route path = '/TreinandoIA' element = {<TreinoReconhecimentoFacial />}></Route>  
      </Routes>
   </BrowserRouter>
  );
}

export default App;