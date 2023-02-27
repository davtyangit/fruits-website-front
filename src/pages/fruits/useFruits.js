import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FetchFruits, SearchFruit } from '../../redux/fruitsSlice';

export const useFruits = () => {
  const dispatch = useDispatch();

  const { fruits, loading } = useSelector((state) => state.fruits);
  const [query, setQuery] = useState('');

  useEffect(() => {
    dispatch(FetchFruits());
  }, []);

  const getFruit = (query) => {
    dispatch(SearchFruit(query));
  };

  return {
    fruits,
    loading,
    query,
    setQuery,
    getFruit,
  };
};
