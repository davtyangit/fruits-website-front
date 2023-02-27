import { useNavigate } from 'react-router-dom';

export const useProductPage = () => {
  const navigate = useNavigate();
  const toFruits = () => navigate('/products/fruits');
  const toVagetables = () => navigate('/products/vagetables');

  return {
    navigate,
    toFruits,
    toVagetables,
  };
};
