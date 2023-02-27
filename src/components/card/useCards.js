import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FetchCardContent } from '../../redux/fruitsSlice';

export const useCards = () => {
  const dispatch = useDispatch();
  const card = useSelector((state) => state.fruits.card);

  useEffect(() => {
    dispatch(FetchCardContent());
  }, []);

  return {
    card,
  };
};
