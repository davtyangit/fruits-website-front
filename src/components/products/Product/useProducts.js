import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { AddToCard } from '../../../redux/fruitsSlice';

export const useProducts = () => {
  const dispatch = useDispatch();

  const handleAdd = (fruit) => {
    dispatch(AddToCard(fruit));
    toast.success(`${fruit.name} added to card`);
  };

  return {
    handleAdd,
  };
};
