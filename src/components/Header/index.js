import React from 'react'
import './header.css'
function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <h1>Lemons.</h1>
        <div className="social_midia">
          <ul className="grid">
            <li>
              <a href="/#">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="/#">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="/#">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="/#">
                <i className="far fa-envelope"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
