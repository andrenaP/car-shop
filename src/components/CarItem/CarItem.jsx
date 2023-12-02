import delafultimag from 'assets/delafult-image.png';
import {
  CarList,
  CarImg,
  CarImgBox,
  CarData,
  CarDataHeader,
  CarDataText,
} from './CarItem.styled';
const CarItem = ({
  id,
  year,
  make,
  model,
  type,
  img = delafultimag,
  description,
  fuelConsumption,
  engineSize,
  accessories,
  functionalities,
  rentalPrice,
  rentalCompany,
  address,
  rentalConditions,
  mileage,
}) => {
  const handleLoadInfo = (userId) => {
    console.log(userId);
  };

  return (
    <CarList key={id}>
      <CarImgBox>
        <CarImg src={img} alt={make} />
      </CarImgBox>
      <input type="checkbox" />
      <CarData>
        <CarDataHeader>
          <span>{make}</span>
          <span>{model}</span>
          <span>{year}</span>
          <span>{rentalPrice}</span>
        </CarDataHeader>
        <CarDataText>
          <span>{address}</span>
          <span>{rentalCompany}</span>
          <span>{model}</span>
          <span>{id}</span>
          <span>{functionalities}</span>
        </CarDataText>
      </CarData>
      <button
        onClick={() => {
          handleLoadInfo(id);
        }}
      >
        Learn more
      </button>
    </CarList>
  );
};

export default CarItem;
