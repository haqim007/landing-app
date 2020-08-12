import React from 'react'
import BrandIcon from "./BrandIcon";

export default function Header() {
    return (
      <header className="spacing-sm">
        <div className="container">
          <nav className="navbar navbar-expand-sm navbar-expand-lg navbar-light">
            <BrandIcon />
          </nav>
        </div>
      </header>
    );
}
