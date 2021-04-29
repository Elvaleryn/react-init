import React from 'react'
import { Person, Search } from '@material-ui/icons'
import './topbar.css'
const Topbar = () => {
  return (
    <div className="topbar-container">
      <div className="topbar-left">
        <span className="logo">Social Media</span>
      </div>
      <div className="topbar-center">
        <div className="searchbar">
          <Search />
          <input
            type="text"
            placeholder="search for posts"
            className="search-input"
          />
        </div>
      </div>
      <div className="topbar-right">
        <div className="topbar-links">
          <span className="topbar-link">Homepage</span>
          <span className="topbar-link">TimeLine</span>
        </div>
        <div className="topbar-icons">
          <div className="topbar-icon-item">
            <Person />
            <span className="topbar-icon-badge"></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar
