import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

import axios from 'axios';
import CarItem from 'components/CarItem/CarItem';

import { CarUl } from './CarList.styled';

const SetCars = (Seter, page = 1) => {
  const url = new URL('https://656b2dfedac3630cf727cdb0.mockapi.io/advert');
  url.searchParams.append('page', page);
  url.searchParams.append('limit', 12);
  const res = axios.get(url).then(function (response) {
    Seter(response.data);
  });
};

const ContactList = () => {
  const [cardata, setcardata] = useState([]);
  useEffect(() => {
    SetCars(setcardata);
  }, []);

  return (
    <>
      <CarUl>
        {cardata.length === 0 && 'Nothing found'}
        {cardata && (
          <>
            {cardata.map((cars) => {
              return <CarItem key={cars.id} {...cars} />;
            })}
          </>
        )}
      </CarUl>
    </>
  );
};

export default ContactList;
