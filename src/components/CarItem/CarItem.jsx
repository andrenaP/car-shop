import delafultimag from 'assets/delafult-image.png';
import Heart from 'components/Heart/Heart';
import {
  CarCard,
  CarImg,
  CarData,
  CarDataHeader,
  CarDataText,
  TextItem,
  Button,
  CarDataHeaderName,
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
  const handleLoadInfo = userId => {
    console.log(userId);
  };

  return (
    <CarCard key={id}>
      <div>
        <Heart dataId={id}></Heart>
        <CarImg src={img} alt={make} />
      </div>
      <CarData>
        <CarDataHeader>
          <CarDataHeaderName>
            <span>{make}</span> <span>{model}</span>
            {', '}
            <span>{year}</span>
          </CarDataHeaderName>

          <span>{rentalPrice}</span>
        </CarDataHeader>
        <CarDataText>
          <TextItem>{address}</TextItem>
          <TextItem>{rentalCompany}</TextItem>
          <TextItem>{model}</TextItem>
          <TextItem>{id}</TextItem>
          <TextItem>{functionalities[0]}</TextItem>
        </CarDataText>
      </CarData>
      <Button
        onClick={() => {
          handleLoadInfo(id);
        }}
      >
        Learn&nbsp;more
      </Button>
    </CarCard>
  );
};

export default CarItem;
