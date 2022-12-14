import React, { memo } from 'react';

const Navbar = memo((props) => {
  return (
    <div className="navbar">
      <i className="navbar-logo fas fa-leaf"></i>
      <span>Habit Tracker</span>
      <span className="navbar-count">{props.totalCount}</span>
    </div>
  );
})

export default Navbar;
