import { useEffect } from 'react';
import icons from '../../common/sprite.svg';

import {
  Accessories,
  AccessoriesDetail,
  Backdrop,
  BtnClose,
  Condition,
  Description,
  FlexWrap,
  GlobalStyles,
  ImageContainer,
  Info,
  ModalWindow,
  Model,
  Rental,
  RentalButton,
  Tittle,
  Value,
} from './Modal.styled';

export const Modal = ({ isOpen, onClose, car }) => {
  useEffect(() => {
    const handleKeyPress = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [onClose]);

  const rentalConditionsString = car.rentalConditions || '';

  const rentalConditionsArray = rentalConditionsString.split('\n');

  return (
    <>
      <GlobalStyles />
      <Backdrop onClick={onClose}>
        <ModalWindow onClick={e => e.stopPropagation()}>
          <ImageContainer>
            <img
              src={car.img}
              alt={car.make}
              style={{ maxWidth: '100%', height: '100%', objectFit: 'cover' }}
            />
          </ImageContainer>

          <Tittle>
            {`${car.make}`}
            <Model> {`${car.model}`} </Model>
            {`${car.year}`}
          </Tittle>

          <Info>
            {`${car.address.split(',').slice(-2).join(', ')} | ${
              car.rentalCompany
            } | ${car.type} | ${car.id} | ${car.accessories[0]}`}
          </Info>

          <Description>{`${car.description}`}</Description>
          <Accessories>Accessories and functionalities:</Accessories>

          <AccessoriesDetail>
            {car.accessories.map((accessory, index) => (
              <p key={index}>{accessory} | </p>
            ))}
          </AccessoriesDetail>
          <Rental>Rental Conditions: </Rental>
          <FlexWrap>
            {rentalConditionsArray.map((condition, index) => (
              <Condition key={index}>{condition}</Condition>
            ))}
            <Condition>
              {' '}
              Millage:&nbsp;{' '}
              <Value>
                {car.mileage.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              </Value>{' '}
            </Condition>

            <Condition>
              Price:&nbsp; <Value> {`${car.rentalPrice}`} </Value>
            </Condition>
          </FlexWrap>
          <RentalButton to="tel:+1234567890">Rental Car</RentalButton>
          <BtnClose onClick={onClose}>
            <svg width={12} height={12}>
              <use href={`${icons}#icon-cross`}></use>
            </svg>
          </BtnClose>
        </ModalWindow>
      </Backdrop>
    </>
  );
};
