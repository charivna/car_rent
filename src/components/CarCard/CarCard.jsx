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
import { useDispatch, useSelector } from 'react-redux';
import { toggleLikedCar } from '../../redux/FavoriteSlice/favoriteSlice';

const CarCard = ({ car }) => {
  const dispatch = useDispatch();
  const isCarLiked = useSelector(state =>
    state.favorites.likedCars.includes(car.id)
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleHeartToggle = () => {
    dispatch(toggleLikedCar(car.id));
  };

  const handleLearnMoreClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

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
        {car.address && car.address.split(',').slice(-2).join(', ')} |{' '}
        {car.rentalCompany} | {car.type} | {car.id} |{' '}
        {car.accessories && car.accessories[0]}
      </Info>
      <MoreButton onClick={handleLearnMoreClick}>Learn More</MoreButton>
      {isModalOpen && <Modal onClose={handleModalClose} car={car} />}
    </Card>
  );
};

export default CarCard;
