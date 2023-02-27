import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FetchVagetables } from '../../redux/vagetablesSlice';

export const useVagetables = () => {
  const { vagetables, loading } = useSelector((state) => state.vagetables);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchVagetables());
  }, []);

  return {
    vagetables,
    loading,
  };
};
