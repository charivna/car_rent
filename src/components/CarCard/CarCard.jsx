import Heart from 'components/Heart/Heart';
import { Card, ImageContainer } from './CarCard.styled';
import { useState } from 'react';

const CarCard = ({ car }) => {
  const [likedCars, setLikedCars] = useState([]);

  const handleHeartToggle = (carId, isLiked) => {
    setLikedCars(prevLikedCars => {
      if (isLiked) {
        // Додаємо автомобіль до списку обраних, якщо він був видалений раніше
        return [...prevLikedCars, carId];
      } else {
        // Видаляємо автомобіль зі списку обраних, якщо він вже був там
        return prevLikedCars.filter(id => id !== carId);
      }
    });
  };
  const isCarLiked = likedCars.includes(car.id);

  return (
    <Card
      key={car.id}
      style={{
        position: 'relative',
        border: '1px solid #ddd',
        borderRadius: '5px',
      }}
    >
      <Heart carId={car.id} onToggle={handleHeartToggle} isLiked={isCarLiked} />
      <ImageContainer>
        <img
          src={car.img}
          alt={car.make}
          style={{ maxWidth: '100%', height: '100%', objectFit: 'cover' }}
        />
      </ImageContainer>

      <h3>{` ${car.make} ${car.model} ${car.year} ${car.rentalPrice}`}</h3>

      <p>
        {`${car.address.split(',').slice(-2).join(', ')} | ${
          car.rentalCompany
        }|${car.type}|${car.id}|${car.accessories[0]}`}
      </p>

      <button>Learn More</button>
    </Card>
  );
};

export default CarCard;
