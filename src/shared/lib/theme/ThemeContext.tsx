import { createContext } from 'react';

import type { ThemeMode } from './types';

interface ThemeContextType {
  theme: ThemeMode;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | null>(null);
