import React from 'react';
import { NavLink } from 'react-router-dom';

const NavSingleItem = ({ item }) => {
  const url = item.path.charAt(0) === '/' ? item.path : `/${item.path}`;
  return (
    <NavLink to={url}  className="p-2 text-muted" >{item.name}</NavLink>
  );
};

export default NavSingleItem;
