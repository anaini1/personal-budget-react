import React from 'react';
import {
    Link
} from "react-router-dom";

function Menu() {
  return (
         <div class="menu">
            <nav
            role="navigation"
            aria-label="Main menu"
            itemScope
            itemType="https://schema.org/SiteNavigationElement"
            ></nav>

        <ul>
            <li><Link itemProp="url" to="/">Homepage</Link></li>
            <li><Link itemProp="url" to="/about">About App</Link></li>
            <li><Link itemProp="url" to="/login">Login</Link></li>
        </ul> 
    </div>
  );
}

export default Menu;