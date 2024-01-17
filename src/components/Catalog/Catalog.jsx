// Catalog.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { nanoid } from 'nanoid';

export const Catalog = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        // Ваш URL для запиту до бекенду
        const response = await axios.get(
          'https://65a7bc4794c2c5762da7693e.mockapi.io/catalog'
        );

        // Оновлюємо стан компонента з отриманими даними
        setCars(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Помилка запиту:', error);
        setLoading(false);
      }
    };

    // Викликаємо функцію для отримання карточок при завантаженні компонента
    fetchCars();
  }, []); // Порожній масив для запобігання безкінечного циклу

  return (
    <div>
      <h2>Catalog</h2>

      {loading ? (
        <p>Завантаження...</p>
      ) : (
        <div>
          {cars.map(car => (
            <div
              key={nanoid()}
              style={{
                border: '1px solid #ddd',
                padding: '10px',
                margin: '10px',
                borderRadius: '5px',
              }}
            >
              <img
                src={car.img}
                alt={car.make}
                style={{ maxWidth: '100%', height: 'auto' }}
              />
              <h3>{`${car.year} ${car.make} ${car.model}`}</h3>
              <p>Type: {car.type}</p>
              <p>Description: {car.description}</p>
              <p>Fuel Consumption: {car.fuelConsumption} L/100km</p>
              <p>Engine Size: {car.engineSize}</p>
              <p>Rental Price: {car.rentalPrice} per day</p>
              <p>Rental Company: {car.rentalCompany}</p>
              <p>Address: {car.address}</p>
              <p>Mileage: {car.mileage} km</p>
              <h4>Accessories:</h4>
              <ul>
                {car.accessories.map((accessory, index) => (
                  <li key={index}>{accessory}</li>
                ))}
              </ul>
              <h4>Functionalities:</h4>
              <ul>
                {car.functionalities.map((functionality, index) => (
                  <li key={index}>{functionality}</li>
                ))}
              </ul>
              <p>Rental Conditions: {car.rentalConditions}</p>
              <button>Learn More</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Catalog;
