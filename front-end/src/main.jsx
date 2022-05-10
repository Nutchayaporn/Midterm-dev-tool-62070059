import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import MainPage from "./page/App";
import OTPPage from "./page/otp";
import FormPage from "./page/form";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="otp" element={<OTPPage />} />
      <Route path="form" element={<FormPage />} />
    </Routes>
  </BrowserRouter>
)