import PropTypes from 'prop-types';

import CarItem from 'components/CarItem/CarItem';
import data from '../../json/advertsCars.json';
const ContactList = () => {
  return (
    <>
      <ul className="ListOfNames">
        {
          <>
            {data.map(cars => {
              return <CarItem key={cars.id} {...cars} />;
            })}
          </>
        }
      </ul>
    </>
  );
};

export default ContactList;

