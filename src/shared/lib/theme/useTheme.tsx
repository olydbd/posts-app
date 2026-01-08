import { useContext } from 'react';

import { ThemeContext } from './ThemeContext';

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('Must be used within ThemeProvider');
  return context;
}
