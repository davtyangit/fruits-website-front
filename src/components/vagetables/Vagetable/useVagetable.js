import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { AddToCard } from '../../../redux/fruitsSlice';

export const useVagetable = () => {
  const dispatch = useDispatch();

  const handleAdd = (vagetable) => {
    dispatch(AddToCard(vagetable));
    toast.success(`${vagetable.name} added to card`);
  };
  return {
    handleAdd,
  };
};
