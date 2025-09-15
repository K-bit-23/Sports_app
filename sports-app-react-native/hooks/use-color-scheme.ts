
import { useContext } from 'react';
import { ThemeContext } from '@/context/ThemeContext';

export const useColorScheme = () => {
  return useContext(ThemeContext);
};
