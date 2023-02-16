import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <ul>
      <li>
        <NavLink to={'/register'}>Register</NavLink>
      </li>
      <li>
        <NavLink to={'/login'}>Log in</NavLink>
      </li>
    </ul>
  );
};
