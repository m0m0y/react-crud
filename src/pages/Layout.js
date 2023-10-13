import React from 'react';
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
     <div className="columns">
        <div className="column is-one-quarter full-height">
          <aside className="menu p-5">
            <p className="menu-label">
              Dashboard
            </p>
            <ul className="menu-list">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/blogs">Blogs</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </aside>
        </div>

        <div className="column has-background-light full-height">
          <Outlet />
        </div>
      </div>
    </>
  )
};

export default Layout;