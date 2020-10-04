import React from 'react';

export const NavItem = (props) => {
  return (
  <li className="nav-item">
    <a href={props.link} className="nav-link">
      <div className="icon">
        <i className={props.icon}></i>
      </div>
      <p className="link-text">{props.title}</p>
    </a>
  </li>);
} 