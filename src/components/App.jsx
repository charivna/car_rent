// import { Catalog } from './Catalog/Catalog';
// import { Filter } from './Filter/Filter';

import CatalogPage from 'pages/CatalogPage';
import FavoritePage from 'pages/FavoritePage';
import HomePage from 'pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="favorites" element={<FavoritePage />} />
        </Route>
      </Routes>
      {/* <Filter />
      <Catalog /> */}
    </>
  );
};
