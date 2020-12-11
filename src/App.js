import React from "react";
import "./App.css";
import ModalComponents from "./components/Modal/ModalComponents";
import { ApiStorage } from "./ApiContext";
import Login from "./components/Login/Login";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import ProtectedRoute from "./components/Login/ProtectRoutes/ProtectedRoute";
import Homepage from "./components/Home/Homepage";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ApiStorage>
          <Routes>
            <Route path="/" element={<Login />} />
            <ProtectedRoute path="homepage/*" element={<Homepage />} />
          </Routes>
        </ApiStorage>
      </BrowserRouter>
      <ModalComponents/>
    </div>
  );
}

export default App;
