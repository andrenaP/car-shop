import delafultimag from '../../assets/delafult-image.png';
import {
    CarList,
    CarImg
  } from './CarItem.styled';
const CarItem = ({ id, year, make, model, type, img=delafultimag, description, fuelConsumption, engineSize, accessories, functionalities, rentalPrice, rentalCompany, address, rentalConditions, mileage }) => {

    return (
      <CarList key={id}>
        <CarImg src={img} alt={make} />
        <span >{make}</span>
        <span >{model}</span>
        <span >{year}</span>
        <span >{rentalPrice}</span>
        <span >{address}</span>
        <span >{rentalCompany}</span>
        <span >{model}</span>
        <span >{id}</span>
        <span >{functionalities}</span>
      </CarList>
    );
  };
  
  export default CarItem;
  