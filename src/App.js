import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmpForm from './Pages/EmpRegistrationForm/EmpForm';
import Layout from "./Component/Layout/Layout"
import EmpTable from './Pages/EmpRegistrationTable/EmpTable';
import EmpUpdate from './Pages/EmpRegistrationUpdate/EmpUpdate';
import "./App.css"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <BrowserRouter>
     <Layout/>
        <Routes>
        <Route path="/" element={<EmpForm />} />
        <Route path="/emptable" element={<EmpTable />} />
        {/* <Route path="/update/:id" element={<EmpUpdate />} /> */}
        <Route path='/edit'element={<EmpUpdate/>}></Route>
        <Route path="/form/:id/edit" element={<EmpUpdate />    }/>

      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
