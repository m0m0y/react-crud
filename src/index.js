import React, { StrictMode } from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bulma/css/bulma.css';
import './index.css';
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import AddUser from "./pages/AddUser";
import NoPage from "./pages/404";
import EditUser from "./pages/EditUser"
// import reportWebVitals from './reportWebVitals';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="blogs" element={<Blogs />} />
              <Route path="contact" element={<Contact />} />
              <Route path="adduser" element={<AddUser />} />
              <Route path="update_user/:user_id" element={<EditUser />} />
              <Route path="*" element={<NoPage />} />
            </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<StrictMode> <App /> </StrictMode>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
