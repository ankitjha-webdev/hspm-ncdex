import React from 'react'
import Dashboard from '../pages/Dashboard'
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { NoMatch } from './components/NoMatch';
import AppSidebar from './components/AppSidebar';
import { AddProduct } from './components/AddProduct';
import { UpdateProduct } from './components/UpdateProduct';
const App = () => {
  return (
   <Routes>
          <Route index element={<Dashboard />} />
        
          <Route path="add-product" element={<AddProduct />} />
          <Route path="update-product" element={<UpdateProduct/>} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
      
      </Routes>
  )
}

export default App