import { useTheme } from '@shared/lib/theme/useTheme';
import { Button } from '@shared/ui/Button';
import { Moon, Sun } from 'lucide-react';

import styles from './ThemeSwitcher.module.scss';

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button onClick={toggleTheme} className={styles.themeButton}>
      {theme === 'light' ? (
        <Sun className={styles.themeIcon} />
      ) : (
        <Moon className={styles.themeIcon} />
      )}
    </Button>
  );
};
