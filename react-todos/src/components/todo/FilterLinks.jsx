import React from 'react';
import { Link } from 'react-router';

export const FilterLinks = () => (
    <div className="filer-links">
      <Link to="/" activeClassName="active">All</Link>
      <Link to="/active" activeClassName="active">Active</Link>
      <Link to="/completed" activeClassName="active">Completed</Link>
    </div>
);
