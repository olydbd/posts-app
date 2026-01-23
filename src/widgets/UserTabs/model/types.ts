import type { ReactNode } from 'react';

export interface NavLinkItem {
  to: string;
  label: string;
  icon: ReactNode;
}
