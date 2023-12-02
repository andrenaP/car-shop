import CarList from 'components/CarList/CarList';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectCarsEror, selectIsRefreshing } from '../../redux/cars/selectors';

import { getAllCars } from '../../redux/cars/operations';

const Catalog = () => {
  const dispatch = useDispatch();
  const IsRefreshing = useSelector(selectIsRefreshing);
  const error = useSelector(selectCarsEror);

  useEffect(() => {
    dispatch(getAllCars());
  }, [dispatch]);

  return (
    <div>
      {' '}
      {IsRefreshing && !error && <b>Request in progress</b>} <CarList />{' '}
    </div>
  );
};

export default Catalog;
