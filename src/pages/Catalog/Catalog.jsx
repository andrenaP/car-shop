import CarList from 'components/CarList/CarList';
// import { Modal } from 'components/Modal/Modal';
import { NextPage } from './Catalog.module';

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Filter from 'components/Filter/Filter';
import {
  selectCarsEror,
  selectIsRefreshing,
  selectCarsList,
} from '../../redux/cars/selectors';

const Catalog = () => {
  const IsRefreshing = useSelector(selectIsRefreshing);
  const cars = useSelector(selectCarsList);
  const error = useSelector(selectCarsEror);
  const [page, setPage] = useState(1);

  const UpdatePage = () => {
    setPage(page + 1);
    // setData(data.concat(cars));
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    setData(data.concat(cars));
  }, [cars]);

  return (
    <div>
      {' '}
      <Filter page={page} setPage={setPage} setData={setData}></Filter>
      {IsRefreshing && !error && <b>Request in progress</b>}{' '}
      <CarList data={data} />{' '}
      {/* <Modal onClose={() => console.log('Closed')}>this is Modal</Modal> */}
      {cars.length % 12 === 0 && cars.length > 0 && (
        <NextPage onClick={UpdatePage}>Load more</NextPage>
      )}
    </div>
  );
};

export default Catalog;
