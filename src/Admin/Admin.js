import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

// import AdminRouter from "./AdminRouter/AdminRouter"
import Categories from "./Categories/Categories"
import Products from "./Products/Products"
import Users from "./Users/Users"
import './style.scss'

function Admin() {
  return (
    <div className="admin">
        <header className="admin__header">
            Admin Header
        </header>
        <div className="admin__main">
            <Router>
                <div className="sidebar">
                    <div className="sidebar__inner">
                        <Link to="/admin/categories">Categories</Link>
                        <Link to="/admin/products">Products</Link>
                        <Link to="/admin/users">Users</Link>
                    </div>
                </div>
                <div className="content">
                      <Routes>
                          <Route exact  path="/admin/categories" element={ <Categories /> } />            
                          <Route exact  path="/admin/products" element={ <Products /> } />             
                          <Route exact  path="/admin/users" element={ <Users /> } />            
                      </Routes>
                </div>
            </Router>
        </div>
    </div>
  )
}

export default Admin