import icons from 'assets/icons.svg';
import { HeartImage } from './Heart.module';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/cars/selectors';
import { addFavorite, removeFavorite } from '../../redux/cars/slice';

export default function Heart({ dataId }) {
  const dispatch = useDispatch();
  const favoriteCars = useSelector(selectFavorites);

  const [CheckboxState, setCheckboxState] = useState(true);

  const isChecked = favoriteCars.favorites.some((id) => id === dataId);

  const handleToggleFavorite = () => {
    if (isChecked) {
      dispatch(removeFavorite(dataId));
    } else {
      dispatch(addFavorite(dataId));
    }
  };

  return (
    <HeartImage htmlFor="heart-checkbox" onClick={handleToggleFavorite}>
      <use
        href={!isChecked ? icons + '#icon-normal' : icons + '#icon-active'}
        htmlFor="heart-checkbox"
      />
    </HeartImage>
  );
}
