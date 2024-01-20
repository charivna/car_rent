import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ListNav, Nav, StyledLink } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <header>
        <Nav>
          <ListNav>
            <li>
              <StyledLink to="/"> Home Page </StyledLink>{' '}
            </li>

            <li>
              <StyledLink to="/catalog"> Catalog </StyledLink>
            </li>

            <li>
              <StyledLink to="favorites"> Favorites </StyledLink>
            </li>
          </ListNav>
        </Nav>
      </header>

      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
