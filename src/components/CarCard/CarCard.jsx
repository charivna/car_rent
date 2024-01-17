import { nanoid } from 'nanoid';
import { Card, ImageContainer } from './CarCard.styled';

const CarCard = ({ car }) => {
  return (
    <Card
      key={nanoid()}
      style={{
        border: '1px solid #ddd',
        borderRadius: '5px',
      }}
    >
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
