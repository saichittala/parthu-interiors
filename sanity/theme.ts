import { buildLegacyTheme } from 'sanity';

export const unslopTheme = buildLegacyTheme({
  /* Base theme colors */
  '--black': '#080809',
  '--white': '#FFFFFF',

  '--gray': '#71717A',
  '--gray-base': '#27272A',

  '--component-bg': '#111215',
  '--component-text-color': '#EDEDEE',

  /* Brand */
  '--brand-primary': '#C1121F',

  // Default button
  '--default-button-color': '#71717A',
  '--default-button-primary-color': '#C1121F',
  '--default-button-success-color': '#10B981',
  '--default-button-warning-color': '#F59E0B',
  '--default-button-danger-color': '#C1121F',

  /* State */
  '--state-info-color': '#C1121F',
  '--state-success-color': '#10B981',
  '--state-warning-color': '#F59E0B',
  '--state-danger-color': '#C1121F',

  /* Navbar */
  '--main-navigation-color': '#080809',
  '--main-navigation-color--inverted': '#FFFFFF',

  '--focus-color': '#C1121F',
});
