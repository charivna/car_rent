import Heart from 'components/Heart/Heart';
import {
  Card,
  ImageContainer,
  Tittle,
  Type,
  Price,
  Info,
  MoreButton,
} from './CarCard.styled';
import { useState } from 'react';
import { Modal } from 'components/Modal/Modal';

const CarCard = ({ car }) => {
  const [likedCars, setLikedCars] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const handleLearnMoreClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const isCarLiked = likedCars.includes(car.id);

  return (
    <Card
      key={car.id}
      style={{
        position: 'relative',
        height: '426px',
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
      <Tittle>
        <Type>{` ${car.make} ${car.model}, ${car.year}`} </Type>
        <Price>{`${car.rentalPrice}`}</Price>
      </Tittle>

      <Info>
        {`${car.address.split(',').slice(-2).join(', ')} | ${
          car.rentalCompany
        } | ${car.type} | ${car.id} | ${car.accessories[0]}`}
      </Info>
      <MoreButton onClick={handleLearnMoreClick}>Learn More</MoreButton>
      {isModalOpen && <Modal onClose={handleModalClose} car={car} />}
    </Card>
  );
};

export default CarCard;
