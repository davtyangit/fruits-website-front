import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FetchLimitedFruits } from '../../redux/fruitsSlice';

export const useFruitsDemo = () => {
  const { fruits, loading } = useSelector((state) => state.fruits);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(FetchLimitedFruits());
  }, []);

  const getAll = () => {
    navigate('/products/fruits');
  };

  return {
    fruits,
    loading,
    getAll,
  };
};
