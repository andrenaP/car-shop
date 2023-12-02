import { useSelector } from 'react-redux';
import CarItem from 'components/CarItem/CarItem';
import { CarUl } from './CarList.styled';
import { selectCarsList } from '../../redux/cars/selectors';

const ContactList = () => {
  const cars = useSelector(selectCarsList);

  return (
    <>
      <CarUl>
        {cars.length === 0 && 'Nothing found'}
        {cars.length > 0 && (
          <>
            {cars.map((cars) => {
              if (cars.id) return <CarItem key={cars.id} {...cars} />;
            })}
          </>
        )}
      </CarUl>
    </>
  );
};

export default ContactList;
