import React from 'react';
import { Link } from 'react-router';

export const FilterLinks = () => (
    <div className="filter-links">
      <Link to="/" activeClassName="active">To Be Done</Link>
      <Link to="/completed" activeClassName="active">Completed</Link>
    </div>
);
