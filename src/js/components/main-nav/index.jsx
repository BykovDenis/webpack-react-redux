/**
 * Created by denis.bykov on 13.07.17.
 */
import React from 'react';
import { Link } from 'react-router';

export default function MainNav() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/btn">Btn</Link>
      </li>
    </ul>
  );
}
