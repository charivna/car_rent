const { Catalog } = require('components/Catalog/Catalog');
const { Filter } = require('components/Filter/Filter');

const CatalogPage = () => {
  return (
    <>
      <Filter />
      <Catalog />
    </>
  );
};

export default CatalogPage;
