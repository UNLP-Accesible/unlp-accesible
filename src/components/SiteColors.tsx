'use client';

import { ColorsSchema } from '@/sanity/lib/queries';
import { useEffect } from 'react';

const SiteColors = ({ colors }: { colors: ColorsSchema }) => {
  useEffect(() => {
    if (colors) {
      const root = document.documentElement;
      root.style.setProperty('--color-brand', colors.brand.hex);
      root.style.setProperty('--color-dark', colors.dark.hex);
      root.style.setProperty('--color-white', colors.white.hex);
    }
  }, [colors]);

  return null;
};

export default SiteColors;
