import CarList from 'components/CarList/CarList';
// import { Modal } from 'components/Modal/Modal';
import { NextPage } from './Catalog.module';

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectCarsEror,
  selectIsRefreshing,
  selectCarsList,
} from '../../redux/cars/selectors';

import { getAllCars } from '../../redux/cars/operations';

const Catalog = () => {
  const dispatch = useDispatch();
  const IsRefreshing = useSelector(selectIsRefreshing);
  const cars = useSelector(selectCarsList);
  const error = useSelector(selectCarsEror);
  const [page, setPage] = useState(1);
  const UpdatePage = () => {
    setPage(page + 1);
  };
  useEffect(() => {
    dispatch(getAllCars(page));
  }, [dispatch, page]);
  console.log(cars);
  return (
    <div>
      {' '}
      {IsRefreshing && !error && <b>Request in progress</b>} <CarList />{' '}
      {/* <Modal onClose={() => console.log('Closed')}>this is Modal</Modal> */}
      <NextPage onClick={UpdatePage}>Load more</NextPage>
    </div>
  );
};

export default Catalog;
