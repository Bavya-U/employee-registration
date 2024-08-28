import React from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmpForm from "./Pages/EmpRegistrationForm/EmpForm";
import Layout from "./Component/Layout/Layout";
import EmpTable from "./Pages/EmpRegistrationTable/EmpTable";
import EmpUpdate from "./Pages/EmpRegistrationUpdate/EmpUpdate";
import "./App.css";
import Home from "./Component/Home/Home";
import AppUpload from "../src/upload";


function App() {
  return (
    <BrowserRouter>
      <Layout />
      <Routes>
        <Route path="/employee/create" element={<EmpForm />} />
        <Route path="/" element={<Home />} />
        <Route path="/employee/view" element={<EmpTable />} />
        <Route path="/edit" element={<EmpUpdate />}></Route>
        <Route path="/employee/:id/edit" element={<EmpUpdate />} />
        <Route path="/appupload" element={<AppUpload />} />

        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
