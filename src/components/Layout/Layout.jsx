import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <li>
            <NavLink to="/"> Home Page </NavLink>{' '}
          </li>

          <li>
            <NavLink to="/catalog"> Catalog </NavLink>
          </li>

          <li>
            <NavLink to="favorites"> Favorites </NavLink>
          </li>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
