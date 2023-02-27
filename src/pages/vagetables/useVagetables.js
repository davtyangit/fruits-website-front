import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FetchVagetables, SearchVagetables } from '../../redux/vagetablesSlice';

export const useVagetables = () => {
  const dispatch = useDispatch();

  const { vagetables, loading } = useSelector((state) => state.vagetables);
  const [query, setQuery] = useState('');

  useEffect(() => {
    dispatch(FetchVagetables());
  }, []);

  const getVagetables = (query) => {
    dispatch(SearchVagetables(query));
  };

  return {
    vagetables,
    loading,
    query,
    setQuery,
    getVagetables,
  };
};
