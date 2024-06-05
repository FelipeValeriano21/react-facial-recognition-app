import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './views/Login/Login';
import RegisterAluno from './views/RegisterAluno/RegisterAluno';
import ChamadaAluno from './views/ChamadaAluno/ChamadaAluno'
import DashboardChamada from './views/DashboardChamada/DashboardChamada';
import TreinoReconhecimentoFacial from './views/TreinoReconhecimentoFacial/TreinoReconhecimentoFacial';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/RegisterAluno' element={<RegisterAluno />} />
        <Route path='/TreinandoIA/:id' element={<TreinoReconhecimentoFacial />} />7
        <Route path='/ChamadaAluno/:id' element={<ChamadaAluno />} />
          <Route path="/DashboardChamada" element={<DashboardChamada />} /> {/* Defina a rota para o professor */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;
