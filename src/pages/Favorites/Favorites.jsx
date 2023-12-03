import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NextPage } from './Favorites.module';
import { getCarsBysearchParams } from '../../redux/cars/operations';

import CarList from 'components/CarList/CarList';
import {
  selectCarsEror,
  selectIsRefreshing,
  selectCarsList,
  selectFavorites,
} from '../../redux/cars/selectors';
const Favorites = () => {
  const dispatch = useDispatch();

  const favoriteCarsIDs = useSelector(selectFavorites);
  console.log(favoriteCarsIDs);
  const cars = useSelector(selectCarsList);
  const [data, setData] = useState([]);
  let Filtered = [];

  useEffect(() => {
    console.log(cars);
    favoriteCarsIDs.favorites.map((element) => {
      const result = cars.filter((car) => car.id === element);
      Filtered = Filtered.concat(result);
    });
    setData(Filtered);
  }, [cars]);

  useEffect(() => {
    var searchParams = new URLSearchParams();
    searchParams.append('limit', 12); // I can't It don't work without limit.

    dispatch(getCarsBysearchParams({ searchParams }));
  }, [dispatch]);

  return (
    <>
      <h1>Favorites</h1>
      <CarList data={data}></CarList>
    </>
  );
};

export default Favorites;
