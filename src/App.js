import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmpForm from './Pages/EmpRegistrationForm/EmpForm';
import Layout from "./Component/Layout/Layout"
import EmpTable from './Pages/EmpRegistrationTable/EmpTable';
import EmpUpdate from './Pages/EmpRegistrationUpdate/EmpUpdate';

function App() {
  return (
    <BrowserRouter>
      <Layout/>
        <Routes>
        <Route path="/" element={<EmpForm />} />
        <Route path="/emptable" element={<EmpTable />} />
        <Route path="/update/:id" element={<EmpUpdate />} />
        </Routes>
     
    </BrowserRouter>
  );
}

export default App;
