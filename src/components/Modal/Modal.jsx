import { Backdrop, ImageContainer, Info, ModalWindow } from './Modal.styled';

export const Modal = ({ isOpen, onClose, car }) => {
  if (isOpen) return null;

  return (
    <Backdrop onClick={onClose}>
      <ModalWindow onClick={e => e.stopPropagation()}>
        <ImageContainer>
          {' '}
          <img
            src={car.img}
            alt={car.make}
            style={{ maxWidth: '100%', height: '100%', objectFit: 'cover' }}
          />
        </ImageContainer>

        <h3>{`${car.make} ${car.model} ${car.year}`}</h3>
        <Info>
          {`${car.address.split(',').slice(-2).join(', ')} | ${
            car.rentalCompany
          } | ${car.type} | ${car.id} | ${car.accessories[0]}`}
        </Info>
      </ModalWindow>
    </Backdrop>
  );
};
