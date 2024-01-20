// Favorites.js
import CarCard from 'components/CarCard/CarCard';
import { useSelector } from 'react-redux';

const Favorites = () => {
  const likedCars = useSelector(state => state.favorites.likedCars);
  const allCars = useSelector(state => state.catalog.cars);

  return (
    <div>
      <h2>Улюблені автомобілі</h2>
      <ul>
        {likedCars.map(carId => {
          const car = allCars.find(c => c.id === carId);

          if (car) {
            // Видаліть цей <li>, оскільки CarCard вже рендериться в <li>
            return <CarCard key={carId} car={car} />;
          } else {
            return null;
          }
        })}
      </ul>
    </div>
  );
};

export default Favorites;
