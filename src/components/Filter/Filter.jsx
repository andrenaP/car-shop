import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import { getCarsBysearchParams } from '../../redux/cars/operations';
import { useEffect } from 'react';

import React from 'react';
import {
  InputContainer,
  Label,
  Filters,
  InputMinMileage,
  InputMaxMileage,
  Mileage,
  SpanMaxMileage,
  SpanMinMileage,
  Button,
} from './Filter.module';
import { useState } from 'react';

const Filter = ({ page, setPage, setData }) => {
  const dispatch = useDispatch();

  const [brand, setBrand] = useState('');
  const [priceStep, setPriceStep] = useState(null);
  const [minMileage, setMinMileage] = useState('');
  const [maxMileage, setMaxMileage] = useState('');
  const GetData = ({ brand, priceStep, minMileage, maxMileage }) => {
    var searchParams = new URLSearchParams();
    if (brand) searchParams.append('make', brand);
    if (page === 0) {
      searchParams.append('page', 1);
      setPage(1);
    } else searchParams.append('page', page);

    searchParams.append('limit', 12);
    dispatch(
      getCarsBysearchParams({ searchParams, priceStep, minMileage, maxMileage })
    );
  };

  useEffect(() => {
    if (page != 1) {
      GetData({ brand, priceStep, minMileage, maxMileage });
    }
  }, [page]);

  const handlePriceChange = (selected) => {
    if (selected) {
      setPriceStep(selected.value);
    } else setPriceStep(null);
  };
  const handleBrandChange = (selected) => {
    if (selected) {
      setBrand(selected.value);
    } else setBrand(null);
  };
  // const formatMileage = value => {
  //   const cleanedValue = value.toString().replace(/,/g, '');
  //   const formattedValue = cleanedValue.replace(/(\d)(?=(\d{3})+\.)/g, ',');
  //   return formattedValue;
  // };

  function formatMileage(num) {
    return num.toString().replace(/^[+-]?\d+/, function (int) {
      return int.replace(/(\d)(?=(\d{3})+$)/g, '$1,');
    });
  }

  const handleChange = (event, SetFunction) => {
    SetFunction(event.target.value);
  };

  const data = [
    { value: 'Buick', label: 'Buick' },
    { value: 'Volvo', label: 'Volvo' },
    { value: 'HUMMER', label: 'HUMMER' },
    { value: 'Subaru', label: 'Subaru' },
    { value: 'Mitsubishi', label: 'Mitsubishi' },
    { value: 'Nissan', label: 'Nissan' },
    { value: 'Lincoln', label: 'Lincoln' },
    { value: 'GMC', label: 'GMC' },
    { value: 'Hyundai', label: 'Hyundai' },
    { value: 'MINI', label: 'MINI' },
    { value: 'Bentley', label: 'Bentley' },
    { value: 'Mercedes-Benz', label: 'Mercedes-Benz' },
    { value: 'Aston Martin', label: 'Aston Martin' },
    { value: 'Pontiac', label: 'Pontiac' },
    { value: 'Lamborghini', label: 'Lamborghini' },
    { value: 'Audi', label: 'Audi' },
    { value: 'BMW', label: 'BMW' },
    { value: 'Chevrolet', label: 'Chevrolet' },
    { value: 'Chrysler', label: 'Chrysler' },
    { value: 'Kia', label: 'Kia' },
    { value: 'Land', label: 'Land' },
  ];
  const priceRangeOptions = [];
  for (let i = 30; i <= 500; i += 10) {
    priceRangeOptions.push({ value: i, label: `${i}` });
  }

  return (
    <>
      <Filters>
        <InputContainer>
          <Label htmlFor="CarBrand">Car brand</Label>
          <Select
            id="CarBrand"
            placeholder="Enter the text"
            className="basic-single"
            classNamePrefix="select"
            // defaultValue={data[0]}
            isClearable={true}
            isSearchable={true}
            onChange={handleBrandChange}
            name="color"
            options={data}
          />
        </InputContainer>

        <InputContainer>
          <Label htmlFor="PriceHour">Price/ 1 hour</Label>
          <Select
            id="PriceHour"
            placeholder="To $"
            className="basic-single"
            classNamePrefix="select"
            defaultValue={priceRangeOptions[0]}
            isClearable={true}
            isSearchable={true}
            name="color"
            onChange={handlePriceChange}
            options={priceRangeOptions}
            value={
              priceStep ? { value: priceStep, label: `To $${priceStep}` } : null
            }
          />
        </InputContainer>

        <InputContainer>
          <Label htmlFor="PriceHour">Сar mileage / km</Label>
          <Mileage>
            <InputMinMileage
              type="text"
              value={formatMileage(minMileage)}
              onChange={(event) => handleChange(event, setMinMileage)}
            />
            <SpanMaxMileage>From</SpanMaxMileage>
            <InputMaxMileage
              type="text"
              value={formatMileage(maxMileage)}
              onChange={(event) => handleChange(event, setMaxMileage)}
            />
            <SpanMinMileage>To</SpanMinMileage>
          </Mileage>
        </InputContainer>
        <Button
          type="button"
          onClick={() => {
            setPage(1);
            setData([]);
            GetData({ brand, priceStep, minMileage, maxMileage });
          }}
        >
          Search
        </Button>
      </Filters>
    </>
  );
};

export default Filter;
