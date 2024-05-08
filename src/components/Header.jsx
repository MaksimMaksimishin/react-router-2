import { NavLink, useLocation } from "react-router-dom";

export const Header = () => {
  const { pathname } = useLocation();
  const isActiveCallback = ({isActive}) => isActive ? 'menu__link menu__link_active' : 'menu__link';

  return (
    <header className="header">
      <nav className="menu">
        <ul className="menu__list">

          <li className="menu__item">
            <NavLink to="/" className={ isActiveCallback } state={ { from: pathname } }>Home</NavLink>
          </li>

          <li className="menu__item">
            <NavLink to="/about" className={ isActiveCallback } state={ { from: pathname } }>About</NavLink>
          </li>

          <li className="menu__item">
            <NavLink to="/blog" className={ isActiveCallback } state={ { from: pathname } }>Blog</NavLink>
          </li>

          <li className="menu__item">
            <NavLink to="/contacts" className={ isActiveCallback } state={ { from: pathname } }>Contacts</NavLink>
          </li>

        </ul>
      </nav>
    </header>
  );
};