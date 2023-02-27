import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FetchFruits } from '../../redux/fruitsSlice';

export const useProducts = () => {
  const { fruits, loading } = useSelector((state) => state.fruits);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchFruits());
  }, []);

  return {
    fruits,
    loading,
  };
};
