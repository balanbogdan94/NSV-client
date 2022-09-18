import { SxProps, Theme } from '@mui/material';

export const showOnlyOnPhone: SxProps<Theme> = {
  display: {
    mobile: 'block',
    tablet: 'none',
  },
};

export const hideOnPhone: SxProps<Theme> = {
  display: {
    mobile: 'none',
    tablet: 'block',
  },
};
