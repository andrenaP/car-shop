import { useSelector } from 'react-redux';
import CarItem from 'components/CarItem/CarItem';
import { CarUl } from './CarList.styled';
import { selectCarsList } from '../../redux/cars/selectors';
import { useEffect, useState } from 'react';

const ContactList = ({ data, setModalID }) => {
  // const cars = useSelector(selectCarsList);

  return (
    <>
      <CarUl>
        {data.length === 0 && 'Nothing found'}
        {data.length > 0 && (
          <>
            {data.map((cars) => {
              if (cars.id)
                return (
                  <CarItem key={cars.id} {...cars} setModalID={setModalID} />
                );
            })}
          </>
        )}
      </CarUl>
    </>
  );
};

export default ContactList;
